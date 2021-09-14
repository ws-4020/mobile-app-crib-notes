const mock = {
  addListener: jest.fn(),
  canGoBack: jest.fn(),
  dangerouslyGetParent: jest.fn(),
  dangerouslyGetState: jest.fn(),
  dispatch: jest.fn(),
  getParent: jest.fn(),
  getState: jest.fn(),
  goBack: jest.fn(),
  isFocused: jest.fn(),
  navigate: jest.fn(),
  removeListener: jest.fn(),
  reset: jest.fn(),
  setOptions: jest.fn(),
  setParams: jest.fn(),
};

Object.defineProperty(global.__mocks, 'navigation', {value: mock});

// テストケースごとにnavigationのモックは初期化しておく。
beforeEach(() => {
  console.log('before each');
  Object.keys(global.__mocks.navigation).forEach((key) => {
    mock[key].mockClear();
  });
});

module.exports = {
  ...jest.requireActual('@react-navigation/native'),
  useNavigation: () => mock,
};
