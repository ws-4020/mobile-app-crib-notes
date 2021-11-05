
import {LocalAuthentication, LocalAuthenticationOption, LocalAuthenticationResult } from './LocalAuthentication';
import * as ExpoAuthentication from 'expo-local-authentication'

export default class ExpoLocalAuthentication implements LocalAuthentication
{
  isEnrolled(): Promise<boolean> {
    return ExpoAuthentication.isEnrolledAsync();
  }
  isFingerPrintSupported(): Promise<boolean> {
    return isAuthenticationTypeSupported(ExpoAuthentication.AuthenticationType.FINGERPRINT)
  }
  isFacialSupported(): Promise<boolean> {
    return isAuthenticationTypeSupported(ExpoAuthentication.AuthenticationType.FACIAL_RECOGNITION)
  }
  isIrisSupported(): Promise<boolean> {
    return isAuthenticationTypeSupported(ExpoAuthentication.AuthenticationType.IRIS)
  }

  authenticate(option: LocalAuthenticationOption): Promise<LocalAuthenticationResult> {
    return new Promise<LocalAuthenticationResult> ( (resolve) => {
      ExpoAuthentication.authenticateAsync({
        promptMessage: option.promptMessage,
        cancelLabel: option.cancelLabel,
        disableDeviceFallback: option.disableFallback,
        fallbackLabel: option.fallbackLabel
      }).then((ret) => {
        if( ret.success ) {
          resolve(new LocalAuthenticationResult(ret.success))
        } else {
          resolve(new LocalAuthenticationResult(ret.success, ret.error))
        }
      })
    })
  }
}

function isAuthenticationTypeSupported(checkedType: ExpoAuthentication.AuthenticationType) : Promise<boolean> {
  return new Promise<boolean>( (resolve) => {
    let result = false;
    ExpoAuthentication.supportedAuthenticationTypesAsync().then((types: ExpoAuthentication.AuthenticationType[])=> {
      types.forEach(type => {
        if(type === checkedType) resolve(true);
      });
      resolve(result);
    })
  })
}