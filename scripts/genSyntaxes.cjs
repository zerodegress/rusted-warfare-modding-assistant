const yaml = require('js-yaml');
const fs = require('fs');
const walkdir = require('walkdir');
const nodePath = require('path');

walkdir('.', (path, stat) => {
    if(stat.isFile && path.endsWith('.tmLanguage.yaml')) {
        const doc = yaml.load(fs.readFileSync(path));
        fs.writeFileSync(path.replace(/.yaml$/, '.json'), JSON.stringify(doc));
    }
});