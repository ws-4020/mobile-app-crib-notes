import {useMutation} from 'react-query';

import {postAccountsMeTerms} from '../utils/postAccountsMeTerms';

export const usePostAccountsMeTerms = () => {
  return useMutation('accountService#usePostAccountsMeTerms', postAccountsMeTerms);
};
