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

export const setItemAsync = jest.fn();
export const getItemAsync = jest.fn(() => '1234567890');
export const deleteItemAsync = jest.fn();
export const isAvailableAsync = jest.fn();

/*
  eslint-disable-next-line @typescript-eslint/no-unsafe-assignment --
  expo-secure-storeのすべてのNamed Exportを列挙するのは大変なので、
  ES6のexport/import形式ではなく、module.exportsを使ってexportする。
 */
module.exports = {
  ...jest.requireActual('expo-secure-store'),
  setItemAsync,
  getItemAsync,
  deleteItemAsync,
  isAvailableAsync,
};
