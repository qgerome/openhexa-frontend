import * as Types from '../../graphql-types';

import { gql } from '@apollo/client';
import { ArchiveWorkspace_WorkspaceFragmentDoc } from '../features/ArchiveWorkspaceDialog/ArchiveWorkspaceDialog.generated';
import { InviteMemberWorkspace_WorkspaceFragmentDoc } from '../features/InviteMemberDialog/InviteMemberDialog.generated';
import { UpdateWorkspaceDescription_WorkspaceFragmentDoc } from '../features/UpdateDescriptionDialog/UpdateDescriptionDialog.generated';
import { WorkspaceLayout_WorkspaceFragmentDoc } from '../layouts/WorkspaceLayout/WorkspaceLayout.generated';
import { CreatePipelineDialog_WorkspaceFragmentDoc } from '../features/CreatePipelineDialog/CreatePipelineDialog.generated';
import { PipelineCard_PipelineFragmentDoc } from '../features/PipelineCard/PipelineCard.generated';
import { PipelineRunStatusBadge_RunFragmentDoc } from '../../pipelines/features/PipelineRunStatusBadge.generated';
import { PipelineVersionsDialog_PipelineFragmentDoc } from '../features/PipelineVersionsDialog/PipelineVersionsDialog.generated';
import { RunPipelineDialog_PipelineFragmentDoc, RunPipelineDialog_RunFragmentDoc } from '../features/RunPipelineDialog/RunPipelineDialog.generated';
import { DeletePipelineVersion_PipelineFragmentDoc, DeletePipelineVersion_VersionFragmentDoc } from '../features/DeletePipelineVersionDialog/DeletePipelineVersionDialog.generated';
import { UserColumn_UserFragmentDoc } from '../../core/components/DataGrid/UserColumn.generated';
import { User_UserFragmentDoc } from '../../core/features/User/User.generated';
import { RunOutputsTable_WorkspaceFragmentDoc, RunOutputsTable_RunFragmentDoc } from '../features/RunOutputsTable/RunOutputsTable.generated';
import { RunMessages_RunFragmentDoc } from '../../pipelines/features/RunMessages/RunMessages.generated';
import { RunLogs_RunFragmentDoc } from '../../pipelines/features/RunLogs/RunLogs.generated';
import { BucketExplorer_WorkspaceFragmentDoc, BucketExplorer_ObjectsFragmentDoc } from '../features/BucketExplorer/BucketExplorer.generated';
import { UploadObjectDialog_WorkspaceFragmentDoc } from '../features/UploadObjectDialog/UploadObjectDialog.generated';
import { CreateBucketFolderDialog_WorkspaceFragmentDoc } from '../features/CreateBucketFolderDialog/CreateBucketFolderDialog.generated';
import { DatabaseVariablesSection_WorkspaceFragmentDoc } from '../features/DatabaseVariablesSection/DatabaseVariablesSection.generated';
import { DatabaseTableDataGrid_TableFragmentDoc, DatabaseTableDataGrid_WorkspaceFragmentDoc } from '../features/DatabaseTableDataGrid/DatabaseTableDataGrid.generated';
import { CreateConnectionDialog_WorkspaceFragmentDoc } from '../features/CreateConnectionDialog/CreateConnectionDialog.generated';
import { ConnectionUsageSnippets_ConnectionFragmentDoc } from '../features/ConnectionUsageSnippets/ConnectionUsageSnippets.generated';
import { ConnectionFieldsSection_ConnectionFragmentDoc } from '../features/ConnectionFieldsSection/ConnectionFieldsSection.generated';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type WorkspacesPageQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type WorkspacesPageQuery = { __typename?: 'Query', workspaces: { __typename?: 'WorkspacePage', items: Array<{ __typename?: 'Workspace', slug: string }> } };

export type WorkspacePageQueryVariables = Types.Exact<{
  slug: Types.Scalars['String']['input'];
}>;


export type WorkspacePageQuery = { __typename?: 'Query', workspace?: { __typename?: 'Workspace', slug: string, name: string, description?: string | null, countries: Array<{ __typename?: 'Country', code: string, flag: string, name: string }>, permissions: { __typename?: 'WorkspacePermissions', delete: boolean, update: boolean, manageMembers: boolean, launchNotebookServer: boolean } } | null };

export type WorkspacePipelinesPageQueryVariables = Types.Exact<{
  workspaceSlug: Types.Scalars['String']['input'];
  page?: Types.InputMaybe<Types.Scalars['Int']['input']>;
  perPage?: Types.InputMaybe<Types.Scalars['Int']['input']>;
}>;


export type WorkspacePipelinesPageQuery = { __typename?: 'Query', workspace?: { __typename?: 'Workspace', slug: string, name: string, permissions: { __typename?: 'WorkspacePermissions', manageMembers: boolean, update: boolean, launchNotebookServer: boolean }, countries: Array<{ __typename?: 'Country', flag: string, code: string }> } | null, pipelines: { __typename?: 'PipelinesPage', totalItems: number, totalPages: number, pageNumber: number, items: Array<{ __typename?: 'Pipeline', id: string, code: string, name?: string | null, schedule?: string | null, description?: string | null, lastRuns: { __typename?: 'PipelineRunPage', items: Array<{ __typename?: 'PipelineRun', id: string, status: Types.PipelineRunStatus }> } }> } };

