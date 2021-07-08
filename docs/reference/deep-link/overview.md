---
title: DeepLink
sidebar_label: Overview
---

モバイルアプリの利用が増えたため、WebだけでなくモバイルアプリもURLでコンテンツを利用やデータ連携することを実現するための機能。

ユーザがコンテンツにアクセスする場合にアプリを立ち上げてURLやパラメータを入力するのではなく、適切なアプリをOSが選択して起動するアプリを候補煮出すため、ユーザはコンテンツを利用しやすくなる。

例：フォトライブラリで画像を選択して、メールアプリに共有する。

<!-- textlint-disable ja-technical-writing/sentence-length,ja-technical-writing/max-comma,ja-spacing/ja-no-space-around-parentheses,jtf-style/3.3.かっこ類と隣接する文字の間のスペースの有無,ja-technical-writing/ja-no-mixed-period,ja-technical-writing/no-unmatched-pair -->

import {PageList} from '../../../src/components';
const overviews = [
  {
    title: 'はじめに',
    summary: 'アプリ間のデータ連携の概要を紹介します',
    to: '/reference/deep-link/app-links',
  },
  {
    title: 'App Links',
    summary: 'Androidのアプリ間データ連携',
    to: '/reference/deep-link/app-links',
  },
  {
    title: 'Universal Links',
    summary: 'iOSのアプリ間データ連携',
    to: '/reference/deep-link/universal-links',
  },
  {
    title: 'Firebase Dynamic Links',
    summary: 'Firebaseを利用したAndroid、iOSのアプリ間データ連携',
    to: '/reference/deep-link/dynamic-links',
  },
  {
    title: 'Custom URL Scheme',
    summary: 'Shemeを指定したアプリ間データ連携',
    to: '/reference/deep-link/custom-url-scheme',
  },
]

<PageList overviews={overviews} colSize={12} />

<!-- textlint-enable ja-technical-writing/sentence-length,ja-technical-writing/max-comma,ja-spacing/ja-no-space-around-parentheses,jtf-style/3.3.かっこ類と隣接する文字の間のスペースの有無,ja-technical-writing/ja-no-mixed-period,ja-technical-writing/no-unmatched-pair -->
