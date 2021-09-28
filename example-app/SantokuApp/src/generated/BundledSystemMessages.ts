export const BundledSystemMessages = {
  'errors.webview.networkError': 'ページの表示中にエラーが発生しました。ネットワーク環境を確認してください。',
} as const;

export type BundledSystemMessagesType = typeof BundledSystemMessages;
export type SystemMessageKey = keyof typeof BundledSystemMessages;
