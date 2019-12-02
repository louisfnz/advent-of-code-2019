const fs = require('fs');

const input = fs.readFileSync('input.txt', 'utf-8');
const intcode_input = input.split(',').map(val => parseInt(val, 10));
const target = 19690720;

for (let noun = 0; noun <= 99; noun++) {
    for (let verb = 0; verb <= 99; verb++) {
        let pointer = 0;
        let intcode = [...intcode_input];
        intcode[1] = noun;
        intcode[2] = verb;

        while (true) {
            if (intcode[pointer] === 1) intcode[intcode[pointer+3]] = intcode[intcode[pointer+1]] + intcode[intcode[pointer+2]];
            if (intcode[pointer] === 2) intcode[intcode[pointer+3]] = intcode[intcode[pointer+1]] * intcode[intcode[pointer+2]];
            if (intcode[pointer] === 99) {
                if (target === intcode[0]) console.log(100 * noun + verb);
                break;
            }
            pointer = pointer + 4;
        }
    }
}