import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {DemoScreen} from 'features/demo/DemoScreen';
import {AcknowledgementsScreen} from 'features/demo/acknowledgements/AcknowledgementsScreen';
import {LicenseScreen} from 'features/demo/acknowledgements/LicenseScreen';
import {AppStateScreen} from 'features/demo/app-state/AppStateScreen';
import {AuthenticationScreen} from 'features/demo/authentication/AuthenticationScreen';
import {ButtonScreen} from 'features/demo/button/ButtonScreen';
import {CacheScreen} from 'features/demo/cache/CacheScreen';
import {ConfigScreen} from 'features/demo/config/ConfigScreen';
import {ErrorCaseScreen} from 'features/demo/error/ErrorCaseScreen';
import {ErrorInEventHandlerScreen} from 'features/demo/error/ErrorInEventHandlerScreen';
import {ErrorInNativeModuleScreen} from 'features/demo/error/ErrorInNativeModuleScreen';
import {ErrorInReactComponentScreen} from 'features/demo/error/ErrorInReactComponentScreen';
import {ErrorInUseEffectAsyncProcessScreen} from 'features/demo/error/ErrorInUseEffectAsyncProcessScreen';
import {ErrorInUseEffectScreen} from 'features/demo/error/ErrorInUseEffectScreen';
import {ErrorInUseEffectSyncProcessScreen} from 'features/demo/error/ErrorInUseEffectSyncProcessScreen';
import {HttpApiScreen} from 'features/demo/http-api/HttpApiScreen';
import {AppInfoScreen} from 'features/demo/info/AppInfoScreen';
import {InstructionsScreen} from 'features/demo/instructions/InstructionsScreen';
import {LocalAuthenticationScreen} from 'features/demo/local-authn/LocalAuthenticationScreen';
import {LogScreen} from 'features/demo/log/LogScreen';
import {MessageScreen} from 'features/demo/message/MessageScreen';
import {NavigationScreen} from 'features/demo/navigation/NavigationScreen';
import {PickerScreen} from 'features/demo/picker/PickerScreen';
import {PushNotificationScreen} from 'features/demo/push-notification/PushNotificationScreen';
import {CreateTodoDemoScreen} from 'features/demo/react-query/CreateTodoDemoScreen';
import {DependentQueryDemo1Screen} from 'features/demo/react-query/DependentQueryDemo1Screen';
import {DependentQueryDemo2Screen} from 'features/demo/react-query/DependentQueryDemo2Screen';
import {DependentQueryDemo3Screen} from 'features/demo/react-query/DependentQueryDemo3Screen';
import {DisableErrorHandlerDemoScreen} from 'features/demo/react-query/DisableErrorHandlerDemoScreen';
import {DisabledQueryDemoScreen} from 'features/demo/react-query/DisabledQueryDemoScreen';
import {EditTodoDemoScreen} from 'features/demo/react-query/EditTodoDemoScreen';
import {GetAccountsMeDemoScreen} from 'features/demo/react-query/GetAccountsMeDemoScreen';
import {ListTodoDemoScreen} from 'features/demo/react-query/ListTodoDemoScreen';
import {ReactQueryDemoScreen} from 'features/demo/react-query/ReactQueryDemoScreen';
import {SearchBarTodoDemoScreen} from 'features/demo/react-query/SearchBarTodoDemoScreen';
import {SearchFormTodoDemoScreen} from 'features/demo/react-query/SearchFormTodoDemoScreen';
import {SnackbarScreen} from 'features/demo/snackbar/SnackbarScreen';
import React from 'react';

import {DemoStackParamList, RootStackParamList} from './types';
import {useCloseThisNavigatorButton} from './useCloseThisNavigatorButton';

const nav = createNativeStackNavigator<DemoStackParamList>();

const name = 'DemoStackNav';
export const Screen: React.FC = () => {
  const {CloseThisNavigatorButton} = useCloseThisNavigatorButton();

  return (
    <nav.Navigator
      initialRouteName={DemoScreen.name}
      screenOptions={{
        headerRight: CloseThisNavigatorButton,
      }}>
      <nav.Screen {...AppInfoScreen} />
      <nav.Screen {...AppStateScreen} />
      <nav.Screen {...ConfigScreen} />
      <nav.Screen {...DemoScreen} />
      <nav.Screen {...ErrorCaseScreen} />
      <nav.Screen {...ErrorInEventHandlerScreen} />
      <nav.Screen {...ErrorInNativeModuleScreen} />
      <nav.Screen {...ErrorInReactComponentScreen} />
      <nav.Screen {...ErrorInUseEffectAsyncProcessScreen} />
      <nav.Screen {...ErrorInUseEffectScreen} />
      <nav.Screen {...ErrorInUseEffectSyncProcessScreen} />
      <nav.Screen {...InstructionsScreen} />
      <nav.Screen {...LogScreen} />
      <nav.Screen {...MessageScreen} />
      <nav.Screen {...ButtonScreen} />
      <nav.Screen {...SnackbarScreen} />
      <nav.Screen {...LocalAuthenticationScreen} />
      <nav.Screen {...AuthenticationScreen} />
      <nav.Screen {...HttpApiScreen} />
      <nav.Screen {...NavigationScreen} />
      <nav.Screen {...PushNotificationScreen} />
      <nav.Screen {...CacheScreen} />
      <nav.Screen {...ListTodoDemoScreen} />
      <nav.Screen {...CreateTodoDemoScreen} />
      <nav.Screen {...EditTodoDemoScreen} />
      <nav.Screen {...ReactQueryDemoScreen} />
      <nav.Screen {...DisabledQueryDemoScreen} />
      <nav.Screen {...DependentQueryDemo1Screen} />
      <nav.Screen {...DependentQueryDemo2Screen} />
      <nav.Screen {...DependentQueryDemo3Screen} />
      <nav.Screen {...DisableErrorHandlerDemoScreen} />
      <nav.Screen {...GetAccountsMeDemoScreen} />
      <nav.Screen {...SearchFormTodoDemoScreen} />
      <nav.Screen {...SearchBarTodoDemoScreen} />
      <nav.Screen {...PickerScreen} />
      <nav.Screen {...AcknowledgementsScreen} />
      <nav.Screen {...LicenseScreen} />
    </nav.Navigator>
  );
};

export const DemoStackNav: NativeStackScreenConfig<RootStackParamList, typeof name> = {
  component: Screen,
  name,
  options: {
    presentation: 'formSheet' as const,
  },
};
