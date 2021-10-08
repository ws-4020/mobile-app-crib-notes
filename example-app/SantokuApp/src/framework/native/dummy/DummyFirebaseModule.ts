import {createDummyFirebaseApp} from './DummyFirebaseApp';
import {createDummyFirebaseCrashlytics} from './DummyFirebaseCrashlytics';
import type {
  ReactNativeFirebaseApp,
  ReactNativeFirebaseCrashlytics,
  ReactNativeFirebaseModule,
  ReactNativeFirebaseUtils,
} from './DummyFirebaseTypes';
import {createDummyFirebaseUtils} from './DummyFirebaseUtils';

export class DummyFirebaseModule implements ReactNativeFirebaseModule {
  readonly SDK_VERSION = 'N/A';
  constructor(
    private _app: ReactNativeFirebaseApp,
    private _crashlytics: ReactNativeFirebaseCrashlytics,
    private _utils: ReactNativeFirebaseUtils,
  ) {}

  get apps() {
    return [this._app];
  }

  app(name?: string) {
    return this._app;
  }

  get crashlytics() {
    return this._crashlytics;
  }

  initializeApp() {
    return Promise.resolve(this._app);
  }

  get utils() {
    return this._utils;
  }

  setLogLevel() {}
}

const createDummyFirebaseModule = () => {
  const _app = createDummyFirebaseApp();
  return new DummyFirebaseModule(_app, createDummyFirebaseCrashlytics(_app), createDummyFirebaseUtils(_app));
};

export const dummyFirebaseModule = createDummyFirebaseModule();
