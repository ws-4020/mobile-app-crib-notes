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

import * as FileSystem from 'expo-file-system';
import {Account} from 'features/backend/apis/model';

import {db} from '../db';

export const accountData = () => {
  db.account.create(santokuAccount);
};

export const santokuAccount: Account = {
  accountId: 'santoku',
  profile: {
    nickname: 'santoku',
    type: [],
    points: 1000,
    totalPoints: 3000,
    avatarImageUrl: `${FileSystem.documentDirectory!}santoku-avatar.png`,
  },
  deviceTokens: [
    'f3ek6k5QQfmdc82W9h28F6:APA91bHcAjgNDnpN3o21ffr4tShV0zoWPkI6CgsdsGZhF8HNDGYF9ChTnBM7uR7Lk1xoP2kLyWTWKGSto0IbuGiPVuoaNB8z4qELqYavYYPDzgN7-xWYYKE',
    'dBZrQSRmYEOhmoOsxbLBS_:APA91bGhfKxyBt-mjNROAs5adtNX9ygvYuDN4EKsRggiYq-F46FTZ7e-9cmd04l-E9UOviQ-OVya5cHDP2uzNZ8EQCoAuMV40oJObxnRr-hum9NM3uGEg_I',
  ],
};
