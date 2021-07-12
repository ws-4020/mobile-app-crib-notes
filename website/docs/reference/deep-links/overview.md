---
title: Deep Links
sidebar_label: Overview
---

WebサイトのURLをブラウザではなくモバイルアプリケーションを利用するようにする実装方式であるDeep Linksを紹介します。

<!-- textlint-disable ja-technical-writing/sentence-length,ja-technical-writing/max-comma,ja-spacing/ja-no-space-around-parentheses,jtf-style/3.3.かっこ類と隣接する文字の間のスペースの有無,ja-technical-writing/ja-no-mixed-period,ja-technical-writing/no-unmatched-pair -->

import {PageList} from '../../../src/components';
const overviews = [
  {
    title: 'はじめに',
    summary: 'Deep Linksの概要を紹介します',
    to: '/reference/deep-links/basics',
  },
  {
    title: 'Android App Links',
    summary: 'AndroidのDeep Links実装',
    to: '/reference/deep-links/android-app-links',
  },
  {
    title: 'Universal Links',
    summary: 'iOSのDeep Links実装',
    to: '/reference/deep-links/universal-links',
  },
  {
    title: 'Firebase Dynamic Links',
    summary: 'Firebaseを利用したAndroid、iOSのDeep Links',
    to: '/reference/deep-links/dynamic-links',
  },
  {
    title: 'Custom URL Scheme',
    summary: 'スキームを指定したDeep Linksの問題',
    to: '/reference/deep-links/custom-url-scheme',
  },
]

<PageList overviews={overviews} colSize={12} />

<!-- textlint-enable ja-technical-writing/sentence-length,ja-technical-writing/max-comma,ja-spacing/ja-no-space-around-parentheses,jtf-style/3.3.かっこ類と隣接する文字の間のスペースの有無,ja-technical-writing/ja-no-mixed-period,ja-technical-writing/no-unmatched-pair -->
