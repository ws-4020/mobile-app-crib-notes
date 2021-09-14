const mock = () => {
  return {
    name: 'mock',
    options: {
      appId: 'mocked firebase app id',
      projectId: 'mocked firebase project id',
    },
    delete: jest.fn(),
    utils: jest.fn(),
  };
};

export default {
  app: mock,
};
