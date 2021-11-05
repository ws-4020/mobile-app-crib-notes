import * as ExpoAuthentication from 'expo-local-authentication';

import {LocalAuthentication, LocalAuthenticationOption, LocalAuthenticationResult} from './LocalAuthentication';
export class ExpoLocalAuthentication implements LocalAuthentication {
  isEnrolled(): Promise<boolean> {
    return ExpoAuthentication.isEnrolledAsync();
  }
  isFingerPrintSupported(): Promise<boolean> {
    return isAuthenticationTypeSupported(ExpoAuthentication.AuthenticationType.FINGERPRINT);
  }
  isFacialSupported(): Promise<boolean> {
    return isAuthenticationTypeSupported(ExpoAuthentication.AuthenticationType.FACIAL_RECOGNITION);
  }
  isIrisSupported(): Promise<boolean> {
    return isAuthenticationTypeSupported(ExpoAuthentication.AuthenticationType.IRIS);
  }

  authenticate(option: LocalAuthenticationOption): Promise<LocalAuthenticationResult> {
    const rawOpt = {
      promptMessage: option.promptMessage,
      cancelLabel: option.cancelLabel,
      disableDeviceFallback: option.disableFallback,
      fallbackLabel: option.fallbackLabel,
    };
    return new Promise<LocalAuthenticationResult>((resolve, reject) => {
      ExpoAuthentication.authenticateAsync(rawOpt)
        .then((ret) => {
          if (ret.success) {
            resolve(new LocalAuthenticationResult(ret.success));
          } else {
            resolve(new LocalAuthenticationResult(ret.success, ret.error));
          }
        })
        .catch((err) => {
          reject(err);
        });
    });
  }
}

function isAuthenticationTypeSupported(checkedType: ExpoAuthentication.AuthenticationType): Promise<boolean> {
  return new Promise<boolean>((resolve, reject) => {
    ExpoAuthentication.supportedAuthenticationTypesAsync()
      .then((types: ExpoAuthentication.AuthenticationType[]) => {
        types.forEach((type) => {
          if (type === checkedType) resolve(true);
        });
        resolve(false);
      })
      .catch((err) => reject(err));
  });
}
