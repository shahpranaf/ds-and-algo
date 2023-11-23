class Queue {
    constructor(size) {
        this.size = size;
        this.queue = new Array(size);
        this.front = this.rear = -1;
    }

    enqueue(data) {
        if ((this.rear + 1) % this.size === this.front) {
            console.log("Queue is Full\n");
        } else {
            this.rear = (this.rear + 1) % this.size;
            this.queue[this.rear] = data;
        }
    }

    dequeue() {
        if (this.front === this.rear) {
            console.log("Queue is Empty\n");
        } else {
            this.front = (this.front + 1) % this.size;
        }
    }

    display() {
        if (this.front === this.rear) {
            console.log("No elements in the Queue");
        } else {
            let output = "Elements in the Queue are: ";
            for (let i = this.front; i <= this.rear; i++) {
                output += this.queue[i] + " ";
            }
            console.log(output);
        }
    }
}


const Qu = new Queue(10);


Qu.enqueue("A");
Qu.enqueue("B");
Qu.enqueue("C");
Qu.display();

Qu.dequeue();
Qu.display();
