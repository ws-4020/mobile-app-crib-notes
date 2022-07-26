import {NavigationProp} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {DemoStackParamList} from 'apps/app/navigators/types';
import React, {useMemo} from 'react';

import {DemoLinkItemData} from './DemoLinkItem';
import {DemoTemplate} from './DemoTemplate';
import {AcknowledgementsScreen} from './acknowledgements/AcknowledgementsScreen';
import {AppStateScreen} from './app-state/AppStateScreen';
import {AuthenticationScreen} from './authentication/AuthenticationScreen';
import {ButtonScreen} from './button/ButtonScreen';
import {CacheScreen} from './cache/CacheScreen';
import {ConfigScreen} from './config/ConfigScreen';
import {ErrorCaseScreen} from './error/ErrorCaseScreen';
import {HttpApiScreen} from './http-api/HttpApiScreen';
import {AppInfoScreen} from './info/AppInfoScreen';
import {InstructionsScreen} from './instructions/InstructionsScreen';
import {LocalAuthenticationScreen} from './local-authn/LocalAuthenticationScreen';
import {LogScreen} from './log/LogScreen';
import {MessageScreen} from './message/MessageScreen';
import {NavigationScreen} from './navigation/NavigationScreen';
import {PickerScreen} from './picker/PickerScreen';
import {PushNotificationScreen} from './push-notification/PushNotificationScreen';
import {ReactQueryDemoScreen} from './react-query/ReactQueryDemoScreen';
import {SnackbarScreen} from './snackbar/SnackbarScreen';

type ScreenList = {
  title: string;
  to: keyof DemoStackParamList;
};

const demoScreenList: ScreenList[] = [
  {
    title: 'Application Information',
    to: AppInfoScreen.name,
  },
  {
    title: 'Track AppState',
    to: AppStateScreen.name,
  },
  {
    title: 'GlobalErrorHandling',
    to: ErrorCaseScreen.name,
  },
  {
    title: 'React Native Instructions',
    to: InstructionsScreen.name,
  },
  {
    title: 'Configuration',
    to: ConfigScreen.name,
  },
  {
    title: 'Log',
    to: LogScreen.name,
  },
  {
    title: 'Message',
    to: MessageScreen.name,
  },
  {
    title: 'Button',
    to: ButtonScreen.name,
  },
  {
    title: 'Snackbar',
    to: SnackbarScreen.name,
  },
  {
    title: 'Local Authentication',
    to: LocalAuthenticationScreen.name,
  },
  {
    title: 'Authentication',
    to: AuthenticationScreen.name,
  },
  {
    title: 'HttpApi',
    to: HttpApiScreen.name,
  },
  {
    title: 'Navigation',
    to: NavigationScreen.name,
  },
  {
    title: 'PushNotification',
    to: PushNotificationScreen.name,
  },
  {
    title: 'Cache',
    to: CacheScreen.name,
  },
  {
    title: 'ReactQuery',
    to: ReactQueryDemoScreen.name,
  },
  {
    title: 'Picker',
    to: PickerScreen.name,
  },
  {
    title: 'Acknowledgements',
    to: AcknowledgementsScreen.name,
  },
];

const addOnPressHandlerToItems = (navigation: NavigationProp<DemoStackParamList>) => (demo: ScreenList) => {
  return {
    ...demo,
    onPress: () => navigation.navigate(demo.to),
  };
};

const keyExtractor = (item: DemoLinkItemData, index: number) => item.to + index.toString();

const name = 'Demo';
type Props = NativeStackScreenProps<DemoStackParamList, typeof name>;

const Screen: React.FC<Props> = ({navigation}) => {
  const demoItems = useMemo(() => demoScreenList.map(addOnPressHandlerToItems(navigation)), [navigation]);
  return <DemoTemplate testID="DemoScreen" items={demoItems} keyExtractor={keyExtractor} />;
};

export const DemoScreen: NativeStackScreenConfig<DemoStackParamList, typeof name> = {
  component: Screen,
  name,
  options: {
    title: 'Demo Screens',
  },
};
