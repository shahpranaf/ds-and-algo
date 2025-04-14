class CircularQueue {
    // Constructor to initialize the queue
    constructor(size) {
        this.size = size;
        this.queue = new Array(size).fill(null);
        this.front = this.rear = -1;
    }

    // Function to insert an element in the queue
    enqueue(element) {
        if ((this.front === 0 && this.rear === this.size - 1) ||
            (this.rear === (this.front - 1) % (this.size - 1))) {
            console.log("Queue is Full");
        } else if (this.front === -1) { // Insert First Element
            this.front = this.rear = 0;
            this.queue[this.rear] = element;
        } else if (this.rear === this.size - 1 && this.front !== 0) {
            this.rear = 0;
            this.queue[this.rear] = element;
        } else {
            this.rear = (this.rear + 1) % this.size;
            this.queue[this.rear] = element;
        }
    }

    // Function to delete an element from the queue
    dequeue() {
        if (this.front === -1) {
            console.log("Queue is Empty");
            return null;
        }

        let data = this.queue[this.front];
        this.queue[this.front] = null;
        if (this.front === this.rear) {
            this.front = this.rear = -1;
        } else {
            this.front = (this.front + 1) % this.size;
        }
        return data;
    }

    // Function to display the elements of the queue
    displayQueue() {
        if (this.front === -1) {
            console.log("Queue is Empty");
            return;
        }
        console.log("Elements in the Circular Queue are: ");
        if (this.rear >= this.front) {
            for (let i = this.front; i <= this.rear; i++) {
                console.log(this.queue[i]);
            }
        } else {
            for (let i = this.front; i < this.size; i++) {
                console.log(this.queue[i]);
            }
            for (let i = 0; i <= this.rear; i++) {
                console.log(this.queue[i]);
            }
        }
    }
}

// Main method to test the CircularQueue class
let q = new CircularQueue(5);

// Inserting elements in the queue
q.enqueue(14);
q.enqueue(22);
q.enqueue(13);
q.enqueue(-6);

// Display elements present in the queue
q.displayQueue();

// Deleting elements from the queue
console.log("Deleted value = " + q.dequeue());
console.log("Deleted value = " + q.dequeue());

q.displayQueue();

q.enqueue(9);
q.enqueue(20);
q.enqueue(5);

q.displayQueue();

q.enqueue(20);
