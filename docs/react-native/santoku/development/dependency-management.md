---
title: 依存パッケージの管理
---

import {RepositoryLink} from '../../../../src/components/RepositoryLink.tsx';

## 依存パッケージの追加

### `package.json`と`Podfile.lock`への追加

次の2つのコマンドをセットで実行してください。

* `expo install <package-name>`
  * `devDependencies`に追加する場合は、`npm install -D <package-name>`
* `npm run pod-install`

:::info
macOSでないと`pod-install`は実行できないので、依存ライブラリはできるだけmacOSで追加するようにしてください。

ただし、Podを利用していないとわかっているライブラリを追加するのであれば、macOSでなくても問題ありません。
:::

ExpoはReactなど一部の依存パッケージについて、利用できるバージョンを管理しています。そういったライブラリについては、個別に自分たちで依存ライブラリのバージョンを管理する必要はありません。`expo install`でインストールすれば、適切なバージョンがインストールされます。

一方で、`npm install <package-name>`でインストールするだけでは正しいバージョンでインストールされない可能性があるということに注意してください。

依存パッケージを`dependencies`に追加する場合は、**必ず`expo install`で**インストールしてください。`devDependencies`に追加する場合は、`npm install -D`でインストールする必要があります。

### Renovateの設定を追加

[依存パッケージのバージョン管理](#依存パッケージのバージョン管理)を確認して、追加したパッケージを適切な分類にあてはめてください。

他のパッケージとまとめてアップデートする必要がなければ、設定の追加は必要ありません。`package.json`で指定するバージョン範囲（`~`や`^`など）は、追加したパッケージの種類に応じて修正してください。

## 依存パッケージのバージョン管理

依存パッケージのバージョン管理にあたって、まず「`expo upgrade`の対象になるか」を確認します。そのうえで、指定するバージョン範囲をどう指定するかを決める必要があります。

このリポジトリでは次のように設計しています。具体的な分類については、<RepositoryLink path="/blob/master/.github/renovate.json5">renovate.json5</RepositoryLink>を参照してください。

### expo upgradeに含まれるパッケージ

バージョン範囲は `expo upgrade` で自動的に設定されるものを採用します。ここに該当するパッケージは、`expo install`と`expo upgrade`で設定されるバージョンから変更しません。

### expo upgradeに含まれるパッケージへの依存があるパッケージ

依存するパッケージのバージョン範囲と整合するように設定します。詳細はパッケージごとに検討する必要があります。

### Expoと関連がないパッケージ（上記に該当しないパッケージ）

このリポジトリでは、これらのパッケージは大きく3つに分類しています。

* React Navigation、Docusaurusなどの、バージョンをまとめて管理したいパッケージ
  * まとめて管理したいパッケージごとに`renovate.json5`でグループを定義
* ESLintやPrettierなどの、ツール系パッケージ
  * `renovate.json5`のツール系パッケージ用グループに追加
* 個別にバージョンを管理するパッケージ
  * 個別にバージョンを管理する場合、`renovate.json5`での設定は不要

これらのパッケージは、バージョン範囲を次のルールで設定しています。

* `dependencies`: パッチバージョン (`~1.1.0`)
* `devDependencies`: マイナーバージョン (`^1.1.0`)

`dependencies`は、パッチバージョンまでは[RenovateのlockFileMaintenance](https://docs.renovatebot.com/configuration-options/#lockfilemaintenance)でまとめて更新されますが、マイナーバージョンの更新はプルリクエストが作成されます。依存パッケージのメンテナンスを容易にするため、`devDependencies`はマイナーバージョンまではlockFileMaintenanceでまとめて更新します。

### `@types`のバージョンについて

`@types`のバージョン範囲を指定するのはとても難しいです。このリポジトリでは、できるかぎり元パッケージの範囲指定に合うように設定しています。

元パッケージと同じバージョンもしくは、より新しいバージョンの`@types`パッケージがあるとは限らないので、元パッケージと同じバージョン範囲は指定できません。たとえば、Reactのバージョンが`16.13.1`だとしても`@types/react`には`16.9.x`しか存在しないため、`@types/react`のバージョンとして`~16.13.1`は指定できません。

このようなときにもできるだけ適切なバージョンの`@types`をインストールするために、`@types`のバージョン範囲指定には`^`や`~`ではなく、不等号（`<`）を利用しています。なお、`expo upgrade`に含まれるパッケージはこのルールには含めません。

* 例： `jest`
  * ▶ `jest-expo`では、`jest`のバージョンを`^25.2.0`と指定している（`expo 41.0.0`時点）
  * ▶ `@types/jest`はメジャーバージョンが25なら問題ないとして、`"@types/jest": "<26.0.0"`と指定する
* 例： `react-test-renderer`
  * ▶ `jest-expo`では、`react-test-renderer`のバージョンを`~16.11.0`と指定している（`expo 41.0.0`時点）
  * ▶ `@types/react-test-renderer` はパッチバージョンが25なら問題ないとして、 `"@types/react-test-renderer": "<16.12.0"` と指定する
