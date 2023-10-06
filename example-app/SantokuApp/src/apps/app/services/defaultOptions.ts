const defaultOptions = {
  queries: {
    retry: false, // default: 3
    networkMode: 'offlineFirst' as const, // default: 'online'
  },
  mutations: {
    networkMode: 'offlineFirst' as const, // default: 'online'
  },
};

export {defaultOptions};
