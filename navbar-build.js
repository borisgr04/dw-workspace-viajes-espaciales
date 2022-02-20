const fs = require('fs-extra');
const concat = require('concat');
const package = require('./projects/dw-navbar/package.json');

(async function build() {
  const filesC = [
    './dist/dw-navbar/vendor.js',
    './dist/dw-navbar/runtime.js',
    './dist/dw-navbar/polyfills.js',
    './dist/dw-navbar/polyfills-es5.js',
    './dist/dw-navbar/main.js'
  ];

  let files = filesC.filter(function (value, index, arr) {
    return fs.pathExistsSync(value);
  });
  
  const dir = `./dist/dw-navbar-publish/${package.version}`;

  await fs.ensureDir(dir);

  await concat(files, `${dir}/dw-navbar.js`);

  await fs.copyFile(
    './dist/dw-navbar/styles.css',
    `${dir}/dw-navbar.css`
  );
})();