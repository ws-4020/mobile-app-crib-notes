# モバイルアプリ開発ノウハウ集

モバイルアプリケーションを開発する際に役立つノウハウ集です。

## ドキュメントの表示方法

このドキュメントは[Hugo](https://gohugo.io/)を使ってビルドしています。

### 前提条件

- [Hugo](https://gohugo.io/)をインストール済みであること

### npmパッケージのインストール

`npm install`を実行してnpmパッケージをインストールしてください。

### ドキュメントの確認方法

`hugo serve`を実行してください。

```
hugo serve
```

ビルドに成功し、Webサーバの起動ログが表示されます。

```
Web Server is available at //localhost:1313/ (bind address 127.0.0.1)
```

ログに出力されたURL（デフォルトでは、[http://localhost:1313](http://localhost:1313)）にアクセスすると、ビルドされたドキュメントを確認できます。ファイルを編集して保存すると、リアルタイムに変更が反映されます。

### 文章校正

[textlint](https://github.com/textlint/textlint)で文章を校正できます。

textlintを実行するには、`npm run textlint`を実行してください。ルールに沿わない文章が警告として表示されます。

また、textlintを使って単純な誤りを自動的に修正できます。自動修正したい場合には`npm run textlint:fix`を実行してください。

### サンプルアプリの実行方法

このリポジトリに含まれるReact Nativeのサンプルアプリを実行する手順については、[SantokuAppのREADME](santoku-app/README.md)を確認してください。

### テーマの更新

このドキュメントではHugoのテーマとして[Hugo Book Theme](https://github.com/alex-shpak/hugo-book)を利用しています。Hugo Book Themeでは、SCSSのビルドに[Hugo Pipes](https://gohugo.io/hugo-pipes/scss-sass/)の機能を利用しているのですが、通常のHugoではビルドに失敗してしまいます。

> Note: 実は、HugoにはHugo Extendedという公式提供の拡張版があります。SCSSのビルドにはHugo Extendedが必要です。テーマにビルド後のCSSを含めることで、使う側は（Hugo Extendedではなく）Hugoでビルドできるようになるのですが、Hugo Book Themeでは残念ながらその対応はされていません。

通常のHugoでもビルドできるように、このリポジトリではあらかじめSCSSをビルドした結果を`resources/_gen/assets/scss`に格納しています。ただし、テーマの更新時にはこのファイルも更新する必要があります。次の手順で更新してください。

1. `resources/_gen/assets/scss` ディレクトリを削除する
2. Hugo Extendedをインストールする
   - [Install Hugo | Hugo](https://gohugo.io/getting-started/installing/) を参照して、**Extended**版をインストールしてください。Homebrewなどで`extended`版をインストール出来ない場合は、[リリースページ](https://github.com/gohugoio/hugo/releases)からダウンロードできます。ファイル名が`hugo_extended_xxx`のようになっているものをダウンロードして実行してください。
3. `hugo`コマンドを実行する
4. `hugo serve`コマンドを実行する
5. `resources/_gen/assets/scss` ディレクトリの内容をGitにコミットする
6. Hugo Extendedではなく通常のHugoでビルドし、エラーが発生しないことを確認する

### Troubleshoot

#### `hugo serve`でエラーが出る場合

[Hugo Book Theme](https://github.com/alex-shpak/hugo-book)をサブモジュールとしてリポジトリに含めていますが、それがうまくクローンできていない可能性があります。
`themes/book`配下が空になっている場合などは、リポジトリのルートディレクトリで次のコマンドを実行してください。

```
git submodule update --init
```

`themes/book`配下に[Hugo Book Theme](https://github.com/alex-shpak/hugo-book)のソースコードなどが格納されていれば成功です。

ただしくクローンできているにも関わらず次のようなエラーが発生している場合は、Hugo Extendedをインストールする必要があります。[テーマの更新](#テーマの更新)を参照してください。

> Error: Error building site: TOCSS: failed to transform "book.scss" (text/x-scss). Check your Hugo installation; you need the extended version to build SCSS/SASS.

参考: [Frequently Asked Questions | Hugo](https://gohugo.io/troubleshooting/faq/#i-get-tocss--this-feature-is-not-available-in-your-current-hugo-version)

<!-- textlint-disable -->

## ライセンス

ドキュメントは、<a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/">クリエイティブ・コモンズ 表示 - 継承 4.0 国際 ライセンス</a>の下に提供されており、コードサンプルは<a rel="license" href="https://www.apache.org/licenses/LICENSE-2.0">Apache 2.0 License</a>の下に提供されています。

<a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/">
  <img alt="クリエイティブ・コモンズ・ライセンス" style="border-width:0" src="https://i.creativecommons.org/l/by-sa/4.0/88x31.png" /> </a>

<!-- textlint-enable -->