export type WorkspaceNotebooksPageQueryVariables = Types.Exact<{
  workspaceSlug: Types.Scalars['String']['input'];
}>;


export type WorkspaceNotebooksPageQuery = { __typename?: 'Query', notebooksUrl: any, workspace?: { __typename?: 'Workspace', slug: string, name: string, permissions: { __typename?: 'WorkspacePermissions', launchNotebookServer: boolean, manageMembers: boolean, update: boolean }, countries: Array<{ __typename?: 'Country', flag: string, code: string }> } | null };

export type WorkspacePipelinePageQueryVariables = Types.Exact<{
  workspaceSlug: Types.Scalars['String']['input'];
  pipelineCode: Types.Scalars['String']['input'];
  page?: Types.InputMaybe<Types.Scalars['Int']['input']>;
  perPage?: Types.InputMaybe<Types.Scalars['Int']['input']>;
}>;


export type WorkspacePipelinePageQuery = { __typename?: 'Query', workspace?: { __typename?: 'Workspace', slug: string, name: string, permissions: { __typename?: 'WorkspacePermissions', manageMembers: boolean, update: boolean, launchNotebookServer: boolean }, countries: Array<{ __typename?: 'Country', flag: string, code: string }> } | null, pipeline?: { __typename?: 'Pipeline', id: string, code: string, name?: string | null, description?: string | null, schedule?: string | null, permissions: { __typename?: 'PipelinePermissions', run: boolean, update: boolean, deleteVersion: boolean }, currentVersion?: { __typename?: 'PipelineVersion', id: string, number: number, createdAt: any, parameters: Array<{ __typename?: 'PipelineParameter', name: string, code: string, required: boolean, help?: string | null, type: string, default?: any | null, choices?: Array<any> | null, multiple: boolean }>, user?: { __typename?: 'User', displayName: string } | null } | null, recipients: Array<{ __typename?: 'PipelineRecipient', user: { __typename?: 'User', id: string, displayName: string } }>, runs: { __typename?: 'PipelineRunPage', totalItems: number, totalPages: number, pageNumber: number, items: Array<{ __typename?: 'PipelineRun', id: string, executionDate?: any | null, duration?: number | null, triggerMode?: Types.PipelineRunTrigger | null, status: Types.PipelineRunStatus, version: { __typename?: 'PipelineVersion', number: number, id: string }, user?: { __typename?: 'User', id: string, email: string, displayName: string, avatar: { __typename?: 'Avatar', initials: string, color: string } } | null }> }, workspace?: { __typename?: 'Workspace', slug: string } | null } | null };

export type WorkspacePipelineStartPageQueryVariables = Types.Exact<{
  workspaceSlug: Types.Scalars['String']['input'];
}>;


export type WorkspacePipelineStartPageQuery = { __typename?: 'Query', workspace?: { __typename?: 'Workspace', slug: string, name: string, permissions: { __typename?: 'WorkspacePermissions', manageMembers: boolean, update: boolean, launchNotebookServer: boolean }, countries: Array<{ __typename?: 'Country', flag: string, code: string }> } | null };

export type WorkspacePipelineRunPageQueryVariables = Types.Exact<{
  workspaceSlug: Types.Scalars['String']['input'];
  runId: Types.Scalars['UUID']['input'];
}>;


export type WorkspacePipelineRunPageQuery = { __typename?: 'Query', workspace?: { __typename?: 'Workspace', slug: string, name: string, bucket: { __typename?: 'Bucket', name: string }, permissions: { __typename?: 'WorkspacePermissions', manageMembers: boolean, update: boolean, launchNotebookServer: boolean }, countries: Array<{ __typename?: 'Country', flag: string, code: string }> } | null, pipelineRun?: { __typename?: 'PipelineRun', id: string, config: any, executionDate?: any | null, duration?: number | null, triggerMode?: Types.PipelineRunTrigger | null, sendMailNotifications: boolean, logs?: string | null, status: Types.PipelineRunStatus, version: { __typename?: 'PipelineVersion', number: number, id: string, createdAt: any, parameters: Array<{ __typename?: 'PipelineParameter', code: string, name: string, help?: string | null, type: string, default?: any | null, required: boolean, choices?: Array<any> | null, multiple: boolean }>, user?: { __typename?: 'User', displayName: string } | null }, pipeline: { __typename?: 'Pipeline', id: string, code: string, name?: string | null, workspace?: { __typename?: 'Workspace', slug: string } | null, permissions: { __typename?: 'PipelinePermissions', run: boolean }, currentVersion?: { __typename?: 'PipelineVersion', id: string, number: number, createdAt: any, parameters: Array<{ __typename?: 'PipelineParameter', name: string, code: string, required: boolean, help?: string | null, type: string, default?: any | null, choices?: Array<any> | null, multiple: boolean }>, user?: { __typename?: 'User', displayName: string } | null } | null }, outputs: Array<{ __typename?: 'PipelineRunOutput', name?: string | null, type: string, uri: string }>, user?: { __typename?: 'User', id: string, email: string, displayName: string, avatar: { __typename?: 'Avatar', initials: string, color: string } } | null, messages: Array<{ __typename?: 'PipelineRunMessage', message: string, timestamp?: any | null, priority: Types.MessagePriority }> } | null };

