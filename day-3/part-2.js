const fs = require('fs');

const input = fs.readFileSync('input.txt', 'utf-8');
const temp = input.trim().split('\n');
const wire1 = temp[0].trim().split(',');
const wire2 = temp[1].trim().split(',');

const runWire = (wire) => {
    const output = [];
    const pos = {x: 0, y: 0};
    let steps = 0;

    for (let w = 0; w < wire.length; w++) {
        const dir = wire[w].substr(0, 1);
        const dist = wire[w].substr(1);

        for (let s = 1; s <= dist; s++) {
            if (dir === 'U') pos.y += -1;
            if (dir === 'R') pos.x += 1;
            if (dir === 'D') pos.y += 1;
            if (dir === 'L') pos.x += -1;
            steps += 1;
            output.push({
                pos: `${pos.x},${pos.y}`,
                steps
            });
        }
    }

    return output;
};

const outputWire1 = runWire(wire1);
const outputWire2 = runWire(wire2);

const results = [];
for (let o1 = 0; o1 < outputWire1.length; o1++) {
    for (let o2 = 0; o2 < outputWire2.length; o2++) {
        if (outputWire1[o1].pos === outputWire2[o2].pos) results.push(outputWire1[o1].steps + outputWire2[o2].steps);
    }
}

console.log(results.sort((a, b) => a - b)[0]);