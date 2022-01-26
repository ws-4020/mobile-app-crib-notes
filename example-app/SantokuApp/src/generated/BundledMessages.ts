export const bundledMessages = {
  ホーム: 'ホーム',
  チーム詳細: 'チーム詳細',
  利用規約: '利用規約',
  リロード: 'リロード',
  同意: '同意',
  閉じる: '閉じる',
  'validation.required': '{0}を入力してください。',
  'msg.error.ネットワーク': 'ページの表示中にエラーが発生しました。ネットワーク環境を確認してください。',
  'msg.error.appVersionTooOld.title': 'アプリケーションの更新が必要です',
  'msg.error.appVersionTooOld.message': 'アプリケーションのバージョンが古いためこの機能を利用できません。ストアからアップデートを実施してください。',
  'msg.error.requireTermsOfServiceAgreement.title': '新しい利用規約への同意',
  'msg.error.requireTermsOfServiceAgreement.message': 'この機能を利用するためには最新の利用規約への同意が必要です。',
  'msg.backend.tooManyRequests': 'ただいまリクエストが集中しており混雑しております。時間をおいてから再度お試しください。',
  'msg.backend.gatewayTimeout': 'サーバへの接続がタイムアウトしました。時間をおいてから再度お試しください。',
  'msg.backend.maintenance': 'ただいまシステムメンテナンスを実施しております。時間をおいてから再度お試しください。',
  'msg.backend.unexpected': '予期せぬ通信エラーが発生しました。時間をおいてから再度お試しいただき、解決しない場合はお問い合わせください。',
  'app.webview.onError': '通信エラーが発生し、コンテンツの取得に失敗しました。ネットワーク環境を確認してください。',
  'app.terms.有効な利用規約の取得エラー': '利用規約の取得に失敗しました。画面をリロードして再度お試しください。',
} as const;

export type BundledMessagesType = typeof bundledMessages;
export type MessageKey = keyof typeof bundledMessages;