export type WorkspaceFilesPageQueryVariables = Types.Exact<{
  workspaceSlug: Types.Scalars['String']['input'];
  page: Types.Scalars['Int']['input'];
  perPage: Types.Scalars['Int']['input'];
  prefix: Types.Scalars['String']['input'];
}>;


export type WorkspaceFilesPageQuery = { __typename?: 'Query', workspace?: { __typename?: 'Workspace', slug: string, name: string, bucket: { __typename?: 'Bucket', name: string, objects: { __typename?: 'BucketObjectPage', hasNextPage: boolean, hasPreviousPage: boolean, pageNumber: number, items: Array<{ __typename?: 'BucketObject', key: string, name: string, path: string, size?: number | null, updatedAt?: any | null, type: Types.BucketObjectType }> } }, permissions: { __typename?: 'WorkspacePermissions', createObject: boolean, deleteObject: boolean, manageMembers: boolean, update: boolean, launchNotebookServer: boolean }, countries: Array<{ __typename?: 'Country', flag: string, code: string }> } | null };

export type WorkspaceDatabasesPageQueryVariables = Types.Exact<{
  workspaceSlug: Types.Scalars['String']['input'];
  page?: Types.InputMaybe<Types.Scalars['Int']['input']>;
  perPage?: Types.InputMaybe<Types.Scalars['Int']['input']>;
}>;


export type WorkspaceDatabasesPageQuery = { __typename?: 'Query', workspace?: { __typename?: 'Workspace', slug: string, name: string, permissions: { __typename?: 'WorkspacePermissions', update: boolean, manageMembers: boolean, launchNotebookServer: boolean }, database: { __typename?: 'Database', tables: { __typename?: 'DatabaseTablePage', totalPages: number, totalItems: number, items: Array<{ __typename?: 'DatabaseTable', name: string, count?: number | null }> }, credentials?: { __typename?: 'DatabaseCredentials', dbName: string, username: string, password: string, host: string, port: number, url: string } | null }, countries: Array<{ __typename?: 'Country', flag: string, code: string }> } | null };

export type WorkspaceDatabaseTablePageQueryVariables = Types.Exact<{
  workspaceSlug: Types.Scalars['String']['input'];
  tableName: Types.Scalars['String']['input'];
}>;


export type WorkspaceDatabaseTablePageQuery = { __typename?: 'Query', workspace?: { __typename?: 'Workspace', slug: string, name: string, database: { __typename?: 'Database', table?: { __typename?: 'DatabaseTable', name: string, count?: number | null, columns: Array<{ __typename?: 'TableColumn', name: string, type: string }> } | null }, permissions: { __typename?: 'WorkspacePermissions', manageMembers: boolean, update: boolean, launchNotebookServer: boolean }, countries: Array<{ __typename?: 'Country', flag: string, code: string }> } | null };

export type ConnectionsPageQueryVariables = Types.Exact<{
  workspaceSlug: Types.Scalars['String']['input'];
}>;


export type ConnectionsPageQuery = { __typename?: 'Query', workspace?: { __typename?: 'Workspace', slug: string, name: string, permissions: { __typename?: 'WorkspacePermissions', update: boolean, manageMembers: boolean, launchNotebookServer: boolean }, connections: Array<{ __typename?: 'Connection', id: string, description?: string | null, name: string, type: Types.ConnectionType, slug: string, updatedAt?: any | null, permissions: { __typename?: 'ConnectionPermissions', update: boolean, delete: boolean } }>, countries: Array<{ __typename?: 'Country', flag: string, code: string }> } | null };

export type ConnectionPageQueryVariables = Types.Exact<{
  workspaceSlug: Types.Scalars['String']['input'];
  connectionId: Types.Scalars['UUID']['input'];
}>;


export type ConnectionPageQuery = { __typename?: 'Query', workspace?: { __typename?: 'Workspace', slug: string, name: string, permissions: { __typename?: 'WorkspacePermissions', update: boolean, manageMembers: boolean, launchNotebookServer: boolean }, countries: Array<{ __typename?: 'Country', flag: string, code: string }> } | null, connection?: { __typename?: 'Connection', id: string, name: string, slug: string, description?: string | null, type: Types.ConnectionType, createdAt: any, permissions: { __typename?: 'ConnectionPermissions', update: boolean, delete: boolean }, fields: Array<{ __typename?: 'ConnectionField', code: string, value?: string | null, secret: boolean }> } | null };

export type CheckWorkspaceAvailabilityQueryVariables = Types.Exact<{
  slug: Types.Scalars['String']['input'];
}>;


export type CheckWorkspaceAvailabilityQuery = { __typename?: 'Query', workspace?: { __typename?: 'Workspace', slug: string } | null };


export const WorkspacesPageDocument = gql`
    query WorkspacesPage {
  workspaces(page: 1, perPage: 1) {
    items {
      slug
    }
  }
}
    `;

/**
 * __useWorkspacesPageQuery__
 *
 * To run a query within a React component, call `useWorkspacesPageQuery` and pass it any options that fit your needs.
 * When your component renders, `useWorkspacesPageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useWorkspacesPageQuery({
 *   variables: {
 *   },
 * });
 */
export function useWorkspacesPageQuery(baseOptions?: Apollo.QueryHookOptions<WorkspacesPageQuery, WorkspacesPageQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<WorkspacesPageQuery, WorkspacesPageQueryVariables>(WorkspacesPageDocument, options);
      }
