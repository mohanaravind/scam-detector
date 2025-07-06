const fs = require('fs');
const path = require('path');
fs.mkdirSync('dist', {recursive: true});
fs.copyFileSync(path.join('src','popup.js'), path.join('dist','popup.js'));
console.log('Build complete');
