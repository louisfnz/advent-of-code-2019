const fs = require('fs');
const {getModuleArray, fuelCalculation} = require('./util');

const input = fs.readFileSync('input.txt', 'utf-8');
const modules = getModuleArray(input);

const total = modules
    .map(mass => fuelCalculation(mass))
    .reduce((a, b) => a + b, 0);

console.log(total);
