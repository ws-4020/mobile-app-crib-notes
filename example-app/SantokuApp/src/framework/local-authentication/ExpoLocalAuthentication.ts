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
    return ExpoAuthentication.authenticateAsync(rawOpt).then((ret) => {
      if (ret.success) {
        return new LocalAuthenticationResult(ret.success);
      } else {
        return new LocalAuthenticationResult(ret.success, ret.error);
      }
    });
  }
}

function isAuthenticationTypeSupported(checkedType: ExpoAuthentication.AuthenticationType): Promise<boolean> {
  return ExpoAuthentication.supportedAuthenticationTypesAsync().then(
    (types: ExpoAuthentication.AuthenticationType[]) => {
      return types.indexOf(checkedType) >= 0;
    },
  );
}
