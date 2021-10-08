import type firebase from '@react-native-firebase/app';

export type ReactNativeFirebaseModule = typeof firebase;
export type ReactNativeFirebaseApp = ReturnType<typeof firebase.app>;
export type ReactNativeFirebaseUtils = typeof firebase.utils;
export type ReactNativeFirebaseUtilsModule = ReturnType<ReactNativeFirebaseUtils>;
export type ReactNativeFirebaseCrashlytics = typeof firebase.crashlytics;
export type ReactNativeFirebaseCrashlyticsModule = ReturnType<ReactNativeFirebaseCrashlytics>;
