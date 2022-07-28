import {ApplicationError} from 'bases/core/error/ApplicationError';

export class UpdateRequiredError extends ApplicationError {
  public supportedVersion: string;
  constructor(message = 'The app needs to be updated', supportedVersion: string) {
    super(message);
    this.supportedVersion = supportedVersion;
  }
}

export function isUpdateRequiredError(error: unknown): error is UpdateRequiredError {
  return error instanceof UpdateRequiredError;
}
