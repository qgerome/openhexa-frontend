import * as Types from '../../graphql-types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type CreateWorkspaceMutationVariables = Types.Exact<{
  input: Types.CreateWorkspaceInput;
}>;


export type CreateWorkspaceMutation = { __typename?: 'Mutation', createWorkspace: { __typename?: 'CreateWorkspaceResult', success: boolean, errors: Array<Types.CreateWorkspaceError>, workspace?: { __typename?: 'Workspace', slug: string, name: string, description?: string | null, countries: Array<{ __typename?: 'Country', code: string, alpha3: string, name: string }> } | null } };

export type UpdateWorkspaceMutationVariables = Types.Exact<{
  input: Types.UpdateWorkspaceInput;
}>;


export type UpdateWorkspaceMutation = { __typename?: 'Mutation', updateWorkspace: { __typename?: 'UpdateWorkspaceResult', success: boolean, errors: Array<Types.UpdateWorkspaceError>, workspace?: { __typename?: 'Workspace', slug: string, name: string, description?: string | null, countries: Array<{ __typename?: 'Country', code: string, alpha3: string, name: string }> } | null } };

export type DeleteWorkspaceMutationVariables = Types.Exact<{
  input: Types.DeleteWorkspaceInput;
}>;


export type DeleteWorkspaceMutation = { __typename?: 'Mutation', deleteWorkspace: { __typename?: 'DeleteWorkspaceResult', success: boolean, errors: Array<Types.DeleteWorkspaceError> } };

export type ArchiveWorkspaceMutationVariables = Types.Exact<{
  input: Types.ArchiveWorkspaceInput;
}>;


export type ArchiveWorkspaceMutation = { __typename?: 'Mutation', archiveWorkspace: { __typename?: 'ArchiveWorkspaceResult', success: boolean, errors: Array<Types.ArchiveWorkspaceError> } };

export type InviteWorkspaceMemberMutationVariables = Types.Exact<{
  input: Types.InviteWorkspaceMemberInput;
}>;


export type InviteWorkspaceMemberMutation = { __typename?: 'Mutation', inviteWorkspaceMember: { __typename?: 'InviteWorkspaceMemberResult', success: boolean, errors: Array<Types.InviteWorkspaceMembershipError>, workspaceMembership?: { __typename?: 'WorkspaceMembership', id: string } | null } };

export type DeleteWorkspaceMemberMutationVariables = Types.Exact<{
  input: Types.DeleteWorkspaceMemberInput;
}>;


export type DeleteWorkspaceMemberMutation = { __typename?: 'Mutation', deleteWorkspaceMember: { __typename?: 'DeleteWorkspaceMemberResult', success: boolean, errors: Array<Types.DeleteWorkspaceMemberError> } };

export type UpdateWorkspaceMemberMutationVariables = Types.Exact<{
  input: Types.UpdateWorkspaceMemberInput;
}>;


export type UpdateWorkspaceMemberMutation = { __typename?: 'Mutation', updateWorkspaceMember: { __typename?: 'UpdateWorkspaceMemberResult', success: boolean, errors: Array<Types.UpdateWorkspaceMemberError>, workspaceMembership?: { __typename?: 'WorkspaceMembership', id: string, role: Types.WorkspaceMembershipRole } | null } };

export type CreateConnectionMutationVariables = Types.Exact<{
  input: Types.CreateConnectionInput;
}>;


export type CreateConnectionMutation = { __typename?: 'Mutation', createConnection: { __typename?: 'CreateConnectionResult', success: boolean, errors: Array<Types.CreateConnectionError>, connection?: { __typename?: 'Connection', id: string, name: string } | null } };

export type UpdateConnectionMutationVariables = Types.Exact<{
  input: Types.UpdateConnectionInput;
}>;


export type UpdateConnectionMutation = { __typename?: 'Mutation', updateConnection: { __typename?: 'UpdateConnectionResult', success: boolean, errors: Array<Types.UpdateConnectionError>, connection?: { __typename?: 'Connection', id: string, name: string, slug: string, description?: string | null } | null } };

export type GenerateNewDatabasePasswordMutationVariables = Types.Exact<{
  input: Types.GenerateNewDatabasePasswordInput;
}>;


