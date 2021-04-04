#!/usr/bin/env node

'use strict';

const info = require('./info.js');
const install = require('./install.js');
const uninstall = require('./uninstall.js');
const help = require('./help.js');

const args = process.argv.slice(2);

switch (args[0]) {
    case 'info':
        info(args[1]);
        break;
    case 'install':
        install(args[1]);
        break;
    case 'uninstall':
        uninstall(args[1]);
        break;
    case 'help':
        help();
        break;
    default:
        console.log('Unknown command \nFor help enter: dep-utility help')
}
