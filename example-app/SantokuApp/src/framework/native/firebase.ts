import type firebase from '@react-native-firebase/app';
import {isExpoGo} from 'framework/utilities/environment';

import type {dummyFirebaseModule} from './dummy';

const getActualFirebaseModule = () => {
  // Expo Goで実行したときにReact Native FirebaseのNative Moduleにアクセスしないように、動的にrequireする必要があります。
  // TypeScriptではrequireの戻り型はanyとなってしまうので、defaultにアクセスしようとしてESLintでエラーとなりますが無視するしかないようです。
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  const actual = require('@react-native-firebase/app').default as typeof firebase;

  // React Native Firebaseのモジュールをrequireしておくことで、ここで返却するfirebase経由で使えるようにしておきます。
  require('@react-native-firebase/crashlytics');

  return actual;
};

const getDummyFirebaseModule = () => {
  // loggingモジュールを使うと循環参照になってしまうので、consoleを直接利用します。
  console.info('[info] Using dummy firebase module.');

  // getActualFirebaseModuleと同じように、動的にrequireするようにしています。
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  return require('./dummy').dummyFirebaseModule as typeof dummyFirebaseModule;
};

const module: typeof firebase = isExpoGo ? getDummyFirebaseModule() : getActualFirebaseModule();

export default module;
