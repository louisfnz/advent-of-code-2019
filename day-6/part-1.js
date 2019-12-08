const fs = require('fs');

const file = fs.readFileSync('input.txt', 'utf-8');
const orbits = file.trim().split('\n');

const objects = {};
let total = 0;

orbits.forEach(orbit => {
    const [object, satellite] = orbit.trim().split(')');
    objects[satellite] = object;
});

Object.keys(objects).forEach(satellite => {
    let object = objects[satellite];
    while (object) {
        object = objects[object];
        total++;
    }
});

console.log(total);