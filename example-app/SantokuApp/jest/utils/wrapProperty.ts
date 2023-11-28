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

function hasOwnProperty<T, K extends PropertyKey>(obj: T, propertyKey: K): obj is T & Record<K, unknown> {
  return Object.prototype.hasOwnProperty.call(obj, propertyKey);
}

/**
 * `{...original, [key]: value}`だとgetterにdeprecated warn logが存在する場合警告ログが出てしまう問題対策
 */
export function wrapProperty<T extends object>(original: T, propertyObj: object): T {
  return new Proxy(original, {
    get(target, name, ...rest) {
      if (hasOwnProperty(propertyObj, name)) {
        return propertyObj[name];
      }
      return Reflect.get(target, name, ...rest);
    },
  });
}
