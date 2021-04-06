'use strict';

/**
 * @function
 * Разделяет аргументы на опции и имена пакетов
 * @param {string[]} inputArgs - Массив аргументов
 * @return {{packages: string[], options: string[]}} - Сформированные массивы имен пакетов и опций
 */
const separateArgs = (inputArgs) => {
    const options = [];
    const packages = [];

    inputArgs.forEach(item => {
        (item.startsWith('--') || item.startsWith('-')) ? options.push(item) : packages.push(item);
    });

    return {packages: packages, options: options};
}

module.exports = separateArgs;
