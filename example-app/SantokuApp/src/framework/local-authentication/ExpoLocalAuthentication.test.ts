import * as ExpoAuthentication from 'expo-local-authentication';

import ExpoLocalAuthentication from './ExpoLocalAuthentication';

describe('ConsoleTransport logMethods', () => {
  test('isEnrolled メソッドの検証', async () => {
    const authn = new ExpoLocalAuthentication();
    jest.spyOn(ExpoAuthentication, 'isEnrolledAsync').mockResolvedValueOnce(true);
    const yes = await authn.isEnrolled();
    expect(yes).toBeTruthy();
    jest.spyOn(ExpoAuthentication, 'isEnrolledAsync').mockResolvedValueOnce(false);
    const no = await authn.isEnrolled();
    expect(no).toBeFalsy();
  });

  test('isFingerPrintSupported メソッドの検証', async () => {
    const authn = new ExpoLocalAuthentication();
    jest.spyOn(ExpoAuthentication, 'supportedAuthenticationTypesAsync').mockResolvedValueOnce([1]);
    const yes = await authn.isFingerPrintSupported();
    expect(yes).toBeTruthy();
    jest.spyOn(ExpoAuthentication, 'supportedAuthenticationTypesAsync').mockResolvedValueOnce([]);
    const no = await authn.isFingerPrintSupported();
    expect(no).toBeFalsy();
  });

  test('isFacialSupported メソッドの検証', async () => {
    const authn = new ExpoLocalAuthentication();
    jest.spyOn(ExpoAuthentication, 'supportedAuthenticationTypesAsync').mockResolvedValueOnce([2]);
    const yes = await authn.isFacialSupported();
    expect(yes).toBeTruthy();
    jest.spyOn(ExpoAuthentication, 'supportedAuthenticationTypesAsync').mockResolvedValueOnce([]);
    const no = await authn.isFacialSupported();
    expect(no).toBeFalsy();
  });

  test('isIrisSupported メソッドの検証', async () => {
    const authn = new ExpoLocalAuthentication();
    jest.spyOn(ExpoAuthentication, 'supportedAuthenticationTypesAsync').mockResolvedValueOnce([3]);
    const yes = await authn.isIrisSupported();
    expect(yes).toBeTruthy();
    jest.spyOn(ExpoAuthentication, 'supportedAuthenticationTypesAsync').mockResolvedValueOnce([]);
    const no = await authn.isIrisSupported();
    expect(no).toBeFalsy();
  });

  test('authenticate メソッドの検証', async () => {
    const authn = new ExpoLocalAuthentication();
    jest.spyOn(ExpoAuthentication, 'authenticateAsync').mockResolvedValueOnce({success: true});
    const yes = await authn.authenticate({promptMessage: 'test'});
    expect(yes.success).toBeTruthy();
    jest.spyOn(ExpoAuthentication, 'authenticateAsync').mockResolvedValueOnce({success: false, error: 'user_cancel'});
    const no = await authn.authenticate({promptMessage: 'test'});
    expect(no.success).toBeFalsy();
    expect(no.error).toBe('user_cancel');
  });
});
