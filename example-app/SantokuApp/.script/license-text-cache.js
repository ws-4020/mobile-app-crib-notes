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

/**
 * 外部に同時に複数リクエストして負荷がかからないように直列化する
 */
const serialFetch = (() => {
  /**
   * @type {Promise<Response>}
   */
  let prevRequest = Promise.resolve();
  return (resource, options) => {
    prevRequest = prevRequest.then(() => {
      console.info(`request to ${resource}`);
      return fetch(resource, options);
    });
    return prevRequest;
  };
})();

module.exports = new (class LicenseTextCache {
  constructor() {
    this._cache = {};
  }
  /**
   *
   * @param {string} url
   * @returns {Promise<string>} licenseText
   */
  fetch(url) {
    if (!url) return Promise.reject('url must be non-empty');
    url = url
      .replace(/^https?:\/\/github\.com\/([^/]+)\/([^/]+)\/blob\//, (_all, p1, p2) => {
        return `https://raw.githubusercontent.com/${p1}/${p2}/`;
      })
      .replace(/^https?:\/\/www\.apache\.org\/licenses\/LICENSE-2.0\.(txt|html)/, () => {
        return 'https://www.apache.org/licenses/LICENSE-2.0.txt';
      });
    if (!this._cache[url]) {
      this._cache[url] = serialFetch(url).then(res => {
        if (res.ok) return res.text();
        throw new Error(`${res.status} ${res.statusText}`);
      });
    }
    return this._cache[url];
  }
})();
