# React Nativeのサンプルアプリケーション

## はじめに

モバイルアプリの開発は短期間での開発が要求される傾向にあります。そのため、技術選定や方式設計など、開発準備を十分に行う時間を確保できないことが多いと感じています。

そこで、React Nativeアプリを開発する際に参考としていただけるよう、次のコンテンツを公開しています。

[React Nativeのサンプルアプリケーション \| Fintan » Mobile App Development](https://ws-4020.github.io/mobile-app-crib-notes/react-native/santoku)

コンテンツの内容は以下のとおりです。実際のアプリ開発で役立つドキュメント類および、サンプルコードを提供しています。

- 用語集
- 要件定義
- 方式設計
- テスト計画
- 外部設計・内部設計
- 開発ガイド
- Decision Records[^1]

今後も継続的にアップデートし、内容を充実させていく予定です。

---

## 注意事項

公開しているコンテンツを、予告なく修正・更新・削除する可能性があります。ご了承ください。

---

## 更新履歴

### 2021/12/22

#### 🌱 新規コンテンツ（2021/12/22）

- [用語集](https://ws-4020.github.io/mobile-app-crib-notes/react-native/santoku/glossary)
- 要件定義
  - [機能要件](https://ws-4020.github.io/mobile-app-crib-notes/react-native/santoku/requirements/functional/overview)
  - [非機能要件](https://ws-4020.github.io/mobile-app-crib-notes/react-native/santoku/requirements/non-functional/overview)
- テスト計画
  - [全体テスト計画](https://ws-4020.github.io/mobile-app-crib-notes/react-native/santoku/test-planning/test-all-planning)
  - [テスト観点](https://ws-4020.github.io/mobile-app-crib-notes/react-native/santoku/test-planning/test-point/overview)
  - [テスト端末バリエーション](https://ws-4020.github.io/mobile-app-crib-notes/react-native/santoku/test-planning/test-variation)
- 外部設計・内部設計
  - 画面
    - [画面一覧](https://ws-4020.github.io/mobile-app-crib-notes/react-native/santoku/design/screen-list/overview)
    - [画面遷移図](https://ws-4020.github.io/mobile-app-crib-notes/react-native/santoku/design/screen-transitions/overview)
    - [画面設計](https://ws-4020.github.io/mobile-app-crib-notes/react-native/santoku/design/screen-specs/overview)
  - [メッセージ一覧](https://ws-4020.github.io/mobile-app-crib-notes/react-native/santoku/design/message-list/overview)
  - [コンテキスト設計](https://ws-4020.github.io/mobile-app-crib-notes/react-native/santoku/design/context/overview)
- 実装
  - [プロトタイプ実装](https://github.com/ws-4020/mobile-app-crib-notes/tree/master/example-app/SantokuApp)

### 2021/11/24

#### 🌱 新規コンテンツ（2021/11/24）

- 環境切り替え
  - 開発ガイド
    - [Firebaseの機能を利用する](https://ws-4020.github.io/mobile-app-crib-notes/react-native/santoku/development/development-environment/use-firebase)
    - [ビルドバリアントごとのアプリ起動](https://ws-4020.github.io/mobile-app-crib-notes/react-native/santoku/development/implement/app-launch-with-build-variants)
    - [Firebaseの機能を利用する際の注意点](https://ws-4020.github.io/mobile-app-crib-notes/react-native/santoku/development/implement/cautions-on-using-firebase)
    - [環境設定値の管理](https://ws-4020.github.io/mobile-app-crib-notes/react-native/santoku/development/implement/configurations)
- メッセージ管理
  - アプリケーション方式
    - [メッセージ管理](https://ws-4020.github.io/mobile-app-crib-notes/react-native/santoku/application-architecture/message-configuration/overview)
  - 開発ガイド
    - [メッセージの管理](https://ws-4020.github.io/mobile-app-crib-notes/react-native/santoku/development/design/message-configuration)
    - [メッセージの定義と取得](https://ws-4020.github.io/mobile-app-crib-notes/react-native/santoku/development/implement/message-configuration)
  - Decision Records
    - [メッセージ管理の方針](https://ws-4020.github.io/mobile-app-crib-notes/react-native/santoku/decisions/adr-005-message)
- ログ出力
  - アプリケーション方式
    - [アプリのログ出力](https://ws-4020.github.io/mobile-app-crib-notes/react-native/santoku/application-architecture/logging-app/overview)
  - 開発ガイド
    - [ログの利用](https://ws-4020.github.io/mobile-app-crib-notes/react-native/santoku/development/implement/logs-implementation)
  - Decision Records
    - [ログ出力の方針](https://ws-4020.github.io/mobile-app-crib-notes/react-native/santoku/decisions/adr-006-logging)

#### 🌿 更新コンテンツ（2021/11/24）

  - アプリケーション方式
    - [アプリ起動後の初期化処理](https://ws-4020.github.io/mobile-app-crib-notes/react-native/santoku/application-architecture/life-cycle-management/initialization)

[^1]: 方式を設計する際により有効に活用できるよう、設計した方式だけでなく検討した内容を記録してます。ぜひご活用ください。