export type GenerateNewDatabasePasswordMutation = { __typename?: 'Mutation', generateNewDatabasePassword: { __typename?: 'GenerateNewDatabasePasswordResult', success: boolean, errors: Array<Types.GenerateNewDatabasePasswordError> } };

export type DeletePipelineVersionMutationVariables = Types.Exact<{
  input: Types.DeletePipelineVersionInput;
}>;


export type DeletePipelineVersionMutation = { __typename?: 'Mutation', deletePipelineVersion: { __typename?: 'DeletePipelineVersionResult', success: boolean, errors: Array<Types.DeletePipelineVersionError> } };

export type JoinWorkspaceMutationVariables = Types.Exact<{
  input: Types.JoinWorkspaceInput;
}>;


export type JoinWorkspaceMutation = { __typename?: 'Mutation', joinWorkspace: { __typename?: 'JoinWorkspaceResult', success: boolean, errors: Array<Types.JoinWorkspaceError>, workspace?: { __typename?: 'Workspace', slug: string } | null } };


export const CreateWorkspaceDocument = gql`
    mutation createWorkspace($input: CreateWorkspaceInput!) {
  createWorkspace(input: $input) {
    success
    workspace {
      slug
      name
      description
      countries {
        code
        alpha3
        name
      }
    }
    errors
  }
}
    `;
export type CreateWorkspaceMutationFn = Apollo.MutationFunction<CreateWorkspaceMutation, CreateWorkspaceMutationVariables>;

