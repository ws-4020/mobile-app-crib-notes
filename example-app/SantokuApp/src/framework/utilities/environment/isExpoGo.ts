import {Constants} from 'react-native-unimodules';

/**
 * Expo Goで実行されているかどうかを返します。実行環境が`standalone`でない場合は、Expo Goで実行されているとみなします。
 *
 * [Constants - Expo Documentation](https://docs.expo.dev/versions/latest/sdk/constants/#constantsappownership)
 *
 * @returns {boolean} Expo Goで実行されている場合、`true`
 */
export const isExpoGo = Constants.appOwnership && Constants.appOwnership !== 'standalone';
