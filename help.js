'use strict';

const fs = require('fs');
const path = require('path');

const showHelpInfo = () => {
    const pckJsonPath = path.resolve('.') + '/package.json';
    const fileContent = fs.readFileSync(pckJsonPath, "utf8");
    const projectInfo = JSON.parse(fileContent);

    console.log(projectInfo.name + ' version ' + projectInfo.version + '\n' +
        'dep-utility info [path to project]\n' +
        'dep-utility install <package>[@<tag>]\n' +
        'dep-utility install <package>[@<version>]\n' +
        'dep-utility uninstall <package>');
}

module.exports = showHelpInfo;
