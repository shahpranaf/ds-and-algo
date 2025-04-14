class MyStack {
    constructor(capacity) {
        this.capacity = capacity;
        this.stack = new Array(capacity);
        this.top = -1;
    }

    push(value) {
        if(this.top === this.capacity-1) {
            throw new Error("Stack Overflow! Cannot push ${value}")
            return;
        }
        this.stack[++this.top] = value;
    }

    pop() {
        if(this.isEmpty()) {
            throw new Error("Stack Underflow! Stack is empty");
            return;
        }

        this.top = this.top - 1;
        return this.stack.pop();

        // simplify : return this.stack[this.top--];
    }

    peek() {
        if(this.isEmpty()) {
            throw new Error("Stack Underflow! Stack is empty");
            return;
        }

        return this.stack[this.top]
    }

    isEmpty() {
        return this.top === -1;
    }
}



// 🧪 Tests
const {
    runTest,
    runTestShouldThrow,
    testSummary,
    resetTests
  } = require('../testRunner');

const s = new MyStack(2);

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