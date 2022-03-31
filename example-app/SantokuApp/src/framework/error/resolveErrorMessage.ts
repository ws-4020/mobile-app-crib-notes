import axios, {AxiosError} from 'axios';

import {log} from '../logging';
import {m} from '../message';

export function resolveErrorMessage(error: unknown): {title: string; message: string} {
  if (axios.isAxiosError(error)) {
    // ログ出力用に取得しているので、any型を許容する。
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    log.trace(`
Failed HTTP Request:
req.url=[${error.config.url ?? ''}]
req.method=[${error.config.method ?? ''}]
req.status=[${error.response?.status ?? ''}]
req.body=[${JSON.stringify(error.config.data, null, 2)}]
req.headers=[${JSON.stringify(error.config.headers, null, 2)}]
res.body=[${JSON.stringify(error.response?.data, null, 2)}]
res.headers=[${JSON.stringify(error.response?.headers, null, 2)}]
`);
    return resolveApiErrorMessageWhenAxiosError(error);
  }
  // 想定外のエラー
  return resolveApiErrorMessageWhenUnexpectedError();
}

function resolveApiErrorMessageWhenAxiosError(error: AxiosError) {
  const statusCode = error.response?.status;
  const title = m('システムエラー');
  const content = m('通信中にエラーが発生しました。');
  return {title, message: formatMessage(content, statusCode)};
}

function resolveApiErrorMessageWhenUnexpectedError() {
  const title = m('システムエラー');
  const content = m('しばらく経ってからもう1度お試しください。');
  return {title, message: formatMessage(content)};
}

function formatMessage(content: string, statusCode?: number) {
  if (statusCode === undefined) {
    return `${content}`;
  }
  return `${content}\n${statusCode}`;
}