/**
 * __useCreateWorkspaceMutation__
 *
 * To run a mutation, you first call `useCreateWorkspaceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateWorkspaceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createWorkspaceMutation, { data, loading, error }] = useCreateWorkspaceMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateWorkspaceMutation(baseOptions?: Apollo.MutationHookOptions<CreateWorkspaceMutation, CreateWorkspaceMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateWorkspaceMutation, CreateWorkspaceMutationVariables>(CreateWorkspaceDocument, options);
      }
export type CreateWorkspaceMutationHookResult = ReturnType<typeof useCreateWorkspaceMutation>;
export type CreateWorkspaceMutationResult = Apollo.MutationResult<CreateWorkspaceMutation>;
export type CreateWorkspaceMutationOptions = Apollo.BaseMutationOptions<CreateWorkspaceMutation, CreateWorkspaceMutationVariables>;
export const UpdateWorkspaceDocument = gql`
    mutation updateWorkspace($input: UpdateWorkspaceInput!) {
  updateWorkspace(input: $input) {
    success
    workspace {
      slug
      name
      description
      countries {
        code
        alpha3
        name
      }
    }
    errors
  }
}
    `;
export type UpdateWorkspaceMutationFn = Apollo.MutationFunction<UpdateWorkspaceMutation, UpdateWorkspaceMutationVariables>;

/**
 * __useUpdateWorkspaceMutation__
 *
 * To run a mutation, you first call `useUpdateWorkspaceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateWorkspaceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateWorkspaceMutation, { data, loading, error }] = useUpdateWorkspaceMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateWorkspaceMutation(baseOptions?: Apollo.MutationHookOptions<UpdateWorkspaceMutation, UpdateWorkspaceMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateWorkspaceMutation, UpdateWorkspaceMutationVariables>(UpdateWorkspaceDocument, options);
      }
export type UpdateWorkspaceMutationHookResult = ReturnType<typeof useUpdateWorkspaceMutation>;
export type UpdateWorkspaceMutationResult = Apollo.MutationResult<UpdateWorkspaceMutation>;
export type UpdateWorkspaceMutationOptions = Apollo.BaseMutationOptions<UpdateWorkspaceMutation, UpdateWorkspaceMutationVariables>;
export const DeleteWorkspaceDocument = gql`
    mutation deleteWorkspace($input: DeleteWorkspaceInput!) {
  deleteWorkspace(input: $input) {
    success
    errors
  }
}
    `;
export type DeleteWorkspaceMutationFn = Apollo.MutationFunction<DeleteWorkspaceMutation, DeleteWorkspaceMutationVariables>;

/**
 * __useDeleteWorkspaceMutation__
 *
 * To run a mutation, you first call `useDeleteWorkspaceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteWorkspaceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteWorkspaceMutation, { data, loading, error }] = useDeleteWorkspaceMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeleteWorkspaceMutation(baseOptions?: Apollo.MutationHookOptions<DeleteWorkspaceMutation, DeleteWorkspaceMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteWorkspaceMutation, DeleteWorkspaceMutationVariables>(DeleteWorkspaceDocument, options);
      }
export type DeleteWorkspaceMutationHookResult = ReturnType<typeof useDeleteWorkspaceMutation>;
export type DeleteWorkspaceMutationResult = Apollo.MutationResult<DeleteWorkspaceMutation>;
export type DeleteWorkspaceMutationOptions = Apollo.BaseMutationOptions<DeleteWorkspaceMutation, DeleteWorkspaceMutationVariables>;
export const ArchiveWorkspaceDocument = gql`
    mutation archiveWorkspace($input: ArchiveWorkspaceInput!) {
  archiveWorkspace(input: $input) {
    success
    errors
  }
}
    `;
export type ArchiveWorkspaceMutationFn = Apollo.MutationFunction<ArchiveWorkspaceMutation, ArchiveWorkspaceMutationVariables>;

/**
 * __useArchiveWorkspaceMutation__
 *
 * To run a mutation, you first call `useArchiveWorkspaceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useArchiveWorkspaceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [archiveWorkspaceMutation, { data, loading, error }] = useArchiveWorkspaceMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useArchiveWorkspaceMutation(baseOptions?: Apollo.MutationHookOptions<ArchiveWorkspaceMutation, ArchiveWorkspaceMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ArchiveWorkspaceMutation, ArchiveWorkspaceMutationVariables>(ArchiveWorkspaceDocument, options);
      }
export type ArchiveWorkspaceMutationHookResult = ReturnType<typeof useArchiveWorkspaceMutation>;
export type ArchiveWorkspaceMutationResult = Apollo.MutationResult<ArchiveWorkspaceMutation>;
export type ArchiveWorkspaceMutationOptions = Apollo.BaseMutationOptions<ArchiveWorkspaceMutation, ArchiveWorkspaceMutationVariables>;
export const InviteWorkspaceMemberDocument = gql`
    mutation inviteWorkspaceMember($input: InviteWorkspaceMemberInput!) {
  inviteWorkspaceMember(input: $input) {
    success
    errors
    workspaceMembership {
      id
    }
  }
}
    `;
export type InviteWorkspaceMemberMutationFn = Apollo.MutationFunction<InviteWorkspaceMemberMutation, InviteWorkspaceMemberMutationVariables>;

/**
 * __useInviteWorkspaceMemberMutation__
 *
 * To run a mutation, you first call `useInviteWorkspaceMemberMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInviteWorkspaceMemberMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [inviteWorkspaceMemberMutation, { data, loading, error }] = useInviteWorkspaceMemberMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useInviteWorkspaceMemberMutation(baseOptions?: Apollo.MutationHookOptions<InviteWorkspaceMemberMutation, InviteWorkspaceMemberMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<InviteWorkspaceMemberMutation, InviteWorkspaceMemberMutationVariables>(InviteWorkspaceMemberDocument, options);
      }
export type InviteWorkspaceMemberMutationHookResult = ReturnType<typeof useInviteWorkspaceMemberMutation>;
export type InviteWorkspaceMemberMutationResult = Apollo.MutationResult<InviteWorkspaceMemberMutation>;
export type InviteWorkspaceMemberMutationOptions = Apollo.BaseMutationOptions<InviteWorkspaceMemberMutation, InviteWorkspaceMemberMutationVariables>;
export const DeleteWorkspaceMemberDocument = gql`
    mutation deleteWorkspaceMember($input: DeleteWorkspaceMemberInput!) {
  deleteWorkspaceMember(input: $input) {
    success
    errors
  }
}
    `;
export type DeleteWorkspaceMemberMutationFn = Apollo.MutationFunction<DeleteWorkspaceMemberMutation, DeleteWorkspaceMemberMutationVariables>;

/**
 * __useDeleteWorkspaceMemberMutation__
 *
 * To run a mutation, you first call `useDeleteWorkspaceMemberMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteWorkspaceMemberMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteWorkspaceMemberMutation, { data, loading, error }] = useDeleteWorkspaceMemberMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeleteWorkspaceMemberMutation(baseOptions?: Apollo.MutationHookOptions<DeleteWorkspaceMemberMutation, DeleteWorkspaceMemberMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteWorkspaceMemberMutation, DeleteWorkspaceMemberMutationVariables>(DeleteWorkspaceMemberDocument, options);
      }
export type DeleteWorkspaceMemberMutationHookResult = ReturnType<typeof useDeleteWorkspaceMemberMutation>;
export type DeleteWorkspaceMemberMutationResult = Apollo.MutationResult<DeleteWorkspaceMemberMutation>;
export type DeleteWorkspaceMemberMutationOptions = Apollo.BaseMutationOptions<DeleteWorkspaceMemberMutation, DeleteWorkspaceMemberMutationVariables>;
export const UpdateWorkspaceMemberDocument = gql`
    mutation updateWorkspaceMember($input: UpdateWorkspaceMemberInput!) {
  updateWorkspaceMember(input: $input) {
    success
    errors
    workspaceMembership {
      id
      role
    }
  }
}
    `;
export type UpdateWorkspaceMemberMutationFn = Apollo.MutationFunction<UpdateWorkspaceMemberMutation, UpdateWorkspaceMemberMutationVariables>;

/**
 * __useUpdateWorkspaceMemberMutation__
 *
 * To run a mutation, you first call `useUpdateWorkspaceMemberMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateWorkspaceMemberMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateWorkspaceMemberMutation, { data, loading, error }] = useUpdateWorkspaceMemberMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateWorkspaceMemberMutation(baseOptions?: Apollo.MutationHookOptions<UpdateWorkspaceMemberMutation, UpdateWorkspaceMemberMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateWorkspaceMemberMutation, UpdateWorkspaceMemberMutationVariables>(UpdateWorkspaceMemberDocument, options);
      }
export type UpdateWorkspaceMemberMutationHookResult = ReturnType<typeof useUpdateWorkspaceMemberMutation>;
export type UpdateWorkspaceMemberMutationResult = Apollo.MutationResult<UpdateWorkspaceMemberMutation>;
export type UpdateWorkspaceMemberMutationOptions = Apollo.BaseMutationOptions<UpdateWorkspaceMemberMutation, UpdateWorkspaceMemberMutationVariables>;
export const CreateConnectionDocument = gql`
    mutation createConnection($input: CreateConnectionInput!) {
  createConnection(input: $input) {
    success
    connection {
      id
      name
    }
    errors
  }
}
    `;
export type CreateConnectionMutationFn = Apollo.MutationFunction<CreateConnectionMutation, CreateConnectionMutationVariables>;

/**
 * __useCreateConnectionMutation__
 *
 * To run a mutation, you first call `useCreateConnectionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateConnectionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createConnectionMutation, { data, loading, error }] = useCreateConnectionMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateConnectionMutation(baseOptions?: Apollo.MutationHookOptions<CreateConnectionMutation, CreateConnectionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateConnectionMutation, CreateConnectionMutationVariables>(CreateConnectionDocument, options);
      }
export type CreateConnectionMutationHookResult = ReturnType<typeof useCreateConnectionMutation>;
export type CreateConnectionMutationResult = Apollo.MutationResult<CreateConnectionMutation>;
export type CreateConnectionMutationOptions = Apollo.BaseMutationOptions<CreateConnectionMutation, CreateConnectionMutationVariables>;
export const UpdateConnectionDocument = gql`
    mutation updateConnection($input: UpdateConnectionInput!) {
  updateConnection(input: $input) {
    success
    errors
    connection {
      id
      name
      slug
      description
    }
  }
}
    `;
export type UpdateConnectionMutationFn = Apollo.MutationFunction<UpdateConnectionMutation, UpdateConnectionMutationVariables>;

/**
 * __useUpdateConnectionMutation__
 *
 * To run a mutation, you first call `useUpdateConnectionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateConnectionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateConnectionMutation, { data, loading, error }] = useUpdateConnectionMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateConnectionMutation(baseOptions?: Apollo.MutationHookOptions<UpdateConnectionMutation, UpdateConnectionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateConnectionMutation, UpdateConnectionMutationVariables>(UpdateConnectionDocument, options);
      }
export type UpdateConnectionMutationHookResult = ReturnType<typeof useUpdateConnectionMutation>;
export type UpdateConnectionMutationResult = Apollo.MutationResult<UpdateConnectionMutation>;
export type UpdateConnectionMutationOptions = Apollo.BaseMutationOptions<UpdateConnectionMutation, UpdateConnectionMutationVariables>;
export const GenerateNewDatabasePasswordDocument = gql`
    mutation generateNewDatabasePassword($input: GenerateNewDatabasePasswordInput!) {
  generateNewDatabasePassword(input: $input) {
    success
    errors
  }
}
    `;
export type GenerateNewDatabasePasswordMutationFn = Apollo.MutationFunction<GenerateNewDatabasePasswordMutation, GenerateNewDatabasePasswordMutationVariables>;

/**
 * __useGenerateNewDatabasePasswordMutation__
 *
 * To run a mutation, you first call `useGenerateNewDatabasePasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useGenerateNewDatabasePasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [generateNewDatabasePasswordMutation, { data, loading, error }] = useGenerateNewDatabasePasswordMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGenerateNewDatabasePasswordMutation(baseOptions?: Apollo.MutationHookOptions<GenerateNewDatabasePasswordMutation, GenerateNewDatabasePasswordMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<GenerateNewDatabasePasswordMutation, GenerateNewDatabasePasswordMutationVariables>(GenerateNewDatabasePasswordDocument, options);
      }
export type GenerateNewDatabasePasswordMutationHookResult = ReturnType<typeof useGenerateNewDatabasePasswordMutation>;
export type GenerateNewDatabasePasswordMutationResult = Apollo.MutationResult<GenerateNewDatabasePasswordMutation>;
export type GenerateNewDatabasePasswordMutationOptions = Apollo.BaseMutationOptions<GenerateNewDatabasePasswordMutation, GenerateNewDatabasePasswordMutationVariables>;
export const DeletePipelineVersionDocument = gql`
    mutation deletePipelineVersion($input: DeletePipelineVersionInput!) {
  deletePipelineVersion(input: $input) {
    success
    errors
  }
}
    `;
export type DeletePipelineVersionMutationFn = Apollo.MutationFunction<DeletePipelineVersionMutation, DeletePipelineVersionMutationVariables>;

/**
 * __useDeletePipelineVersionMutation__
 *
 * To run a mutation, you first call `useDeletePipelineVersionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeletePipelineVersionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deletePipelineVersionMutation, { data, loading, error }] = useDeletePipelineVersionMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeletePipelineVersionMutation(baseOptions?: Apollo.MutationHookOptions<DeletePipelineVersionMutation, DeletePipelineVersionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeletePipelineVersionMutation, DeletePipelineVersionMutationVariables>(DeletePipelineVersionDocument, options);
      }
export type DeletePipelineVersionMutationHookResult = ReturnType<typeof useDeletePipelineVersionMutation>;
export type DeletePipelineVersionMutationResult = Apollo.MutationResult<DeletePipelineVersionMutation>;
export type DeletePipelineVersionMutationOptions = Apollo.BaseMutationOptions<DeletePipelineVersionMutation, DeletePipelineVersionMutationVariables>;
export const JoinWorkspaceDocument = gql`
    mutation joinWorkspace($input: JoinWorkspaceInput!) {
  joinWorkspace(input: $input) {
    success
    errors
    workspace {
      slug
    }
  }
}
    `;
export type JoinWorkspaceMutationFn = Apollo.MutationFunction<JoinWorkspaceMutation, JoinWorkspaceMutationVariables>;

/**
 * __useJoinWorkspaceMutation__
 *
 * To run a mutation, you first call `useJoinWorkspaceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useJoinWorkspaceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [joinWorkspaceMutation, { data, loading, error }] = useJoinWorkspaceMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useJoinWorkspaceMutation(baseOptions?: Apollo.MutationHookOptions<JoinWorkspaceMutation, JoinWorkspaceMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<JoinWorkspaceMutation, JoinWorkspaceMutationVariables>(JoinWorkspaceDocument, options);
      }
export type JoinWorkspaceMutationHookResult = ReturnType<typeof useJoinWorkspaceMutation>;
export type JoinWorkspaceMutationResult = Apollo.MutationResult<JoinWorkspaceMutation>;
export type JoinWorkspaceMutationOptions = Apollo.BaseMutationOptions<JoinWorkspaceMutation, JoinWorkspaceMutationVariables>;