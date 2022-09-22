import {ErrorWrapper} from './ErrorWrapper';

export class ApplicationError extends ErrorWrapper {
  constructor();
  constructor(cause: unknown);
  constructor(message: string);
  constructor(cause: unknown, errorCode?: string);
  constructor(message: string, errorCode?: string);
  constructor(message: string, cause: unknown, errorCode?: string);
  constructor(messageOrCause?: unknown, cause?: unknown, errorCode?: string) {
    if (typeof messageOrCause === 'string') {
      super(messageOrCause, cause);
      this._errorCode = errorCode;
    } else {
      super(messageOrCause);
      this._errorCode = errorCode;
    }
  }

  private readonly _errorCode?: string;

  get errorCode() {
    return this._errorCode;
  }
}

export function isApplicationError(error?: any): error is ApplicationError {
  return error != null && typeof error === 'object' && error instanceof ApplicationError;
}
