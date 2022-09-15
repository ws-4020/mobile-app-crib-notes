import {ErrorWrapper} from './ErrorWrapper';

export class RuntimeError extends ErrorWrapper {}

export function isRuntimeError(error?: any): error is RuntimeError {
  return error != null && typeof error === 'object' && error instanceof RuntimeError;
}
