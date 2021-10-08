import type {ReactNativeFirebaseApp, ReactNativeFirebaseCrashlyticsModule} from './DummyFirebaseTypes';
import {createDummyFirebaseUtils} from './DummyFirebaseUtils';

const NA = 'N/A';

class DummyFirebaseApp implements ReactNativeFirebaseApp {
  readonly name: string = NA;

  readonly options = {
    appId: NA,
    projectId: NA,
  };

  readonly utils = createDummyFirebaseUtils(this);

  _crashlytics?: ReactNativeFirebaseCrashlyticsModule;
  crashlytics() {
    if (!this._crashlytics) {
      throw new Error('DummyFirebaseApp is not initialized.');
    }
    return this._crashlytics;
  }

  delete(): Promise<void> {
    return Promise.resolve();
  }
}

export const createDummyFirebaseApp = () => {
  return new DummyFirebaseApp();
};
