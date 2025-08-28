/*
Given a stack, sort it using only stack operations (push and pop).

You can use an additional temporary stack, but you may not copy the elements into any other data structure (such as an array). 
The values in the stack are to be sorted in descending order, with the largest elements on top.
*/

const sortStack = (stack) => {
    let tempStack = [];

    while (stack.length) {
        let temp = stack.pop();

        while (tempStack.length && tempStack[tempStack.length - 1] > temp) {
            stack.push(tempStack.pop())
        }

        tempStack.push(temp);
    }

    return tempStack;
}


const {
    runTest,
    testSummary,
    resetTests
} = require('../../testRunner'); // Optional, if using the reusable runner

resetTests();

runTest("Sort [5, 1, 3, 2]", () => {
    const result = sortStack([5, 1, 3, 2]);
    const expected = [1, 2, 3, 5];
    if (JSON.stringify(result) !== JSON.stringify(expected)) {
        throw new Error(`Expected ${expected}, got ${result}`);
    }
});

runTest("Sort already sorted [1, 2, 3, 4]", () => {
    const result = sortStack([1, 2, 3, 4]);
    const expected = [1, 2, 3, 4];
    if (JSON.stringify(result) !== JSON.stringify(expected)) {
        throw new Error(`Expected ${expected}, got ${result}`);
    }
});

runTest("Sort descending [4, 3, 2, 1]", () => {
    const result = sortStack([4, 3, 2, 1]);
    const expected = [1, 2, 3, 4];
    if (JSON.stringify(result) !== JSON.stringify(expected)) {
        throw new Error(`Expected ${expected}, got ${result}`);
    }
});

runTest("Sort with duplicates [3, 1, 2, 3]", () => {
    const result = sortStack([3, 1, 2, 3]);
    const expected = [1, 2, 3, 3];
    if (JSON.stringify(result) !== JSON.stringify(expected)) {
        throw new Error(`Expected ${expected}, got ${result}`);
    }
});

runTest("Sort empty array []", () => {
    const result = sortStack([]);
    const expected = [];
    if (JSON.stringify(result) !== JSON.stringify(expected)) {
        throw new Error(`Expected empty array, got ${result}`);
    }
});

runTest("Sort single element [7]", () => {
    const result = sortStack([7]);
    const expected = [7];
    if (JSON.stringify(result) !== JSON.stringify(expected)) {
        throw new Error(`Expected ${expected}, got ${result}`);
    }
});

testSummary();


