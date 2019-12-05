const fs = require('fs');

const file = fs.readFileSync('input.txt', 'utf-8');
const intcode = file.split(',');

const input = 1;

let pointer = 0;

while (true) {
    const instruction = intcode[pointer].padStart(5, '0');
    const opcode = Number(instruction.slice(-2));
    const mode_1 = Number(instruction.substr(2, 1));
    const mode_2 = Number(instruction.substr(1, 1));
    const value_1 = mode_1 === 0 ? Number(intcode[Number(intcode[pointer+1])]) : Number(intcode[pointer+1]);
    const value_2 = mode_2 === 0 ? Number(intcode[Number(intcode[pointer+2])]) : Number(intcode[pointer+2]);

    if ([1,2].find(o => o === opcode)) {
        if (opcode === 1) intcode[Number(intcode[pointer+3])] = (value_1 + value_2).toString();
        if (opcode === 2) intcode[Number(intcode[pointer+3])] = (value_1 * value_2).toString();
        pointer += 4;
    }
    if (opcode === 3) {
        intcode[Number(intcode[pointer+1])] = input;
        pointer += 2;
    }
    if (opcode === 4) {
        console.log(mode_1 === 1 ? Number(intcode[pointer + 1]) : Number(intcode[Number(intcode[pointer+1])]));
        pointer += 2;
    }
    if (opcode === 99) break;
}

console.log('done');
