import Block from "core/components/Block";
import Breadcrumbs from "core/components/Breadcrumbs";
import Button from "core/components/Button";
import MarkdownViewer from "core/components/MarkdownViewer";
import Overflow from "core/components/Overflow/Overflow";
import Page from "core/components/Page";
import { createGetServerSideProps } from "core/helpers/page";
import { NextPageWithLayout } from "core/helpers/types";
import useCacheKey from "core/hooks/useCacheKey";
import { useTranslation } from "next-i18next";
import { useState } from "react";
import UpdateDescriptionDialog from "workspaces/features/UpdateDescriptionDialog";
import {
  useWorkspacePageQuery,
  WorkspacePageDocument,
  WorkspacePageQuery,
} from "workspaces/graphql/queries.generated";
import WorkspaceLayout from "workspaces/layouts/WorkspaceLayout";

type Props = {
  workspaceSlug: string;
  page: number;
  perPage: number;
};

const WorkspaceHome: NextPageWithLayout = (props: Props) => {
  const { t } = useTranslation();

  useCacheKey("workspace", () => refetch());

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { data, refetch } = useWorkspacePageQuery({
    variables: { slug: props.workspaceSlug },
  });

  if (!data?.workspace) {
    return null;
  }

  const { workspace } = data;

  return (
    <Page title={workspace.name}>
      <WorkspaceLayout
        workspace={workspace}
        helpLinks={[
          {
            href: "https://github.com/BLSQ/openhexa/wiki/User-manual#about-workspaces",
            label: t("About workspaces"),
          },
          {
            href: "https://github.com/BLSQ/openhexa/wiki/User-manual#editing-the-workspace-homepage",
            label: t("Editing the workspace homepage"),
          },
        ]}
      >
        <WorkspaceLayout.Header className="flex items-center justify-between">
          <Breadcrumbs withHome={false}>
            <Breadcrumbs.Part
              isFirst
              href={`/workspaces/${encodeURIComponent(workspace.slug)}`}
            >
              {workspace.name}
            </Breadcrumbs.Part>
          </Breadcrumbs>
          {workspace.permissions.update && (
            <Button onClick={() => setIsDialogOpen(true)}>{t("Edit")}</Button>
          )}
        </WorkspaceLayout.Header>
        <WorkspaceLayout.PageContent>
          <div className="relative mb-2 h-60 w-72 overflow-auto bg-white">
            <div className="pointer-events-none sticky top-0 -mt-5 h-5 w-full bg-gradient-to-b from-white to-transparent"></div>
            {workspace.description}
            <div className="pointer-events-none sticky bottom-0 -mt-5 h-5 w-full bg-gradient-to-t from-white to-transparent"></div>
          </div>
          <Overflow className="my-8 h-24 w-1/4 " fromColor="from-gray-100">
            {workspace.description}
          </Overflow>

          <Block>
            <Block.Content>
              <MarkdownViewer>{workspace.description || ""}</MarkdownViewer>
            </Block.Content>
          </Block>
        </WorkspaceLayout.PageContent>
        <UpdateDescriptionDialog
          open={isDialogOpen}
          workspace={workspace}
          onClose={() => {
            setIsDialogOpen(false);
          }}
        />
      </WorkspaceLayout>
    </Page>
  );
};

WorkspaceHome.getLayout = (page) => page;

export const getServerSideProps = createGetServerSideProps({
  requireAuth: true,
  async getServerSideProps(ctx, client) {
    await WorkspaceLayout.prefetch(ctx, client);
    const { data } = await client.query<WorkspacePageQuery>({
      query: WorkspacePageDocument,
      variables: {
        slug: ctx.params?.workspaceSlug,
      },
    });

    if (!data.workspace) {
      return {
        notFound: true,
      };
    }

    return {
      props: {
        workspaceSlug: ctx.params?.workspaceSlug,
      },
    };
  },
});

export default WorkspaceHome;
