export const bundledMessages = {
  ホーム: 'ホーム',
  チーム詳細: 'チーム詳細',
  利用規約: '利用規約',
  リロード: 'リロード',
  同意: '同意',
  閉じる: '閉じる',
  OK: 'OK',
  アプリアップデート: 'アプリアップデート',
  システムエラー: 'システムエラー',
  ログイン: 'ログイン',
  新規登録: '新規登録',
  アカウントID: 'アカウントID',
  パスワード: 'パスワード',
  プロフィール登録: 'プロフィール登録',
  ログイン失敗: 'ログイン失敗',
  ログアウト: 'ログアウト',
  'アカウントIDまたはパスワードに\n間違いがあります。': 'アカウントIDまたはパスワードに\n間違いがあります。',
  '現在のバージョン({0})ではご利用いただけません。ストアより最新版アプリへのアップデートをお願いします。':
    '現在のバージョン({0})ではご利用いただけません。ストアより最新版アプリへのアップデートをお願いします。',
  '通信中にエラーが発生しました。': '通信中にエラーが発生しました。',
  'しばらく経ってからもう1度お試しください。': 'しばらく経ってからもう1度お試しください。',
  'validation.mixed.required': '${path}を入力してください。',
  'validation.string.loginPassword': '${path}が正しくありません。',
  'app.webview.onError': '通信エラーが発生し、コンテンツの取得に失敗しました。ネットワーク環境を確認してください。',
  'app.terms.有効な利用規約の取得エラー': '利用規約の取得に失敗しました。画面をリロードして再度お試しください。',
  'fw.error.通信エラー': 'ページの表示中にエラーが発生しました。ネットワーク環境を確認してください。',
  'fw.error.再ログインタイトル': '再ログインが必要です',
  'fw.error.再ログイン本文': 'セッションの有効期限が切れました。再度ログインしてください。',
  'fw.error.アプリバージョンエラータイトル': 'アプリの更新が必要です',
  'fw.error.アプリバージョンエラー本文':
    'アプリのバージョンが古いためこの機能を利用できません。ストアからアップデートを実施してください。',
  'fw.error.利用規約未同意タイトル': '新しい利用規約への同意',
  'fw.error.利用規約未同意本文': 'この機能を利用するためには最新の利用規約への同意が必要です。',
  'fw.error.リクエスト過多': 'ただいまリクエストが集中しており混雑しております。時間をおいてから再度お試しください。',
  'fw.error.リクエストタイムアウト': 'サーバへの接続がタイムアウトしました。時間をおいてから再度お試しください。',
  'fw.error.システムメンテナンス':
    'ただいまシステムメンテナンスを実施しております。時間をおいてから再度お試しください。',
  'fw.error.予期せぬ通信エラー':
    '予期せぬ通信エラーが発生しました。時間をおいてから再度お試しいただき、解決しない場合はお問い合わせください。',
} as const;

export type BundledMessagesType = typeof bundledMessages;
export type MessageKey = keyof typeof bundledMessages;
