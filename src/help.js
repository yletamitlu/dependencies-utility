'use strict';

/**
  * @function
  * Первой строкой выводит название и версию утилиты
  * Далее выводит доступные команды
  */
const showHelpInfo = () => {
    console.log(`depcontrol version ${VERSION}\n\n` +
        'Usage:\n' +
        'Get info:\n' +
        '\tdepcontrol info [path to project]\n\n' +
        'Install a package:\n' +
        '\tdepcontrol install [option] <package>[@<tag>]\n' +
        '\tdepcontrol install [option] <package>[@<version>]\n' +
        'options: [-S|--save|--no-save|--save-prod|--save-dev|--save-optional|--save-peer]\n' +
        'aliases: i, add \n\n' +
        'Remove a package:\n' +
        '\tdepcontrol uninstall [option] <package>\n' +
        'options: [-S|--save|--no-save|--save-prod|--save-dev|--save-optional|--save-peer]\n' +
        'aliases: un, remove');
}

module.exports = showHelpInfo;
