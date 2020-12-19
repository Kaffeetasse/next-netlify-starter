const fs = require('fs');
const brotli = require('brotli');
const path = require('path');

const foldersToCompress = ['out/_next/static/chunks/', 'out/_next/static/css/'];

const { compress } = brotli;

const brotliSettings = {
  extension: 'br',
  skipLarger: true,
  mode: 1, // 0 = generic, 1 = text, 2 = font (WOFF2)
  quality: 11, // 0 - 11,
  lgwin: 22 // default
};

function findInDir(dir, filter, fileList = []) {
  const files = fs.readdirSync(dir);

  files.forEach(file => {
    const filePath = path.join(dir, file);
    const fileStat = fs.lstatSync(filePath);

    if (fileStat.isDirectory()) {
      findInDir(filePath, filter, fileList);
    } else if (filter.test(filePath)) {
      fileList.push(filePath);
    }
  });

  return fileList;
}

// get files
let filesToCompress = [];
foldersToCompress.forEach(folder => {
  filesToCompress.push(...findInDir(folder, /\.(css|js)$/));
});

// compress files
filesToCompress.forEach(file => {
  const result = compress(fs.readFileSync(file), brotliSettings);
  fs.writeFileSync(`${file}.br`, result);
  console.log('compressed', file);
});