export function useWorkspacesPageLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<WorkspacesPageQuery, WorkspacesPageQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<WorkspacesPageQuery, WorkspacesPageQueryVariables>(WorkspacesPageDocument, options);
        }
export type WorkspacesPageQueryHookResult = ReturnType<typeof useWorkspacesPageQuery>;
export type WorkspacesPageLazyQueryHookResult = ReturnType<typeof useWorkspacesPageLazyQuery>;
export type WorkspacesPageQueryResult = Apollo.QueryResult<WorkspacesPageQuery, WorkspacesPageQueryVariables>;
export const WorkspacePageDocument = gql`
    query WorkspacePage($slug: String!) {
  workspace(slug: $slug) {
    slug
    name
    description
    countries {
      code
      flag
      name
    }
    permissions {
      delete
      update
      manageMembers
    }
    ...ArchiveWorkspace_workspace
    ...InviteMemberWorkspace_workspace
    ...UpdateWorkspaceDescription_workspace
    ...WorkspaceLayout_workspace
  }
}
    ${ArchiveWorkspace_WorkspaceFragmentDoc}
${InviteMemberWorkspace_WorkspaceFragmentDoc}
${UpdateWorkspaceDescription_WorkspaceFragmentDoc}
${WorkspaceLayout_WorkspaceFragmentDoc}`;

/**
 * __useWorkspacePageQuery__
 *
 * To run a query within a React component, call `useWorkspacePageQuery` and pass it any options that fit your needs.
 * When your component renders, `useWorkspacePageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useWorkspacePageQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useWorkspacePageQuery(baseOptions: Apollo.QueryHookOptions<WorkspacePageQuery, WorkspacePageQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<WorkspacePageQuery, WorkspacePageQueryVariables>(WorkspacePageDocument, options);
      }
export function useWorkspacePageLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<WorkspacePageQuery, WorkspacePageQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<WorkspacePageQuery, WorkspacePageQueryVariables>(WorkspacePageDocument, options);
        }
export type WorkspacePageQueryHookResult = ReturnType<typeof useWorkspacePageQuery>;
export type WorkspacePageLazyQueryHookResult = ReturnType<typeof useWorkspacePageLazyQuery>;
export type WorkspacePageQueryResult = Apollo.QueryResult<WorkspacePageQuery, WorkspacePageQueryVariables>;
export const WorkspacePipelinesPageDocument = gql`
    query WorkspacePipelinesPage($workspaceSlug: String!, $page: Int, $perPage: Int) {
  workspace(slug: $workspaceSlug) {
    slug
    name
    ...WorkspaceLayout_workspace
    ...CreatePipelineDialog_workspace
  }
  pipelines(workspaceSlug: $workspaceSlug, page: $page, perPage: $perPage) {
    items {
      ...PipelineCard_pipeline
    }
    totalItems
    totalPages
    pageNumber
  }
}
    ${WorkspaceLayout_WorkspaceFragmentDoc}
${CreatePipelineDialog_WorkspaceFragmentDoc}
${PipelineCard_PipelineFragmentDoc}`;

/**
 * __useWorkspacePipelinesPageQuery__
 *
 * To run a query within a React component, call `useWorkspacePipelinesPageQuery` and pass it any options that fit your needs.
 * When your component renders, `useWorkspacePipelinesPageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useWorkspacePipelinesPageQuery({
 *   variables: {
 *      workspaceSlug: // value for 'workspaceSlug'
 *      page: // value for 'page'
 *      perPage: // value for 'perPage'
 *   },
 * });
 */
export function useWorkspacePipelinesPageQuery(baseOptions: Apollo.QueryHookOptions<WorkspacePipelinesPageQuery, WorkspacePipelinesPageQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<WorkspacePipelinesPageQuery, WorkspacePipelinesPageQueryVariables>(WorkspacePipelinesPageDocument, options);
      }
export function useWorkspacePipelinesPageLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<WorkspacePipelinesPageQuery, WorkspacePipelinesPageQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<WorkspacePipelinesPageQuery, WorkspacePipelinesPageQueryVariables>(WorkspacePipelinesPageDocument, options);
        }
export type WorkspacePipelinesPageQueryHookResult = ReturnType<typeof useWorkspacePipelinesPageQuery>;
export type WorkspacePipelinesPageLazyQueryHookResult = ReturnType<typeof useWorkspacePipelinesPageLazyQuery>;
export type WorkspacePipelinesPageQueryResult = Apollo.QueryResult<WorkspacePipelinesPageQuery, WorkspacePipelinesPageQueryVariables>;
export const WorkspaceNotebooksPageDocument = gql`
    query WorkspaceNotebooksPage($workspaceSlug: String!) {
  notebooksUrl
  workspace(slug: $workspaceSlug) {
    slug
    permissions {
      launchNotebookServer
    }
    ...WorkspaceLayout_workspace
  }
}
    ${WorkspaceLayout_WorkspaceFragmentDoc}`;

/**
 * __useWorkspaceNotebooksPageQuery__
 *
 * To run a query within a React component, call `useWorkspaceNotebooksPageQuery` and pass it any options that fit your needs.
 * When your component renders, `useWorkspaceNotebooksPageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useWorkspaceNotebooksPageQuery({
 *   variables: {
 *      workspaceSlug: // value for 'workspaceSlug'
 *   },
 * });
 */
