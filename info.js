'use strict';

const fs = require('fs');
const path = require('path');

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

const printTable = (tableName, tabularData) => {
    console.log(tableName);
    console.table(tabularData);
};

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
