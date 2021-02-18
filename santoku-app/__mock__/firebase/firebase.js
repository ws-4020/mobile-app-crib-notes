export default () => ({
  getToken: () => {
    return Promise.resolve('');
  },
  sendMessage: (_) => {
    return Promise.resolve();
  },
  subscribeToTopic: (_) => {
    return Promise.resolve();
  },
});
