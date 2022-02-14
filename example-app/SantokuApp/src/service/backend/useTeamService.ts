import {GetTeamsTeamIdTimetablesParams, GetTeamsTeamIdTimetableTemplatesParams} from 'generated/backend/model';
import {
  useGetTeamsTeamId,
  useGetTeamsTeamIdTimetableTemplates,
  useGetTeamsTeamIdTimetableTemplatesTemplateId,
  useGetTeamsTeamIdTimetables,
  useGetTeamsTeamIdTimetablesTimetableId,
  usePostTeams,
  usePostTeamsTeamIdInvitationCode,
  usePostTeamsTeamIdJoin,
  usePostTeamsTeamIdTimetableTemplates,
  usePostTeamsTeamIdTimetables,
  usePutTeamsTeamIdTimetableTemplatesTemplateId,
  usePutTeamsTeamIdTimetablesTimetableId,
} from 'generated/backend/team/team';

import {
  BackendServiceMutationOptions,
  BackendServiceQueryOptions,
  convertMutationResult,
  convertQueryResult,
  getMutationOptions,
  getQueryOptions,
} from './base';

export const useGetTeamsTeamIdService = (teamId: string, options?: BackendServiceQueryOptions) => {
  const query = useGetTeamsTeamId(teamId, {query: getQueryOptions(options)});
  return convertQueryResult(query);
};

export const useGetTeamsTeamIdTimetableTemplatesService = (
  teamId: string,
  params?: GetTeamsTeamIdTimetableTemplatesParams,
  options?: BackendServiceQueryOptions,
) => {
  const query = useGetTeamsTeamIdTimetableTemplates(teamId, params, {query: getQueryOptions(options)});
  return convertQueryResult(query);
};

export const useGetTeamsTeamIdTimetableTemplatesTemplateIdService = (
  teamId: string,
  templateId: string,
  options?: BackendServiceQueryOptions,
) => {
  const query = useGetTeamsTeamIdTimetableTemplatesTemplateId(teamId, templateId, {query: getQueryOptions(options)});
  return convertQueryResult(query);
};

export const useGetTeamsTeamIdTimetablesService = (
  teamId: string,
  params?: GetTeamsTeamIdTimetablesParams,
  options?: BackendServiceQueryOptions,
) => {
  const query = useGetTeamsTeamIdTimetables(teamId, params, {query: getQueryOptions(options)});
  return convertQueryResult(query);
};

export const useGetTeamsTeamIdTimetablesTimetableIdService = (
  teamId: string,
  timetableId: string,
  options?: BackendServiceQueryOptions,
) => {
  const query = useGetTeamsTeamIdTimetablesTimetableId(teamId, timetableId, {query: getQueryOptions(options)});
  return convertQueryResult(query);
};

export const usePostTeamsService = (options?: BackendServiceMutationOptions) => {
  const mutation = usePostTeams({mutation: getMutationOptions(options)});
  return convertMutationResult(mutation);
};

export const usePostTeamsTeamIdInvitationCodeService = (options?: BackendServiceMutationOptions) => {
  const mutation = usePostTeamsTeamIdInvitationCode({mutation: getMutationOptions(options)});
  return convertMutationResult(mutation);
};

export const usePostTeamsTeamIdJoinService = (options?: BackendServiceMutationOptions) => {
  const mutation = usePostTeamsTeamIdJoin({mutation: getMutationOptions(options)});
  return convertMutationResult(mutation);
};

export const usePostTeamsTeamIdTimetableTemplatesService = (options?: BackendServiceMutationOptions) => {
  const mutation = usePostTeamsTeamIdTimetableTemplates({mutation: getMutationOptions(options)});
  return convertMutationResult(mutation);
};

export const usePostTeamsTeamIdTimetablesService = (options?: BackendServiceMutationOptions) => {
  const mutation = usePostTeamsTeamIdTimetables({mutation: getMutationOptions(options)});
  return convertMutationResult(mutation);
};

export const usePutTeamsTeamIdTimetableTemplatesTemplateIdService = (options?: BackendServiceMutationOptions) => {
  const mutation = usePutTeamsTeamIdTimetableTemplatesTemplateId({mutation: getMutationOptions(options)});
  return convertMutationResult(mutation);
};

export const usePutTeamsTeamIdTimetablesTimetableIdService = (options?: BackendServiceMutationOptions) => {
  const mutation = usePutTeamsTeamIdTimetablesTimetableId({mutation: getMutationOptions(options)});
  return convertMutationResult(mutation);
};
