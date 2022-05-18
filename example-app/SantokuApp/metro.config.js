// Learn more https://docs.expo.io/guides/customizing-metro
const {getDefaultConfig} = require('expo/metro-config');
const metroConfig = getDefaultConfig(__dirname);

// ライセンスファイルを拡張子license, noticeとしてassetディレクトリに保存しているので、それらのファイルがアセットとして扱われるように設定
metroConfig.resolver.assetExts.push('license');
metroConfig.resolver.assetExts.push('notice');

module.exports = metroConfig;
