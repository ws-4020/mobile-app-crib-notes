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

// グローバルから参照したいモックインスタンスを設定するためのオブジェクトです。
//
// 例えば、React Navigationの`navigation.navigate`のように、モックインスタンスの検証が必要な場合は、
// このオブジェクトに設定して、テストから参照できるようにしておく必要があります。
//
// React Navigationの`useNavigation`は、`jest/__mocks__/@react-navigation/native.ts`でモック化されて、
// `global.__mocks`に登録されています。
//
// テストでは、`expect(__mocks.navigation.navigate).toBeCalledWith('Screen')`のようにして、
// `navigation.navigate`の呼び出しを検証することができます。
//
// TypeScriptで型エラーにならないように、`global.__mocks`にモックを追加したら、`jest/types/global.d.ts`にその型も追加してください。
global.__mocks = {};
