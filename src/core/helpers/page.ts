import { getMe } from "identity/helpers/auth";
import { GetServerSidePropsContext, GetServerSidePropsResult } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { addApolloState, CustomApolloClient, getApolloClient } from "./apollo";

interface GetServerSidePropsContextWithUser extends GetServerSidePropsContext {
  me: Awaited<ReturnType<typeof getMe>>;
}

interface CreateGetServerSideProps {
  i18n?: string[];
  requireAuth?: boolean;
  getServerSideProps?: (
    ctx: GetServerSidePropsContextWithUser,
    client: CustomApolloClient
  ) =>
    | Promise<GetServerSidePropsResult<any> | void>
    | GetServerSidePropsResult<any>
    | void;
}

interface ServerSideProps {
  me: Awaited<ReturnType<typeof getMe>>;
  [key: string]: any;
}

export function createGetServerSideProps(options: CreateGetServerSideProps) {
  const {
    i18n = ["messages"],
    requireAuth = false,
    getServerSideProps,
  } = options;

  return async function (
    ctx: GetServerSidePropsContextWithUser
  ): Promise<GetServerSidePropsResult<ServerSideProps>> {
    const translations = await serverSideTranslations("en", i18n);

    let result = {
      props: {
        ...translations,
      },
    } as any;
    ctx.me = await getMe(ctx);

    if (!ctx.me?.user && requireAuth) {
      return {
        redirect: {
          permanent: false,
          destination: `/login?next=${encodeURIComponent(ctx.resolvedUrl)}`,
        },
      };
    }
    if (ctx.me?.user) {
      const { features } = ctx.me;

      if (
        !features.some(
          (f) => f.code === "openhexa_legacy" || f.code === "workspaces"
        )
      ) {
        throw new Error(
          "There is a configuration error with this account. Please contact your administrator."
        );
      }

      if (
        !features.some((f) => f.code === "openhexa_legacy") &&
        !ctx.resolvedUrl.startsWith("/workspaces")
      ) {
        return {
          redirect: {
            permanent: false,
            destination: "/workspaces",
          },
        };
      }

      if (
        !features.some((f) => f.code === "workspaces") &&
        ctx.resolvedUrl.startsWith("/workspaces")
      ) {
        return {
          redirect: {
            permanent: false,
            destination: "/",
          },
        };
      }
    }
    result.props = {
      ...result.props,
      me: ctx.me,
    };

    if (getServerSideProps) {
      const client = getApolloClient(ctx.req);
      const nextRes = await getServerSideProps(ctx, client);
      return {
        ...result,
        ...(nextRes ?? {}),
        props: {
          ...(result.props ?? {}),
          ...addApolloState(client).props,
          ...(nextRes && "props" in nextRes ? nextRes.props : {}),
        },
      };
    }

    return result;
  };
}
