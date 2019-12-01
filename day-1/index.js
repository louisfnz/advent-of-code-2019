const fs = require('fs-extra');
const {getModuleArray, fuelCalculation, fuelRecursive} = require('./util');

const partOne = async () => {
    const input = await fs.readFile('input.txt', 'utf-8');
    const modules = getModuleArray(input);

    const total = modules
        .map(mass => fuelCalculation(mass))
        .reduce((a, b) => a + b, 0);

    console.log('Part one: ', total);
};
