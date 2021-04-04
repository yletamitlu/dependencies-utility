'use strict';

const execa = require('execa');
const listr = require('listr');

const installPackage = (packageName) => {
    new listr([
        {
            title: packageName ? `Installing package ${packageName}` : 'Installing dependencies from package.json',
            task: async ctx => {
                 await execa('npm', ['install', packageName || ''])
                    .then(result => ctx.message = result.stdout.split('\n')[0])
                    .catch(() => ctx.error = 'Wrong package name')

                if (ctx.error) {
                    return Promise.reject(ctx);
                }
            }
        }
    ]).run()
        .then(ctx => console.log(ctx.message))
        .catch(ctx => console.log(ctx.error));
}

module.exports = installPackage;
