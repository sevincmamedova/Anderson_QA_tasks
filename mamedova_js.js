// prompt is used for interactive input and console.log is used for output
const prompt = require("prompt-sync")();

//task 1
const number = +prompt("Enter the number:");
if (number > 7) {
  console.log("Hello");
}

const name = prompt("Enter name:");
if (name === "John") {
  console.log("Hello, John");
} else {
  console.log("There is no such name");
}

const arrayInput = prompt("Enter an array of numbers separated by commans:");
const array = arrayInput.split(",").filter((num) => +num % 3 === 0);
console.log("Array elements that are multiples of 3: " + array.join(", "));

//task 2
function isValidBracketSequence(sequence) {
    const stack = [];
    const fix = [];

    for (let char of sequence) {
        if (char === '(' || char === '[') {
            stack.push(char);
        } else if (char === ')' || char === ']') {
            const last = stack.pop();
            if ((char === ')' && last !== '(') || (char === ']' && last !== '[')) {
                fix.push(`Remove '${char}' at position ${sequence.indexOf(char) + 1}`);
                if (last) {
                    stack.push(last);
                }
            }
        }
    }

    while (stack.length > 0) {
        const last = stack.pop();
        fix.push(`Add matching '${last === '(' ? ')' : ']'}'`);
    }

    return fix.length ? 'No: ' + fix.join(', ') + ' Check again!' : 'Yes: Sequence is correct!';
}

const sequence = prompt("Bracket sequence:");
console.log(isValidBracketSequence(sequence));
