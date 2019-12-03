const fs = require('fs');

const input = fs.readFileSync('input.txt', 'utf-8');
const temp = input.trim().split('\n');
const wire1 = temp[0].trim().split(',');
const wire2 = temp[1].trim().split(',');

const runWire = (wire) => {
    const output = [];
    const pos = {x: 0, y: 0};

    for (let w = 0; w < wire.length; w++) {
        const dir = wire[w].substr(0, 1);
        const dist = wire[w].substr(1);

        for (let s = 1; s <= dist; s++) {
            if (dir === 'U') pos.y += -1;
            if (dir === 'R') pos.x += 1;
            if (dir === 'D') pos.y += 1;
            if (dir === 'L') pos.x += -1;
            output.push(`${pos.x},${pos.y}`);
        }
    }

    return output;
};


const outputWire1 = runWire(wire1);
const outputWire2 = runWire(wire2);

const results = outputWire1
    .filter(pos1 => pos1 === outputWire2.find(pos2 => pos2 === pos1))
    .map(pos => {
        const split = pos.split(',');
        return Math.abs(parseInt(split[0], 10)) + Math.abs(parseInt(split[1], 10));
    });

console.log(results.sort((a, b) => a - b)[0]);