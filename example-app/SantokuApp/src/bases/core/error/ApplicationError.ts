import {ErrorWrapper} from './ErrorWrapper';

export class ApplicationError extends ErrorWrapper {}

export function isApplicationError(error?: any): error is ApplicationError {
  return error != null && typeof error === 'object' && error instanceof ApplicationError;
}
