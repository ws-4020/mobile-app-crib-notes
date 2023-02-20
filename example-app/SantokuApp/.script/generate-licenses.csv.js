const fs = require('fs');
const listDependencies = require("./list-dependencies");

listDependencies().then(dependencies => {
  const licenses = dependencies.map(({
    name,
    version,
    licenseName,
    type,
    libraryId,
    url,
  }) => {
    return [
      name,
      version || '',
      licenseName,
      type,
      libraryId,
      url || '',
    ].join(',');
  });

  licenses.splice(0, 0, [
    'name',
    'version',
    'licenseName',
    'type',
    'libraryId',
    'url',
  ].join(','));
  
  // licenses.forEach(s => console.log(s));

  const csvPath = `${__dirname}/dist/licenses.csv`;
  fs.writeFileSync(csvPath, licenses.join('\n'));
  console.info(`${csvPath} にCSVファイルを出力しました`)
});
