const reverseString = (str) => {
    let stack = [...str];

    let reverseStr = "";
    while(stack.length) {
        reverseStr += stack.pop();
    }

    return reverseStr;
}

const {
    runTest,
    testSummary,
    resetTests
  } = require('../../testRunner'); // if you're using the reusable testRunner
  
  resetTests();
  
  runTest("Reverse of 'hello' should be 'olleh'", () => {
    const result = reverseString("hello");
    if (result !== "olleh") throw new Error(`Expected 'olleh' but got '${result}'`);
  });
  
  runTest("Reverse of empty string should be ''", () => {
    const result = reverseString("");
    if (result !== "") throw new Error(`Expected '' but got '${result}'`);
  });
  
  runTest("Reverse of 'a' should be 'a'", () => {
    const result = reverseString("a");
    if (result !== "a") throw new Error(`Expected 'a' but got '${result}'`);
  });
  
  runTest("Reverse of '12345' should be '54321'", () => {
    const result = reverseString("12345");
    if (result !== "54321") throw new Error(`Expected '54321' but got '${result}'`);
  });
  
  runTest("Reverse of 'racecar' should be 'racecar'", () => {
    const result = reverseString("racecar");
    if (result !== "racecar") throw new Error(`Expected 'racecar' but got '${result}'`);
  });
  
  testSummary();
  
