class QueueUsingArray {
  constructor(size) {
    this.size = size;
    this.queue = [];
  }
  enqueue(data) {
    if (this.queue.length === this.size) {
      console.log("Queue is full");
      return;
    }
    this.queue.push(data);
  }

  dequeue() {
    if (!this.queue.length) {
      console.log("Queue is empty\n");
      return;
    }
    this.queue.shift();
  }

  peek() {
    return this.queue[0];
  }
}

const queue = new QueueUsingArray(5);

queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
console.log(queue.peek())
queue.dequeue();
console.log(queue.peek())