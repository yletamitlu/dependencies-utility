'use strict';

const fs = require('fs');
const path = require('path');

/**
  * @function
  * Формирует массив объектов {'Package': <имя пакета>, 'Version': <версия пакета>} для вывода в таблицу
  * информации о зависимостях проекта
  * @param {Object} obj - объект с зависимостями из package.json
  */
const dataForTable = (obj) => {
    const data = [];

    for (const [key, value] of Object.entries(obj)) {
        data.push({
            'Package' : key,
            'Version' : value,
        });
    }

    return data;
}

/**
  * @function
  * Печатает имя табицы и ее содержимое
  * @param {string} tableName - Имя таблицы
  * @param {[object]} tabularData - Массив строк для таблицы
  */
const printTable = (tableName, tabularData) => {
    console.log(tableName);
    console.table(tabularData);
};

/**
  * @function
  * Находит по переданному пути/в текущей директории package.json и выводит информацию об имени,
  * версии и установленных зависимостях проекта.
  * Если файл не найден, печатает сообщение об ошибке.
  * @param {string} projectPath - Путь проекта
  */
const showProjectInfo = (projectPath) => {
    if (!projectPath) {
        projectPath = '.';
    }

    const absolutePath = path.resolve(projectPath);
    const filePath = absolutePath + '/package.json';

    if (!fs.existsSync(filePath)) {
        console.log(`No project found on the path ${absolutePath}`);
        return;
    }

    const fileContent = fs.readFileSync(filePath, "utf8");
    const projectInfo = JSON.parse(fileContent);

    console.log(`Name: ${projectInfo.name ? projectInfo.name : '-'}\n` +
        `Version: ${projectInfo.version ? projectInfo.version : '-'}`);

    printTable('Dependencies:',
        projectInfo.dependencies ? dataForTable(projectInfo.dependencies) : '-');
    printTable('Develop dependencies:',
        projectInfo.devDependencies ? dataForTable(projectInfo.devDependencies) : '-');
}

module.exports = showProjectInfo;
