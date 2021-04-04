'use strict';

const execa = require('execa');
const listr = require('listr');

/**
  * @function
  * Находит зависимость в package.json по переданному имени и удаляет ее,
  * если зависимости нет (такого пакета не существует/не был установлен/уже удален) выводит сообщение о том,
  * что пакет не найден
  * @param {string} packageName - Имя пакета, который нужно удалить
  */
const uninstallPackage = (packageName) => {
    new listr([
        {
            title: `Uninstalling package ${packageName || ''}`,
            task: async ctx => {
                if (!packageName) {
                    ctx.error = 'Specify package name to uninstall';
                    return Promise.reject(ctx);
                }

                await execa('npm', ['uninstall', packageName])
                    .then(result => {
                        const actions = result.stdout.split('\n')[0];

                        if (!actions.includes('removed')) {
                            ctx.error = 'Package not found';
                        } else {
                            ctx.message = `${packageName} uninstalled`;
                        }
                    })
                    .catch(err => console.log(err));

                if (ctx.error) {
                    return Promise.reject(ctx);
                }
            }
        }
    ]).run()
        .then(ctx => console.log(ctx.message))
        .catch(ctx => console.log(ctx.error));
}

module.exports = uninstallPackage;
