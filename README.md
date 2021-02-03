# モバイルアプリ開発ノウハウ集

モバイルアプリケーションを開発する際に役立つノウハウ集です。

このドキュメントは[Docusaurus](https://v2.docusaurus.io/)で作成されています。

## 前提条件
- [Node.js](https://nodejs.org/ja/)をインストール済み

## インストール

```bash
npm install
```

## ローカルで表示する

```bash
npm start
```

このコマンドは、ローカルの開発サーバーを起動し、ブラウザウィンドウを開きます。ほとんどの変更は、サーバーを再起動することなくライブで反映されます。

ローカルの開発サーバが起動しているポートは、起動時のログに次のように表示されています。ブラウザウィンドウが自動的に開かれない場合などは、表示されているURLにアクセスしてください。

```console
ℹ ｢wds｣: Project is running at http://localhost:3000/
ℹ ｢wds｣: webpack output is served from /mobile-app-crib-notes/
```

## ビルド

```bash
npm run build
```

このコマンドは静的コンテンツを `build` ディレクトリに生成します。

## ビルドされたものを表示する

`build`ディレクトリ内のファイルを`/mobile-app-crib-notes/`というコンテキストパスで表示します。Dockerでnginxを起動すると簡単です。

```bash
NGINX_PORT=3001 docker run -v $(pwd)/nginx:/etc/nginx/templates -v $(pwd)/build:/usr/share/nginx/html/mobile-app-crib-notes/ --rm -e NGINX_PORT -p 3001:$NGINX_PORT nginx
```

このコマンドを実行するnpm scriptを用意しているので、次のコマンドを実行すればビルドされたHTMLファイルを表示することができます。

```bash
npm run serve
```

## Lint

### 文章校正

[textlint](https://github.com/textlint/textlint)で文章を校正できます。

textlintを実行するには、`npm run lint:text`を実行してください。ルールに沿わない文章が警告として表示されます。

また、textlintを使って単純な誤りを自動的に修正できます。自動修正したい場合には`npm run fix:text`を実行してください。

### Markdownファイルの規約チェック

[markdownlint](https://github.com/DavidAnson/markdownlint)でMarkdownファイルの書き方が適切かどうかをチェックできます。

markdownlintを実行するには、`npm run lint:md`を実行してください。ルールに沿わない箇所が警告として表示されます。

また、markdownlintを使って単純な誤りを自動的に修正できます。自動修正したい場合には`npm run fix:md`を実行してください。

<!-- textlint-disable -->

## ライセンス

ドキュメントは、<a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/">クリエイティブ・コモンズ 表示 - 継承 4.0 国際 ライセンス</a>の下に提供されており、コードサンプルは<a rel="license" href="https://www.apache.org/licenses/LICENSE-2.0">Apache 2.0 License</a>の下に提供されています。

<a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/">
  <img alt="クリエイティブ・コモンズ・ライセンス" style="border-width:0" src="https://i.creativecommons.org/l/by-sa/4.0/88x31.png" /> </a>

<!-- textlint-enable -->
