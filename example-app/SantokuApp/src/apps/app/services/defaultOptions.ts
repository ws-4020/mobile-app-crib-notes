const defaultOptions = {
  queries: {
    retry: false, // default: 3
    networkMode: 'offlineFirst' as const, // default: 'online'
  },
  mutations: {
    networkMode: 'offlineFirst' as const, // default: 'online'
  },
  // no more errors on the console for tests
  // https://tanstack.com/query/latest/docs/react/guides/testing#turn-off-network-error-logging
  logger:
    process.env.NODE_ENV === 'test'
      ? {
          log: () => {},
          warn: () => {},
          error: () => {},
        }
      : undefined,
};

export {defaultOptions};
