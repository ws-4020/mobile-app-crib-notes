import crashlytics from '@react-native-firebase/crashlytics';

import {FirebaseCrashlyticsTransport} from './FirebaseCrashlyticsTransport';

describe('FirebaseCrashlyticsTransport logMethods', () => {
  test('traceメソッドの検証', () => {
    const transport = new FirebaseCrashlyticsTransport();
    transport.trace('traceLog', 'err0001');
    expect(crashlytics().recordError).toHaveBeenCalledWith(new Error('[trace] traceLog'), 'err0001');
  });

  test('debugメソッドの検証', () => {
    const transport = new FirebaseCrashlyticsTransport();
    transport.debug('debugLog', 'err0002');
    expect(crashlytics().recordError).toHaveBeenCalledWith(new Error('[debug] debugLog'), 'err0002');
  });

  test('infoメソッドの検証', () => {
    const transport = new FirebaseCrashlyticsTransport();
    transport.info('infoLog', 'err0003');
    expect(crashlytics().recordError).toHaveBeenCalledWith(new Error('[info] infoLog'), 'err0003');
  });

  test('warnメソッドの検証', () => {
    const transport = new FirebaseCrashlyticsTransport();
    transport.warn('warnLog', 'err0004');
    expect(crashlytics().recordError).toHaveBeenCalledWith(new Error('[warn] warnLog'), 'err0004');
  });

  test('errorメソッドの検証', () => {
    const transport = new FirebaseCrashlyticsTransport();
    transport.error('errorLog', 'err0005');
    expect(crashlytics().recordError).toHaveBeenCalledWith(new Error('[error] errorLog'), 'err0005');
  });
});
