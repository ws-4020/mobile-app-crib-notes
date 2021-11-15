import 'react-native-gesture-handler';
import {registerRootComponent} from 'expo';
import * as SplashScreen from 'expo-splash-screen';
// OpenAPI Generatorを使用して生成したコードの中で、URL#searchやURLSearchParamsを利用しているが、それらはReact Nativeでは実装されていない
// https://github.com/facebook/react-native/blob/main/Libraries/Blob/URL.js
// そのため、react-native-url-polyfillを使用する
import 'react-native-url-polyfill/auto';

import {App} from './src/App';

// Manually hide splash screen
SplashScreen.preventAutoHideAsync().catch(() => {
  console.info('Failed to prevent auto hide splash screen.');
});

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(App);
