class MyStack {
    constructor() {
        this.stack = [];
    }

    isEmpty() { // O(1)
        return this.stack.length === 0;
    }

    push(data) { // O(1)
        this.stack.push(data);
    }

    pop() { // O(1)
        if (this.isEmpty()) {
            throw new Error("Stack is empty");
        }
        return this.stack.pop();
    }

    peek() { // O(1)
        if (this.isEmpty()) {
            throw new Error("Stack is empty");
        }
        return this.stack[this.stack.length - 1];
    }
}

const Stack = new MyStack();


Stack.push("http://www.google.com")
Stack.push("http://www.ds.com")
Stack.push("http://www.algo.com")
console.log(Stack.peek())

Stack.push("http://www.yahoo.com")
console.log(Stack.peek())

console.log(Stack.pop())
console.log(Stack.peek())