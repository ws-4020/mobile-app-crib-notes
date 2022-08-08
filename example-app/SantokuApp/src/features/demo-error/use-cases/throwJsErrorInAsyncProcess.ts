export const throwJsErrorInAsyncProcess = () => {
  // eslint-disable-next-line no-void
  void new Promise(() => {
    throw new Error('Error has occurred in asynchronous process of EventHandler.');
  });
};
