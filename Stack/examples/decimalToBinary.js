const decimalToBinary = (num) => {

    let stack = [];

    while(num > 0) {
        stack.push(num % 2);
        num = Math.floor(num / 2);
    }

    return stack.reverse().join("");
}

/**
 * Complexity Analysis
Time Complexity
Converting decimal to binary: The algorithm repeatedly divides the input number by 2 to get the binary digits. 
The number of times the division occurs is proportional to the number of bits in the binary representation of the number. 
For a number num, the number of iterations is O(log₂(num)), because the number of binary digits required to represent num is log₂(num).

Stack operations: Each division operation results in a binary digit being pushed onto the stack, which takes constant time, O(1). 
Then, we pop each binary digit from the stack to append it to the result string, which also takes O(log₂(num)).

Therefore, the total time complexity is O(log₂(num)).

Overall time complexity: O(log₂(num)).

Space Complexity
Stack space: The stack stores each binary digit. The number of binary digits (bits) required to represent a number num is log₂(num), 
so the stack will require O(log₂(num)) space.

StringBuilder: The StringBuilder is used to construct the binary representation, which will contain the same number of bits as the stack, 
i.e., O(log₂(num)).

Overall space complexity: O(log₂(num)).

*/

const {
    runTest,
    testSummary,
    resetTests
  } = require('../../testRunner'); // Optional: use only if you have it
  
  resetTests();
  
  runTest("Decimal 0 should return ''", () => {
    if (decimalToBinary(0) !== "") throw new Error("Expected ''");
  });
  
  runTest("Decimal 1 should return '1'", () => {
    if (decimalToBinary(1) !== "1") throw new Error("Expected '1'");
  });
  
  runTest("Decimal 2 should return '10'", () => {
    if (decimalToBinary(2) !== "10") throw new Error("Expected '10'");
  });
  
  runTest("Decimal 5 should return '101'", () => {
    if (decimalToBinary(5) !== "101") throw new Error("Expected '101'");
  });
  
  runTest("Decimal 10 should return '1010'", () => {
    if (decimalToBinary(10) !== "1010") throw new Error("Expected '1010'");
  });
  
  runTest("Decimal 255 should return '11111111'", () => {
    if (decimalToBinary(255) !== "11111111") throw new Error("Expected '11111111'");
  });
  
  testSummary();
  