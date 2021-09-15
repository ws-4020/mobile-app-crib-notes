import {NavigationProp, ParamListBase} from '@react-navigation/native';

const mock: jest.Mocked<NavigationProp<ParamListBase>> = {
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

Object.defineProperty(__mocks, 'navigation', {value: mock});

// テストケースごとにnavigationのモックは初期化しておく。
beforeEach(() => {
  (Object.values(mock) as jest.Mock[]).forEach((fn) => fn.mockClear());
});

export default {
  ...jest.requireActual('@react-navigation/native'),
  useNavigation: () => mock,
};
