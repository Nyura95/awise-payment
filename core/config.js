const yaml = require('js-yaml');
const fs = require('fs');

module.exports = yaml.safeLoad(fs.readFileSync(`./config.${fs.readFileSync('./.env', 'utf8')}.yaml`, 'utf8'));
