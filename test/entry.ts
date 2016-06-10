const rh = require('require-hacker');

[ 'png',
  'jpg',
  'jpeg',
  'gif',
  'woff',
  'woff2',
  'ttf',
  'eot',
  'css',
  'svg',
].forEach((type) => {
  rh.hook(type, () => `module.exports = ""`);
});
