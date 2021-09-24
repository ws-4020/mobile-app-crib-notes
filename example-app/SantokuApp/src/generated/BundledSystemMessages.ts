export const BundledSystemMessages = {
  'errors.webview.networkError': 'ページの表示中にエラーが発生しました。ネットワーク環境を確認してください。',
} as const;

type SystemErrorCode = keyof typeof BundledSystemMessages;
export type {SystemErrorCode};
