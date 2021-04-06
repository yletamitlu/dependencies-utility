'use strict';

const execa = require('execa');
const listr = require('listr');

/**
 * @function
 * Добавлеяет конкретную зависимость в package.json, если передано имя пакета,
 * иначе устанавливает все зависимости из package.json и
 * выводит соообщение об успешной установке зависимости, либо сообщение о неверном имени пакета
 * @param {string[]} packages - Массив имен пакетов, которые нужно установить
 * @param {string[]} options - Опции для установки
 */
const installPackage = (packages, options) => {
    const tasks = [];

    packages.forEach(pkg => {
        tasks.push({
            title: pkg ? `Installing package ${pkg}` : 'Installing dependencies from package.json',
            task: (_, task) => execa('npm', ['install', ...options, pkg || ''])
                    .catch(() => task.skip(`Wrong package name '${pkg}'`))
        })
    });

    new listr(tasks).run().catch(err => console.log(err));
}

module.exports = installPackage;
