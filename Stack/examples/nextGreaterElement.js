const nextGreaterElement = (arr) => {
    let res = new Array(arr.length).fill(-1);
    let stack = [];

    for (let i = arr.length - 1; i >= 0; i--) {

        while (stack.length && stack[stack.length - 1] <= arr[i]) {
            stack.pop();
        }

        if (stack.length && stack[stack.length - 1] > arr[i]) {
            res[i] = stack[stack.length - 1]
        }

        stack.push(arr[i])
    }

    return res;

}
// Time Complexity: O(N)
// Space Complexity: O(N)


const {
    runTest,
    testSummary,
    resetTests
  } = require('../../testRunner'); // Optional: if you have it
  
  resetTests();
  
  runTest("[4, 5, 2, 10]", () => {
    const result = nextGreaterElement([4, 5, 2, 10]);
    const expected = [5, 10, 10, -1];
    if (JSON.stringify(result) !== JSON.stringify(expected)) {
      throw new Error(`Expected ${expected}, got ${result}`);
    }
  });
  
  runTest("[2, 1, 2, 4, 3]", () => {
    const result = nextGreaterElement([2, 1, 2, 4, 3]);
    const expected = [4, 2, 4, -1, -1];
    if (JSON.stringify(result) !== JSON.stringify(expected)) {
      throw new Error(`Expected ${expected}, got ${result}`);
    }
  });
  
  runTest("[13, 7, 6, 12]", () => {
    const result = nextGreaterElement([13, 7, 6, 12]);
    const expected = [-1, 12, 12, -1];
    if (JSON.stringify(result) !== JSON.stringify(expected)) {
      throw new Error(`Expected ${expected}, got ${result}`);
    }
  });
  
  runTest("[]", () => {
    const result = nextGreaterElement([]);
    const expected = [];
    if (JSON.stringify(result) !== JSON.stringify(expected)) {
      throw new Error(`Expected ${expected}, got ${result}`);
    }
  });
  
  runTest("[1]", () => {
    const result = nextGreaterElement([1]);
    const expected = [-1];
    if (JSON.stringify(result) !== JSON.stringify(expected)) {
      throw new Error(`Expected ${expected}, got ${result}`);
    }
  });
  
  testSummary();
  