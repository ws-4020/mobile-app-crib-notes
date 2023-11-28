/**
 * Copyright 2023 TIS Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {AppTheme} from './AppTheme';

export const getReactNativeElementsTheme = (appTheme: AppTheme) => {
  const colors = appTheme.colors;
  return {
    // Buttonはタイプによってスタイルが変わるのでここでは設定しない
    Text: {
      style: {
        color: colors.text,
      },
      h1Style: {
        color: colors.textStrong,
      },
      h2Style: {
        color: colors.textStrong,
      },
      h3Style: {
        color: colors.textStrong,
      },
      h4Style: {
        color: colors.textStrong,
      },
    },
    Input: {
      style: {
        fontSize: 17,
        color: colors.text,
        includeFontPadding: false,
      },
      labelStyle: {
        fontSize: 15,
        fontWeight: 'normal',
        color: colors.text,
      },
      containerStyle: {
        paddingHorizontal: 0,
      },
      inputContainerStyle: {
        borderBottomColor: colors.borderStrong,
        borderBottomWidth: 2,
      },
      errorStyle: {
        fontSize: 12,
        color: colors.error,
        includeFontPadding: false,
      },
    },
  };
};
