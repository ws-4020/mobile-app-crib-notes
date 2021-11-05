/**
 * 
 */
export interface LocalAuthentication {
  isEnrolled() : Promise<boolean>;
  isFingerPrintSupported(): Promise<boolean>;
  isFacialSupported(): Promise<boolean>;
  isIrisSupported(): Promise<boolean>;
  authenticate(option: LocalAuthenticationOption): Promise<LocalAuthenticationResult>;
}

export class LocalAuthenticationOption {
  promptMessage?: string;
  cancelLabel?: string;
  disableFallback?: boolean;
  fallbackLabel?: string;
}

export class LocalAuthenticationResult {
  success: boolean = false;
  error?: string;
  constructor(success:boolean,error?:string) {
    this.success = success;
    this.error = error;
  }
}
