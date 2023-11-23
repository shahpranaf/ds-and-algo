class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

const head = new Node("Node1");
head.next = new Node("Node2");
head.next.next = new Node("Node3");

let current = head;
while (current) {
    console.log(current.data);
    current = current.next;
}