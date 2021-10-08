import type {ReactNativeFirebaseApp, ReactNativeFirebaseCrashlyticsModule} from './DummyFirebaseTypes';

class DummyFirebaseCrashlytics implements Omit<ReactNativeFirebaseCrashlyticsModule, 'native' | 'emitter'> {
  static readonly SDK_VERSION = 'N/A';

  isCrashlyticsCollectionEnabled = true as const;

  constructor(public app: ReactNativeFirebaseApp) {}

  checkForUnsentReports(): Promise<boolean> {
    return Promise.resolve(false);
  }

  crash(): void {}

  deleteUnsentReports(): Promise<void> {
    return Promise.resolve();
  }

  didCrashOnPreviousExecution(): Promise<boolean> {
    return Promise.resolve(false);
  }

  log(_message: string): void {}

  recordError(error: Error, jsErrorName?: string): void {
    // loggingモジュールを使うと循環参照になってしまうので、consoleを直接利用します。
    console.error(`[error] [${jsErrorName ?? 'unknown'}] ${error.message}`);
  }

  sendUnsentReports(): void {}

  setAttribute(_name: string, _value: string): Promise<null> {
    return Promise.resolve(null);
  }

  setAttributes(_attributes: {[p: string]: string}): Promise<null> {
    return Promise.resolve(null);
  }

  setCrashlyticsCollectionEnabled(_enabled: boolean): Promise<null> {
    return Promise.resolve(null);
  }

  setUserId(_userId: string): Promise<null> {
    return Promise.resolve(null);
  }
}

export const createDummyFirebaseCrashlytics = (app: ReactNativeFirebaseApp) => {
  const crashlyticsModule = new DummyFirebaseCrashlytics(app) as ReactNativeFirebaseCrashlyticsModule;
  const crashlytics = () => crashlyticsModule;
  crashlytics.SDK_VERSION = 'N/A';
  return crashlytics;
};
