import {setupServer} from 'msw/native';

import {handlers} from './handlers';

export const initialServer = () => {
  const server = setupServer(...handlers);
  // setupServerでハンドリングしていないリクエストは、デフォルトではwarnログが出力されるため、Metroサーバへのリクエスト時に常にwarnログが出力されてしまいます。
  // そのため、onUnhandledRequestにbypassを設定して、ハンドリングしていないリクエスト時はMSWでは何も実施しないようにします。
  // https://mswjs.io/docs/api/setup-server/listen#onunhandledrequest
  server.listen({onUnhandledRequest: 'bypass'});
};
