// https://adventofcode.com/2022/day/1/input

const fs = require('fs');

const inventory = []
let elf = 0
const compareNumbers = (number1, number2) => number1 - number2;
fs.readFileSync('day-2/day-1-input.txt', 'utf8').split(/\n/)
    .reduce((supplies, snack) => {
    if (snack) {
        return supplies + Number(snack)
    } else {
        inventory[elf] = supplies
        elf++
        return supplies = 0
    }
    }, 0)
 

    const highest3CaloriesTotal = inventory.sort(compareNumbers).slice(-3).reduce(((supplies, snack) => supplies + snack))
console.log(`The elf with the most supplies has ${Math.max(...inventory)}`);
console.log(`The elves with the three most supplies is ${highest3CaloriesTotal}`);



