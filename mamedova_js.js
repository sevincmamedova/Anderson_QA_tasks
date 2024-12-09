// Import prompt-sync for user input
const prompt = require("prompt-sync")();

// TASK 1: HELLO SEVISH
function task1() {
    console.log("\n--- Task 1: Number, Name, and Array Check ---");

    // Input: number
    const numberInput = prompt("Enter a number: ");
    const number = parseFloat(numberInput);

    if (isNaN(number)) {
        console.log("Error: Please enter a valid number.");
    } else if (number > 7) {
        console.log("Hello");
    } else {
        console.log("Number is not greater than 7.");
    }

    // Input: name
    const name = prompt("Enter a name: ").trim();
    if (name.toLowerCase() === "john") {
        console.log("Hello, John");
    } else {
        console.log("There is no such name.");
    }

    // Input: numeric array
    const arrayInput = prompt(
        "Enter an array of numbers separated by commas: "
    ).trim();

    if (!arrayInput.match(/^(\d+,)*\d+$/)) {
        console.log("Error: Please enter a valid comma-separated numeric array.");
        return;
    }

    const array = arrayInput.split(",").map(Number);
    const multiplesOfThree = array.filter((num) => num % 3 === 0);
    console.log("Array elements that are multiples of 3: " + multiplesOfThree.join(", "));
}

// TASK 2: BRACKET VALIDATION
function isValidBracketSequence(sequence) {
    const stack = [];
    const fix = [];
    const sequenceArray = sequence.split("");

    for (let i = 0; i < sequenceArray.length; i++) {
        const char = sequenceArray[i];

        if (char === "(" || char === "[") {
            stack.push({ char, index: i + 1 });
        } else if (char === ")" || char === "]") {
            const last = stack.pop();
            if (!last || (char === ")" && last.char !== "(") || (char === "]" && last.char !== "[")) {
                fix.push(`Remove '${char}' at position ${i + 1}`);
                if (last) {
                    stack.push(last);
                }
            }
        }
    }

    while (stack.length > 0) {
        const last = stack.pop();
        fix.push(`Add matching '${last.char === "(" ? ")" : "]"}' for position ${last.index}`);
    }

    return fix.length
        ? "No: " + fix.join(", ") + " Check again!"
        : "Yes: Sequence is correct!";
}

function task2() {
    console.log("\n--- Task 2: Bracket Sequence Validator ---");

    const sequence = prompt("Enter a bracket sequence: ").trim();
    if (!sequence.match(/^[()\[\]]*$/)) {
        console.log("Error: Please enter only brackets '()', '[]'.");
        return;
    }

    console.log(isValidBracketSequence(sequence));
}

// MENU FUNCTION FOR INTERACTIVITY
function menu() {
    while (true) {
        console.log("\n--- Main Menu ---");
        console.log("1. Task 1: Number, Name, and Array Check");
        console.log("2. Task 2: Bracket Sequence Validator");
        console.log("3. Exit");

        const choice = prompt("Choose a task to run (1-3): ");

        switch (choice) {
            case "1":
                task1();
                break;
            case "2":
                task2();
                break;
            case "3":
                console.log("Exiting program. Goodbye!");
                return;
            default:
                console.log("Invalid option. Please select 1, 2, or 3.");
        }
    }
}

// RUN MENU
menu();
