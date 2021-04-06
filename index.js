#!/usr/bin/env node

'use strict';

const info = require('./src/info.js');
const install = require('./src/install.js');
const uninstall = require('./src/uninstall.js');
const help = require('./src/help.js');
const separate = require('./src/utils.js');

global.VERSION = '1.2.0';

const args = process.argv.slice(2);
const {packages, options} = separate(args.slice(1));

switch (args[0]) {
    case 'info':
        info(args[1]);
        break;
    case 'i':
    case 'add':
    case 'install':
        install(packages, options);
        break;
    case 'un':
    case 'remove':
    case 'uninstall':
        uninstall(packages, options);
        break;
    case 'help':
        help();
        break;
    default:
        console.log('Unknown command \nFor help enter: depcontrol help')
}
