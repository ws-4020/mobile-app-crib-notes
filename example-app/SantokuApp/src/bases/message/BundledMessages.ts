export const bundledMessages = {
  ホーム: 'ホーム',
  ユーザー: 'ユーザー',
  質問詳細: '質問詳細',
  プロフィール: 'プロフィール',
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
  ニックネーム: 'ニックネーム',
  登録: '登録',
  ログイン失敗: 'ログイン失敗',
  ログアウト: 'ログアウト',
  消去: '消去',
  キャンセル: 'キャンセル',
  完了: '完了',
  年: '年',
  月: '月',
  ページ番号: 'ページ番号',
  タイトル: 'タイトル',
  コメント: 'コメント',
  コメントを入力: 'コメントを入力',
  説明: '説明',
  質問: '質問',
  回答: '回答',
  件: '件',
  解決済み: '解決済み',
  日前: '日前',
  時間前: '時間前',
  質問は削除されました: '質問は削除されました',
  コメントを追加する: 'コメントを追加する',
  投稿: '投稿',
  質問を投稿: '質問を投稿',
  イベントを告知: 'イベントを告知',
  募集中のイベント: '募集中のイベント',
  もっと見る: 'もっと見る',
  クリア: 'クリア',
  決定: '決定',
  初歩的な質問内容の場合はチェックしてください: '初歩的な質問内容の場合はチェックしてください',
  'TISインテックグループで共同利用されるため、社外秘情報（画像含む）を投稿しないでください':
    'TISインテックグループで共同利用されるため、社外秘情報（画像含む）を投稿しないでください',
  'アカウントIDまたはパスワードに\n間違いがあります。': 'アカウントIDまたはパスワードに\n間違いがあります。',
  '現在のバージョン({0})ではご利用いただけません。ストアより最新版アプリへのアップデートをお願いします。':
    '現在のバージョン({0})ではご利用いただけません。ストアより最新版アプリへのアップデートをお願いします。',
  '通信中にエラーが発生しました。': '通信中にエラーが発生しました。',
  'しばらく経ってからもう1度お試しください。': 'しばらく経ってからもう1度お試しください。',
  'validation.mixed.required': '${path}を入力してください。',
  'validation.string.max': '${max}文字以下で入力してください。',
  'validation.string.loginPassword': '${path}が正しくありません。',
  'app.webview.onError': '通信エラーが発生し、コンテンツの取得に失敗しました。ネットワーク環境を確認してください。',
  'app.account.signupError': 'サインアップ後のログインに失敗しました。cause=[{0}]',
  'app.account.サインアップエラータイトル': 'サインアップに失敗しました',
  'app.account.サインアップエラー本文': '時間をおいてから再度お試しください。',
  'app.account.ログアウトエラータイトル': 'ログアウトに失敗しました',
  'app.account.ログアウトエラー本文': '時間をおいてから再度お試しください。',
  'app.terms.有効な利用規約の取得エラー': '利用規約の取得に失敗しました。画面をリロードして再度お試しください。',
  'app.push.notification.requestPushPermissionError':
    'プッシュ通知のパーミッションリクエストに失敗しました。cause=[{0}]',
  'app.push.notification.getFcmTokenError': 'FCM登録トークンの取得に失敗しました。cause=[{0}]',
  'app.push.notification.deleteFcmTokenError': 'FCM登録トークンの削除に失敗しました。cause=[{0}]',
  'app.push.notification.プッシュ通知の設定エラー':
    'プッシュ通知の設定に失敗しました。\n現在、プッシュ通知を受信できません。',
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