export function useWorkspaceNotebooksPageQuery(baseOptions: Apollo.QueryHookOptions<WorkspaceNotebooksPageQuery, WorkspaceNotebooksPageQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<WorkspaceNotebooksPageQuery, WorkspaceNotebooksPageQueryVariables>(WorkspaceNotebooksPageDocument, options);
      }
export function useWorkspaceNotebooksPageLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<WorkspaceNotebooksPageQuery, WorkspaceNotebooksPageQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<WorkspaceNotebooksPageQuery, WorkspaceNotebooksPageQueryVariables>(WorkspaceNotebooksPageDocument, options);
        }
export type WorkspaceNotebooksPageQueryHookResult = ReturnType<typeof useWorkspaceNotebooksPageQuery>;
export type WorkspaceNotebooksPageLazyQueryHookResult = ReturnType<typeof useWorkspaceNotebooksPageLazyQuery>;
export type WorkspaceNotebooksPageQueryResult = Apollo.QueryResult<WorkspaceNotebooksPageQuery, WorkspaceNotebooksPageQueryVariables>;
export const WorkspacePipelinePageDocument = gql`
    query WorkspacePipelinePage($workspaceSlug: String!, $pipelineCode: String!, $page: Int = 1, $perPage: Int = 10) {
  workspace(slug: $workspaceSlug) {
    slug
    name
    ...WorkspaceLayout_workspace
  }
  pipeline: pipelineByCode(workspaceSlug: $workspaceSlug, code: $pipelineCode) {
    ...PipelineVersionsDialog_pipeline
    ...RunPipelineDialog_pipeline
    ...DeletePipelineVersion_pipeline
    permissions {
      run
      update
    }
    id
    code
    name
    description
    schedule
    currentVersion {
      id
      number
    }
    recipients {
      user {
        id
        displayName
      }
    }
    runs(page: $page, perPage: $perPage) {
      items {
        id
        version {
          number
          ...DeletePipelineVersion_version
        }
        executionDate
        duration
        triggerMode
        user {
          ...UserColumn_user
        }
        ...PipelineRunStatusBadge_run
      }
      totalItems
      totalPages
      pageNumber
    }
  }
}
    ${WorkspaceLayout_WorkspaceFragmentDoc}
${PipelineVersionsDialog_PipelineFragmentDoc}
${RunPipelineDialog_PipelineFragmentDoc}
${DeletePipelineVersion_PipelineFragmentDoc}
${DeletePipelineVersion_VersionFragmentDoc}
${UserColumn_UserFragmentDoc}
${PipelineRunStatusBadge_RunFragmentDoc}`;

/**
 * __useWorkspacePipelinePageQuery__
 *
 * To run a query within a React component, call `useWorkspacePipelinePageQuery` and pass it any options that fit your needs.
 * When your component renders, `useWorkspacePipelinePageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useWorkspacePipelinePageQuery({
 *   variables: {
 *      workspaceSlug: // value for 'workspaceSlug'
 *      pipelineCode: // value for 'pipelineCode'
 *      page: // value for 'page'
 *      perPage: // value for 'perPage'
 *   },
 * });
 */
export function useWorkspacePipelinePageQuery(baseOptions: Apollo.QueryHookOptions<WorkspacePipelinePageQuery, WorkspacePipelinePageQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<WorkspacePipelinePageQuery, WorkspacePipelinePageQueryVariables>(WorkspacePipelinePageDocument, options);
      }
export function useWorkspacePipelinePageLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<WorkspacePipelinePageQuery, WorkspacePipelinePageQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<WorkspacePipelinePageQuery, WorkspacePipelinePageQueryVariables>(WorkspacePipelinePageDocument, options);
        }
export type WorkspacePipelinePageQueryHookResult = ReturnType<typeof useWorkspacePipelinePageQuery>;
export type WorkspacePipelinePageLazyQueryHookResult = ReturnType<typeof useWorkspacePipelinePageLazyQuery>;
export type WorkspacePipelinePageQueryResult = Apollo.QueryResult<WorkspacePipelinePageQuery, WorkspacePipelinePageQueryVariables>;
export const WorkspacePipelineStartPageDocument = gql`
    query WorkspacePipelineStartPage($workspaceSlug: String!) {
  workspace(slug: $workspaceSlug) {
    slug
    name
    ...WorkspaceLayout_workspace
  }
}
    ${WorkspaceLayout_WorkspaceFragmentDoc}`;

/**
 * __useWorkspacePipelineStartPageQuery__
 *
 * To run a query within a React component, call `useWorkspacePipelineStartPageQuery` and pass it any options that fit your needs.
 * When your component renders, `useWorkspacePipelineStartPageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useWorkspacePipelineStartPageQuery({
 *   variables: {
 *      workspaceSlug: // value for 'workspaceSlug'
 *   },
 * });
 */
export function useWorkspacePipelineStartPageQuery(baseOptions: Apollo.QueryHookOptions<WorkspacePipelineStartPageQuery, WorkspacePipelineStartPageQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<WorkspacePipelineStartPageQuery, WorkspacePipelineStartPageQueryVariables>(WorkspacePipelineStartPageDocument, options);
      }
export function useWorkspacePipelineStartPageLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<WorkspacePipelineStartPageQuery, WorkspacePipelineStartPageQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<WorkspacePipelineStartPageQuery, WorkspacePipelineStartPageQueryVariables>(WorkspacePipelineStartPageDocument, options);
        }
export type WorkspacePipelineStartPageQueryHookResult = ReturnType<typeof useWorkspacePipelineStartPageQuery>;
export type WorkspacePipelineStartPageLazyQueryHookResult = ReturnType<typeof useWorkspacePipelineStartPageLazyQuery>;
export type WorkspacePipelineStartPageQueryResult = Apollo.QueryResult<WorkspacePipelineStartPageQuery, WorkspacePipelineStartPageQueryVariables>;
export const WorkspacePipelineRunPageDocument = gql`
    query WorkspacePipelineRunPage($workspaceSlug: String!, $runId: UUID!) {
  workspace(slug: $workspaceSlug) {
    slug
    name
    ...WorkspaceLayout_workspace
    ...RunOutputsTable_workspace
  }
  pipelineRun(id: $runId) {
    id
    version {
      number
      parameters {
        code
        name
        help
        type
        default
        required
        choices
        multiple
      }
    }
    config
    executionDate
    duration
    triggerMode
    sendMailNotifications
    pipeline {
      id
      code
      name
      ...RunPipelineDialog_pipeline
    }
    outputs {
      name
      type
      uri
    }
    user {
      ...User_user
    }
    ...RunOutputsTable_run
    ...RunPipelineDialog_run
    ...RunMessages_run
    ...RunLogs_run
    ...PipelineRunStatusBadge_run
  }
}
    ${WorkspaceLayout_WorkspaceFragmentDoc}
${RunOutputsTable_WorkspaceFragmentDoc}
${RunPipelineDialog_PipelineFragmentDoc}
${User_UserFragmentDoc}
${RunOutputsTable_RunFragmentDoc}
${RunPipelineDialog_RunFragmentDoc}
${RunMessages_RunFragmentDoc}
${RunLogs_RunFragmentDoc}
${PipelineRunStatusBadge_RunFragmentDoc}`;

/**
 * __useWorkspacePipelineRunPageQuery__
 *
 * To run a query within a React component, call `useWorkspacePipelineRunPageQuery` and pass it any options that fit your needs.
 * When your component renders, `useWorkspacePipelineRunPageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useWorkspacePipelineRunPageQuery({
 *   variables: {
 *      workspaceSlug: // value for 'workspaceSlug'
 *      runId: // value for 'runId'
 *   },
 * });
 */
export function useWorkspacePipelineRunPageQuery(baseOptions: Apollo.QueryHookOptions<WorkspacePipelineRunPageQuery, WorkspacePipelineRunPageQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<WorkspacePipelineRunPageQuery, WorkspacePipelineRunPageQueryVariables>(WorkspacePipelineRunPageDocument, options);
      }
export function useWorkspacePipelineRunPageLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<WorkspacePipelineRunPageQuery, WorkspacePipelineRunPageQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<WorkspacePipelineRunPageQuery, WorkspacePipelineRunPageQueryVariables>(WorkspacePipelineRunPageDocument, options);
        }
export type WorkspacePipelineRunPageQueryHookResult = ReturnType<typeof useWorkspacePipelineRunPageQuery>;
export type WorkspacePipelineRunPageLazyQueryHookResult = ReturnType<typeof useWorkspacePipelineRunPageLazyQuery>;
export type WorkspacePipelineRunPageQueryResult = Apollo.QueryResult<WorkspacePipelineRunPageQuery, WorkspacePipelineRunPageQueryVariables>;
export const WorkspaceFilesPageDocument = gql`
    query WorkspaceFilesPage($workspaceSlug: String!, $page: Int!, $perPage: Int!, $prefix: String!) {
  workspace(slug: $workspaceSlug) {
    slug
    name
    ...BucketExplorer_workspace
    ...WorkspaceLayout_workspace
    ...UploadObjectDialog_workspace
    ...CreateBucketFolderDialog_workspace
    ...BucketExplorer_workspace
    bucket {
      objects(page: $page, prefix: $prefix, perPage: $perPage) {
        ...BucketExplorer_objects
      }
    }
  }
}
    ${BucketExplorer_WorkspaceFragmentDoc}
${WorkspaceLayout_WorkspaceFragmentDoc}
${UploadObjectDialog_WorkspaceFragmentDoc}
${CreateBucketFolderDialog_WorkspaceFragmentDoc}
${BucketExplorer_ObjectsFragmentDoc}`;

/**
 * __useWorkspaceFilesPageQuery__
 *
 * To run a query within a React component, call `useWorkspaceFilesPageQuery` and pass it any options that fit your needs.
 * When your component renders, `useWorkspaceFilesPageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useWorkspaceFilesPageQuery({
 *   variables: {
 *      workspaceSlug: // value for 'workspaceSlug'
 *      page: // value for 'page'
 *      perPage: // value for 'perPage'
 *      prefix: // value for 'prefix'
 *   },
 * });
 */
export function useWorkspaceFilesPageQuery(baseOptions: Apollo.QueryHookOptions<WorkspaceFilesPageQuery, WorkspaceFilesPageQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<WorkspaceFilesPageQuery, WorkspaceFilesPageQueryVariables>(WorkspaceFilesPageDocument, options);
      }
export function useWorkspaceFilesPageLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<WorkspaceFilesPageQuery, WorkspaceFilesPageQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<WorkspaceFilesPageQuery, WorkspaceFilesPageQueryVariables>(WorkspaceFilesPageDocument, options);
        }
export type WorkspaceFilesPageQueryHookResult = ReturnType<typeof useWorkspaceFilesPageQuery>;
export type WorkspaceFilesPageLazyQueryHookResult = ReturnType<typeof useWorkspaceFilesPageLazyQuery>;
export type WorkspaceFilesPageQueryResult = Apollo.QueryResult<WorkspaceFilesPageQuery, WorkspaceFilesPageQueryVariables>;
export const WorkspaceDatabasesPageDocument = gql`
    query WorkspaceDatabasesPage($workspaceSlug: String!, $page: Int, $perPage: Int) {
  workspace(slug: $workspaceSlug) {
    slug
    name
    permissions {
      update
    }
    database {
      tables(page: $page, perPage: $perPage) {
        totalPages
        totalItems
        items {
          name
          count
        }
      }
    }
    ...DatabaseVariablesSection_workspace
    ...WorkspaceLayout_workspace
  }
}
    ${DatabaseVariablesSection_WorkspaceFragmentDoc}
${WorkspaceLayout_WorkspaceFragmentDoc}`;

/**
 * __useWorkspaceDatabasesPageQuery__
 *
 * To run a query within a React component, call `useWorkspaceDatabasesPageQuery` and pass it any options that fit your needs.
 * When your component renders, `useWorkspaceDatabasesPageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useWorkspaceDatabasesPageQuery({
 *   variables: {
 *      workspaceSlug: // value for 'workspaceSlug'
 *      page: // value for 'page'
 *      perPage: // value for 'perPage'
 *   },
 * });
 */
export function useWorkspaceDatabasesPageQuery(baseOptions: Apollo.QueryHookOptions<WorkspaceDatabasesPageQuery, WorkspaceDatabasesPageQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<WorkspaceDatabasesPageQuery, WorkspaceDatabasesPageQueryVariables>(WorkspaceDatabasesPageDocument, options);
      }
export function useWorkspaceDatabasesPageLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<WorkspaceDatabasesPageQuery, WorkspaceDatabasesPageQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<WorkspaceDatabasesPageQuery, WorkspaceDatabasesPageQueryVariables>(WorkspaceDatabasesPageDocument, options);
        }
export type WorkspaceDatabasesPageQueryHookResult = ReturnType<typeof useWorkspaceDatabasesPageQuery>;
export type WorkspaceDatabasesPageLazyQueryHookResult = ReturnType<typeof useWorkspaceDatabasesPageLazyQuery>;
export type WorkspaceDatabasesPageQueryResult = Apollo.QueryResult<WorkspaceDatabasesPageQuery, WorkspaceDatabasesPageQueryVariables>;
export const WorkspaceDatabaseTablePageDocument = gql`
    query WorkspaceDatabaseTablePage($workspaceSlug: String!, $tableName: String!) {
  workspace(slug: $workspaceSlug) {
    slug
    name
    database {
      table(name: $tableName) {
        name
        count
        columns {
          name
          type
        }
        ...DatabaseTableDataGrid_table
      }
    }
    ...DatabaseTableDataGrid_workspace
    ...WorkspaceLayout_workspace
  }
}
    ${DatabaseTableDataGrid_TableFragmentDoc}
${DatabaseTableDataGrid_WorkspaceFragmentDoc}
${WorkspaceLayout_WorkspaceFragmentDoc}`;

/**
 * __useWorkspaceDatabaseTablePageQuery__
 *
 * To run a query within a React component, call `useWorkspaceDatabaseTablePageQuery` and pass it any options that fit your needs.
 * When your component renders, `useWorkspaceDatabaseTablePageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useWorkspaceDatabaseTablePageQuery({
 *   variables: {
 *      workspaceSlug: // value for 'workspaceSlug'
 *      tableName: // value for 'tableName'
 *   },
 * });
 */
export function useWorkspaceDatabaseTablePageQuery(baseOptions: Apollo.QueryHookOptions<WorkspaceDatabaseTablePageQuery, WorkspaceDatabaseTablePageQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<WorkspaceDatabaseTablePageQuery, WorkspaceDatabaseTablePageQueryVariables>(WorkspaceDatabaseTablePageDocument, options);
      }
export function useWorkspaceDatabaseTablePageLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<WorkspaceDatabaseTablePageQuery, WorkspaceDatabaseTablePageQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<WorkspaceDatabaseTablePageQuery, WorkspaceDatabaseTablePageQueryVariables>(WorkspaceDatabaseTablePageDocument, options);
        }
