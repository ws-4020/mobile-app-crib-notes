const fs = require('fs');

/**
 * @typedef License
 * @property {boolean?} exclude ライセンス不明なものを除外するため(build 処理にのみ使用され成果物に含まれない場合のみ除外可能)
 * @property {string?} licenseName
 * @property {string?} licenseUrl
 * @property {string?} licenseText
 */

/**
 * @returns {Object.<string, Object.<string, License>>}
 */
module.exports = function () {
  return {
    npm: {},
    gradle: {
      'com.parse.bolts:bolts-tasks:1.4.0': { // https://github.com/BoltsFramework/Bolts-Android
        licenseName: 'BSD-3-Clause', // 名称だけ厳密にする(元: BSD License: https://github.com/BoltsFramework/Bolts-Android/blob/1.4.0/LICENSE)
      },
    },
    cocoapods: {
      'glog@0.3.5': { // https://github.com/google/glog
        licenseName: 'BSD-3-Clause', // https://code.google.com/archive/p/google-glog/ (元: "Google" https://github.com/facebook/react-native/blob/v0.70.5/third-party-podspecs/glog.podspec#L9)
      },
      'SocketRocket@0.7.0': { // https://github.com/facebookincubator/SocketRocket/blob/0.7.0/LICENSE
        licenseName: 'BSD-3-Clause', // 名称だけ SPDX 形式に変更する (元: BSD)
      },
    },
  };
};
