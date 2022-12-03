// https://adventofcode.com/2022/day/1/input

const fs = require('fs');

const inventory = []
let elf = 0
fs.readFileSync('./day-1-input.txt', 'utf8').split(/\n/)
    .reduce((supplies, snack) => {
    if (snack) {
        return supplies + Number(snack)
    } else {
        inventory[elf] = supplies
        elf++
        return supplies = 0
    }
    }, 0)
    .sort()

// console.log(`The elf with the most supplies has ${Math.max(...inventory)}`);
console.log(inventory);



