import {useMutation} from 'react-query';

import {postAccountsMeTerms} from './postAccountsMeTerms';

export const usePostAccountsMeTerms = () => {
  return useMutation('accountService#usePostAccountsMeTerms', postAccountsMeTerms);
};
