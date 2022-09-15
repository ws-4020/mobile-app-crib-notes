import axios from 'axios';
import {RuntimeError} from 'bases/core/error/RuntimeError';
import {log} from 'bases/logging';
import {ErrorResponse} from 'features/backend/apis/model';

export const sendErrorLog = (error: unknown) => {
  try {
    if (axios.isAxiosError(error)) {
      const data = error.response?.data as ErrorResponse | undefined;
      const errorCode = data?.code ?? 'AxiosError';
      log.error(error, errorCode);
    } else {
      if (error instanceof Error) {
        log.error(error, 'UnexpectedRequestError');
      } else {
        log.error(new RuntimeError(error), 'UnexpectedRequestError');
      }
    }
  } catch {}
};
