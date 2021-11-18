import * as ExpoAuthentication from 'expo-local-authentication';

import {ExpoLocalAuthentication} from './ExpoLocalAuthentication';

describe('ExpoLocalAuthentication', () => {
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
    const singleSupported = await authn.isFingerPrintSupported();
    expect(singleSupported).toBeTruthy();
    jest.spyOn(ExpoAuthentication, 'supportedAuthenticationTypesAsync').mockResolvedValueOnce([1, 3]);
    const multipleSupported = await authn.isFingerPrintSupported();
    expect(multipleSupported).toBeTruthy();
    jest.spyOn(ExpoAuthentication, 'supportedAuthenticationTypesAsync').mockResolvedValueOnce([]);
    const noSupport = await authn.isFingerPrintSupported();
    expect(noSupport).toBeFalsy();
    jest.spyOn(ExpoAuthentication, 'supportedAuthenticationTypesAsync').mockResolvedValueOnce([2, 3]);
    const otherSupported = await authn.isFingerPrintSupported();
    expect(otherSupported).toBeFalsy();
  });

  test('isFacialSupported メソッドの検証', async () => {
    const authn = new ExpoLocalAuthentication();
    jest.spyOn(ExpoAuthentication, 'supportedAuthenticationTypesAsync').mockResolvedValueOnce([2]);
    const singleSupported = await authn.isFacialSupported();
    expect(singleSupported).toBeTruthy();
    jest.spyOn(ExpoAuthentication, 'supportedAuthenticationTypesAsync').mockResolvedValueOnce([1, 2]);
    const multipleSupported = await authn.isFacialSupported();
    expect(multipleSupported).toBeTruthy();
    jest.spyOn(ExpoAuthentication, 'supportedAuthenticationTypesAsync').mockResolvedValueOnce([]);
    const noSupport = await authn.isFacialSupported();
    expect(noSupport).toBeFalsy();
    jest.spyOn(ExpoAuthentication, 'supportedAuthenticationTypesAsync').mockResolvedValueOnce([1, 3]);
    const otherSupported = await authn.isFacialSupported();
    expect(otherSupported).toBeFalsy();
  });

  test('isIrisSupported メソッドの検証', async () => {
    const authn = new ExpoLocalAuthentication();
    jest.spyOn(ExpoAuthentication, 'supportedAuthenticationTypesAsync').mockResolvedValueOnce([3]);
    const singleSupported = await authn.isIrisSupported();
    expect(singleSupported).toBeTruthy();
    jest.spyOn(ExpoAuthentication, 'supportedAuthenticationTypesAsync').mockResolvedValueOnce([2, 3]);
    const multipleSupported = await authn.isIrisSupported();
    expect(multipleSupported).toBeTruthy();
    jest.spyOn(ExpoAuthentication, 'supportedAuthenticationTypesAsync').mockResolvedValueOnce([]);
    const noSupport = await authn.isIrisSupported();
    expect(noSupport).toBeFalsy();
    jest.spyOn(ExpoAuthentication, 'supportedAuthenticationTypesAsync').mockResolvedValueOnce([1, 2]);
    const otherSupported = await authn.isIrisSupported();
    expect(otherSupported).toBeFalsy();
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
