const fs = require('fs-extra');
const concat = require('concat');
const package = require('./projects/dw-ng-toolbar/package.json');

(async function build() {
  const filesC = [
    './dist/dw-ng-toolbar/vendor.js',
    './dist/dw-ng-toolbar/runtime.js',
    './dist/dw-ng-toolbar/polyfills.js',
    './dist/dw-ng-toolbar/polyfills-es5.js',
    './dist/dw-ng-toolbar/main.js'
  ];

  let files = filesC.filter(function (value, index, arr) {
    return fs.pathExistsSync(value);
  });
  
  const dir = `./dist/dw-ng-toolbar-publish/${package.version}`;

  await fs.ensureDir(dir);

  await concat(files, `${dir}/dw-ng-toolbar.js`);

  await fs.copyFile(
    './dist/dw-ng-toolbar/styles.css',
    `${dir}/dw-ng-toolbar.css`
  );
})();