export type WorkspaceDatabaseTablePageQueryHookResult = ReturnType<typeof useWorkspaceDatabaseTablePageQuery>;
export type WorkspaceDatabaseTablePageLazyQueryHookResult = ReturnType<typeof useWorkspaceDatabaseTablePageLazyQuery>;
export type WorkspaceDatabaseTablePageQueryResult = Apollo.QueryResult<WorkspaceDatabaseTablePageQuery, WorkspaceDatabaseTablePageQueryVariables>;
export const ConnectionsPageDocument = gql`
    query ConnectionsPage($workspaceSlug: String!) {
  workspace(slug: $workspaceSlug) {
    slug
    name
    permissions {
      update
    }
    ...CreateConnectionDialog_workspace
    connections {
      id
      description
      name
      type
      slug
      updatedAt
      permissions {
        update
        delete
      }
    }
    ...WorkspaceLayout_workspace
  }
}
    ${CreateConnectionDialog_WorkspaceFragmentDoc}
${WorkspaceLayout_WorkspaceFragmentDoc}`;

/**
 * __useConnectionsPageQuery__
 *
 * To run a query within a React component, call `useConnectionsPageQuery` and pass it any options that fit your needs.
 * When your component renders, `useConnectionsPageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useConnectionsPageQuery({
 *   variables: {
 *      workspaceSlug: // value for 'workspaceSlug'
 *   },
 * });
 */
export function useConnectionsPageQuery(baseOptions: Apollo.QueryHookOptions<ConnectionsPageQuery, ConnectionsPageQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ConnectionsPageQuery, ConnectionsPageQueryVariables>(ConnectionsPageDocument, options);
      }
export function useConnectionsPageLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ConnectionsPageQuery, ConnectionsPageQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ConnectionsPageQuery, ConnectionsPageQueryVariables>(ConnectionsPageDocument, options);
        }
export type ConnectionsPageQueryHookResult = ReturnType<typeof useConnectionsPageQuery>;
export type ConnectionsPageLazyQueryHookResult = ReturnType<typeof useConnectionsPageLazyQuery>;
export type ConnectionsPageQueryResult = Apollo.QueryResult<ConnectionsPageQuery, ConnectionsPageQueryVariables>;
export const ConnectionPageDocument = gql`
    query ConnectionPage($workspaceSlug: String!, $connectionId: UUID!) {
  workspace(slug: $workspaceSlug) {
    slug
    name
    permissions {
      update
    }
    ...WorkspaceLayout_workspace
  }
  connection(id: $connectionId) {
    id
    name
    slug
    description
    type
    createdAt
    permissions {
      update
      delete
    }
    ...ConnectionUsageSnippets_connection
    ...ConnectionFieldsSection_connection
  }
}
    ${WorkspaceLayout_WorkspaceFragmentDoc}
${ConnectionUsageSnippets_ConnectionFragmentDoc}
${ConnectionFieldsSection_ConnectionFragmentDoc}`;

/**
 * __useConnectionPageQuery__
 *
 * To run a query within a React component, call `useConnectionPageQuery` and pass it any options that fit your needs.
 * When your component renders, `useConnectionPageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useConnectionPageQuery({
 *   variables: {
 *      workspaceSlug: // value for 'workspaceSlug'
 *      connectionId: // value for 'connectionId'
 *   },
 * });
 */
export function useConnectionPageQuery(baseOptions: Apollo.QueryHookOptions<ConnectionPageQuery, ConnectionPageQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ConnectionPageQuery, ConnectionPageQueryVariables>(ConnectionPageDocument, options);
      }
export function useConnectionPageLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ConnectionPageQuery, ConnectionPageQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ConnectionPageQuery, ConnectionPageQueryVariables>(ConnectionPageDocument, options);
        }
export type ConnectionPageQueryHookResult = ReturnType<typeof useConnectionPageQuery>;
export type ConnectionPageLazyQueryHookResult = ReturnType<typeof useConnectionPageLazyQuery>;
export type ConnectionPageQueryResult = Apollo.QueryResult<ConnectionPageQuery, ConnectionPageQueryVariables>;
export const CheckWorkspaceAvailabilityDocument = gql`
    query CheckWorkspaceAvailability($slug: String!) {
  workspace(slug: $slug) {
    slug
  }
}
    `;

/**
 * __useCheckWorkspaceAvailabilityQuery__
 *
 * To run a query within a React component, call `useCheckWorkspaceAvailabilityQuery` and pass it any options that fit your needs.
 * When your component renders, `useCheckWorkspaceAvailabilityQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCheckWorkspaceAvailabilityQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useCheckWorkspaceAvailabilityQuery(baseOptions: Apollo.QueryHookOptions<CheckWorkspaceAvailabilityQuery, CheckWorkspaceAvailabilityQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CheckWorkspaceAvailabilityQuery, CheckWorkspaceAvailabilityQueryVariables>(CheckWorkspaceAvailabilityDocument, options);
      }
export function useCheckWorkspaceAvailabilityLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CheckWorkspaceAvailabilityQuery, CheckWorkspaceAvailabilityQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CheckWorkspaceAvailabilityQuery, CheckWorkspaceAvailabilityQueryVariables>(CheckWorkspaceAvailabilityDocument, options);
        }
export type CheckWorkspaceAvailabilityQueryHookResult = ReturnType<typeof useCheckWorkspaceAvailabilityQuery>;
export type CheckWorkspaceAvailabilityLazyQueryHookResult = ReturnType<typeof useCheckWorkspaceAvailabilityLazyQuery>;
export type CheckWorkspaceAvailabilityQueryResult = Apollo.QueryResult<CheckWorkspaceAvailabilityQuery, CheckWorkspaceAvailabilityQueryVariables>;