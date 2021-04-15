---
title: アプリケーションの配布
slug: /distribution
sidebar_label: Overview
---

モバイルアプリケーションはWebとは違って、ユーザや開発者のデバイスにアプリケーションをインストールする必要があります。

このドキュメントでは、デバイスにアプリをインストールするために開発者が実施する手順や利用するライセンスについて、アプリをインストールしたいシチュエーションごとに紹介します。

<!-- textlint-disable ja-technical-writing/sentence-length -->

import {PageList} from '../../src/components';
const overviews = [
  {
    title: 'よくあるユースケース',
    summary: <>よくあるユースケースごとに、どのような配布方法が選択できるかを紹介します</>,
    to: '/distribution/usecase'
  },
  {
    title: 'アプリケーションの配布',
    summary: <>配布方法毎に、利用するライセンスや手順を紹介します</>,
    to: '/distribution/distribute-app'
  },
  {
    title: 'アプリケーションのビルド',
    summary: <>配布するアプリをビルドする方法を紹介します</>,
    to: '/distribution/build/index'
  },
]

<PageList overviews={overviews} colSize={12} />

<!-- textlint-enable ja-technical-writing/sentence-length -->
