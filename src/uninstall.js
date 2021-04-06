'use strict';

const execa = require('execa');
const listr = require('listr');

/**
  * @function
  * Находит зависимость в package.json по переданному имени и удаляет ее,
  * если зависимости нет (такого пакета не существует/не был установлен/уже удален) выводит сообщение о том,
  * что пакет не найден
  * @param {string[]} packages - Массив имен пакетов, которые нужно удалить
  * @param {string[]} options - Опции для удаления
  */
const uninstallPackage = (packages, options) => {
    new listr([
        {
            title: `Uninstalling packages: ${packages.join(', ')}`,
            task: () => execa('npm', ['uninstall', ...options, ...packages])
                .catch(err => console.log(err))
        }
    ]).run()
        .catch(err => console.log(err));
}

module.exports = uninstallPackage;
