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

import * as Crypto from 'expo-crypto';

import {launchedId} from './launchedId';

describe('launchedId', () => {
  test('32桁の起動IDが取得できるかの検証', async () => {
    const spy = jest
      .spyOn(Crypto, 'getRandomBytesAsync')
      .mockReturnValue(new Promise(resolve => resolve(Uint8Array.from([...Array(32).keys()]))));
    const id = await launchedId();
    expect(spy).toHaveBeenCalledWith(32);
    expect(id).toHaveLength(32);
    expect(id).toMatch(/^[0-9a-v]+$/);
  });
});
