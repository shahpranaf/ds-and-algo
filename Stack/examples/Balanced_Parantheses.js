class Solution {
    isValid(s) {
        if(s.length % 2 !== 0) return false;
        
        // Creating a stack to keep track of opening parentheses
        let stack = [];
        
        // Iterating through each character in the input string
        for (let c of s) {
            // If the character is an opening parenthesis, push it onto the stack
            if (c === '(' || c === '{' || c === '[') {
                stack.push(c);
            } else {
                // If stack is empty and we have a closing parenthesis, the string is not balanced
                if (!stack.length) return false;
                
                // Pop the top character from the stack
                let top = stack.pop();
                
                // If the character is a closing parenthesis, check whether 
                // it corresponds to the most recent opening parenthesis
                if (c === ')' && top !== '(') return false;
                if (c === '}' && top !== '{') return false;
                if (c === ']' && top !== '[') return false;
            }
        }
        // If the stack is empty, all opening parentheses had a corresponding closing match
        return !stack.length;
    }
}

// Test cases to verify the solution
let sol = new Solution();
let test1 = "{[()]}"; // Should be valid
let test2 = "{[}]";   // Should be invalid
let test3 = "(]";     // Should be invalid

console.log("Test 1:", sol.isValid(test1));
console.log("Test 2:", sol.isValid(test2));
console.log("Test 3:", sol.isValid(test3));


/*
The time complexity of this algorithm is O(n), where n is the length of the string. 
This is because we're processing each character in the string exactly once.

The space complexity is also O(n) in the worst-case scenario 
when all the characters in the string are opening parentheses, so we push each character onto the Stack. 
In the average case, however, the space complexity would be less than O(n).
*/