import {NavigationProp, ParamListBase} from '@react-navigation/native';

declare global {
  import Mocked = jest.Mocked;
  const __mocks: {
    navigation: Mocked<NavigationProp<ParamListBase>>;
  };
}
