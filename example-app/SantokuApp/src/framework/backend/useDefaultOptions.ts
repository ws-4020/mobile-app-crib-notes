import {useMemo} from 'react';
import {DefaultOptions} from 'react-query';

const useDefaultOptions = () => {
  const defaultOptions = useMemo<DefaultOptions<unknown>>(() => {
    return {
      queries: {
        cacheTime: 1000,
        staleTime: 1000,
        retry: false,
        refetchOnWindowFocus: true,
        refetchOnMount: true,
        refetchOnReconnect: true,
        onSettled: (data, error) => {
          // Debug
          console.log('QueryOnSettled', data, error);
        },
      },
      mutations: {
        retry: false,
        onSettled: (data, error, variables, context) => {
          // Debug
          console.log('MutationOnSettled', data, error, variables, context);
        },
      },
    };
  }, []);
  return defaultOptions;
};

export {useDefaultOptions};
