# Push Notification

## 仕様

Push通知の以下機能を検証するためのページです。

- Permissionのステータス取得
- Permissionの許可ダイアログの表示
- Permissionの仮許可
- FCM登録トークンの取得
- Push通知の送信
- Push通知の設定画面への遷移

TODO: ここにイメージ画像を貼ってみる。↓くらい？？
  * 全体のキャプチャ
  * 許可ダイアログのキャプチャ
  * Push通知受信時のキャプチャ

### Permissionのステータス取得

現在のPermissionのステータスを取得します。
iOSの場合は、以下4つのステータスが存在します。

- NOT_DETERMINED - ユーザが許可ダイアログでPermissionを許可、許可しないを選択していない状態
- DENIED - ユーザが許可ダイアログでPermissionを許可しなかった場合
- AUTHORIZED - ユーザが許可ダイアログでPermissionを許可した場合
- PROVISIONAL - アプリがPROVISIONALとしてPermissionの許可リクエストを実施した場合

Androidの場合は、常にAUTHORIZEDとなります。

### Permissionの許可ダイアログの表示

iOSの場合は、Push通知の受信をする前にユーザにPermissionの許可を確認する必要があります。
ユーザがPermissionの許可、もしくは拒否を実施していない場合は、「Permissionの許可」ボタンをタップすると、Permissionの許可ダイアログが表示されます。
なお、一度でもPermissionの許可、もしくは拒否を実施した場合は、以降許可ダイアログは表示されません。

### Permissionの仮許可

iOS12以降の場合は、上述した許可ダイアログでユーザが許可をしなくても、Push通知を受信できる機能が追加されました。
Permissionのリクエスト時（許可ダイアログ表示時）に、オプションとして[providesAppNotificationSettings](https://rnfirebase.io/messaging/ios-permissions#permission-settings)を`true`で渡すことにより、
許可ダイアログは表示されず、Permissionのステータスが`PROVISIONAL`になります。

ステータスが`PROVISIONAL`の場合は、Push通知を受信した際にヘッドアップ通知が表示されません。通知センターのみ表示されるようになります。

TODO: 許可ダイアログを表示した後に、`PROVISIONAL`にできるのか確認

### FCM登録トークンの取得

FCM登録トークンを取得します。

### Push通知の送信

バックエンドのAPIを実行してPush通知を送信します。
Push通知を送信するバックエンドのソースコードは[こちら](https://github.com/ws-4020/mobile-app-crib-notes/blob/feature/add-readme-for-push-notification-demo/example-app/santoku-app-backend/src/main/java/jp/fintan/mobile/santokuapp/infrastructure/service/FcmPushNotifier.java)です。

アプリがフォアグラウンドにある場合は、スナックバーに通知内容が表示されます。
アプリがバックグラウンドにある場合、もしくはアプリを起動していない場合は、OSによって挙動が変わります。

iOSの場合は、ヘッドアップ通知が表示され、音が鳴ります。
Androidの場合は、チャンネルの重要度によって挙動が変わります。以下は、Androidの[ドキュメント](https://developer.android.com/guide/topics/ui/notifiers/notifications?hl=ja#importance)にも記載されている重要度に応じた動作の違いです。
- 緊急: 音が鳴り、ヘッドアップ通知として表示されます。
- 高: 音が鳴ります。
- 中: 音が鳴りません。
- 低: 音が鳴らず、ステータスバーにも表示されません。

このアプリでは、重要度に応じた動作の検証をするために、以下4つのチャンネルを用意しています。
- emergencyChannel - 重要度:緊急
- highChannel - 重要度:高
- middleChannel - 重要度:中
- lowChannel - 重要度:低

チャンネルの指定をしないでPush通知を送信した場合は、emergencyChannelにPushが通知されます。

### Push通知の設定画面への遷移

OSのPush通知の設定画面を表示します。