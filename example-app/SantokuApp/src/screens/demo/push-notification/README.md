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

TODO: Androidの場合はチャンネルを指定してPush通知を送信する旨を記載。チャンネルはデフォルトの`aaa`チャンネルとそうではない`bbb`チャンネルの作成

### Push通知の設定画面への遷移