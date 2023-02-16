const path = require('path');
const licenseChecker = require("license-checker");

const rootDir = path.resolve(__dirname, '..');

const listNodeDependencies = () => new Promise((resolve, reject) => {
  // Options: https://github.com/davglass/license-checker#options
  licenseChecker.init({
    start: rootDir,
    // devDependenciesは含めない。
    production: true,
    // privateなパッケージは含めない。
    excludePrivatePackages: true,
    // https://github.com/davglass/license-checker#custom-format
    // 個人名やメールアドレスは含めない。
    customFormat: {publisher: false, email: false, name: true, version: true},
  }, (err, packages) => {
    if (err) reject(err);
    else {
      const list = Object.entries(packages).map(([id, info]) => {
        return {...info, id}
      });
      resolve(list);
    }
  });
});

module.exports = function listDependencies() {
  return Promise.all([
    listNodeDependencies(),
  ]).then(lists => {
    return lists.flat();
  });
};
