class Node {
    constructor(data) {
        this.data = data;  // Store the data in this node
        this.next = null;  // Initialize the next node as null
    }
}

class Stack {
    constructor() {
        this.top = null;  // Initialize the top of the stack as null
    }

    pop() {
        if (this.top === null) {
            throw new Error("Stack is empty");  // Throw an error if the stack is empty
        }
        const item = this.top.data;  // Store the top item's data
        this.top = this.top.next;  // Update the top to be the next node
        return item;  // Return the popped item
    }

    push(item) {
        const node = new Node(item);  // Create a new node with the provided data
        node.next = this.top;  // Set the next of this new node to be the current top
        this.top = node;  // Update the top to be the new node
    }

    peek() {
        if (this.top === null) {
            throw new Error("Stack is empty");  // Throw an error if the stack is empty
        }
        return this.top.data;  // Return the top item's data
    }

    isEmpty() {
        return this.top === null;  // Return true if the stack is empty, false otherwise
    }
}

// 🧪 Tests
const {
    runTest,
    runTestShouldThrow,
    testSummary,
    resetTests
  } = require('../testRunner');

const s = new Stack(2);

runTest("isEmpty should be true on new stack", () => {
  if (!s.isEmpty()) throw new Error("Expected empty stack");
});

runTest("push and peek", () => {
  s.push(10);
  if (s.peek() !== 10) throw new Error("Expected 10 on top");
});

runTest("push second item", () => {
  s.push(20);
  if (s.peek() !== 20) throw new Error("Expected 20 on top");
});

runTest("pop should return 20", () => {
  const val = s.pop();
  if (val !== 20) throw new Error("Expected 20");
});

runTestShouldThrow("pop on empty stack", () => {
  s.pop(); // first pop is fine
  s.pop(); // second pop should throw
});

runTestShouldThrow("push beyond capacity", () => {
  const s2 = new MyStack(1);
  s2.push(1);
  s2.push(2);
});

// ✅ Summary
testSummary();