const fs = require('fs');

const input = fs.readFileSync('input.txt', 'utf-8');
const intcode = input.split(',').map(val => parseInt(val, 10));

intcode[1] = 12;
intcode[2] = 2;

let pointer = 0;

while (true) {
    if (intcode[pointer] === 1) intcode[intcode[pointer+3]] = intcode[intcode[pointer+1]] + intcode[intcode[pointer+2]];
    if (intcode[pointer] === 2) intcode[intcode[pointer+3]] = intcode[intcode[pointer+1]] * intcode[intcode[pointer+2]];
    if (intcode[pointer] === 99) break;
    pointer = pointer + 4;
}

console.log(intcode[0]);
