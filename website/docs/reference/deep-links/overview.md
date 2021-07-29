---
title: ディープリンク
sidebar_label: Overview
---

AndroidやiOSでURLのリンクを開くと、通常はWebブラウザが起動してWebサイトが表示されます。しかし、リンクからモバイルアプリを直接開くようにすることで、ユーザ体験が向上する場合もあります。

URLのリンクからモバイルアプリ内のページを開く方法を、このドキュメントではディープリンクと総称します。iOSとAndroidそれぞれで利用できる、ディープリンクの方法について紹介します。

<!-- textlint-disable ja-technical-writing/sentence-length,ja-technical-writing/max-comma,ja-spacing/ja-no-space-around-parentheses,jtf-style/3.3.かっこ類と隣接する文字の間のスペースの有無,ja-technical-writing/ja-no-mixed-period,ja-technical-writing/no-unmatched-pair -->

import {PageList} from '../../../src/components';
const overviews = [
  {
    title: 'はじめに',
    summary: 'ディープリンクの概要を紹介します',
    to: '/reference/deep-links/basics',
  },
  {
    title: 'Android App Links',
    summary: 'Androidのディープリンク実装',
    to: '/reference/deep-links/android-app-links',
  },
  {
    title: 'Universal Links',
    summary: 'iOSのディープリンク実装',
    to: '/reference/deep-links/universal-links',
  },
  {
    title: 'Firebase Dynamic Links',
    summary: 'Firebaseを利用したAndroid、iOSのディープリンク',
    to: '/reference/deep-links/dynamic-links',
  },
  {
    title: 'Custom URL Scheme',
    summary: 'スキームを指定したディープリンクの問題',
    to: '/reference/deep-links/custom-url-scheme',
  },
]

<PageList overviews={overviews} colSize={12} />

<!-- textlint-enable ja-technical-writing/sentence-length,ja-technical-writing/max-comma,ja-spacing/ja-no-space-around-parentheses,jtf-style/3.3.かっこ類と隣接する文字の間のスペースの有無,ja-technical-writing/ja-no-mixed-period,ja-technical-writing/no-unmatched-pair -->
