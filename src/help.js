'use strict';

const fs = require('fs');
const path = require('path');

/**
  * @function
  * Первой строкой выводит название и версию утилиты
  * Далее выводит доступные команды
  */
const showHelpInfo = () => {
    const pckJsonPath = path.resolve('.') + '/package.json';
    const fileContent = fs.readFileSync(pckJsonPath, "utf8");
    const projectInfo = JSON.parse(fileContent);

    console.log(projectInfo.name + ' version ' + projectInfo.version + '\n\n' +
        'Usage:\n' +
        '\tdepcontrol info [path to project]\n' +
        '\tdepcontrol install <package>[@<tag>]\n' +
        '\tdepcontrol install <package>[@<version>]\n' +
        '\tdepcontrol uninstall <package>');
}

module.exports = showHelpInfo;
