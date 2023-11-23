// Define a class Node to represent a node in the linked list
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
  }

  insert(data) {
    const newNode = new Node(data);
    newNode.next = this.head;
    if (this.head !== null) {
      this.head.prev = newNode;
    }
    this.head = newNode;
  }

  insertAfter(prev_node, data) {
    if (prev_node === null) {
      console.log("The given previous node must be in LinkedList.");
      return;
    }
    let newNode = new Node(data);
    newNode.next = prev_node.next;
    prev_node.next = newNode;
    newNode.prev = prev_node;
    if (newNode.next !== null) {
      prev_node.next.prev = newNode;
    }
  }

  delete(key) {
    let temp = this.head;

    while (temp !== null) {
      if (temp.data === key) {
        if (temp.prev !== null) {
          temp.prev.next = temp.next;
        } else {
          this.head = temp.next;
        }
        if (temp.next !== null) {
          temp.next.prev = temp.prev;
        }
      }
      temp = temp.next;
    }

    // let temp = this.head;
    // let prev = null;
    // if (temp !== null && temp.data === key) {
    //   this.head = temp.next;
    //   this.head.prev = null;
    //   return;
    // }

    // while (temp !== null && temp.data !== key) {
    //   prev = temp;
    //   temp = temp.next;
    // }
    // if (temp === null) {
    //   return;
    // }

    // prev.next = temp.next;
    // if (temp.next !== null) {
    //   temp.next.prev = prev;
    // }
  }

  search(key) {
    let current = this.head;
    while (current !== null) {
      if (current.data === key) {
        return true;
      }
      current = current.next;
    }
    return false;
  }

  printList() {
    const arr = [];
    let currentNode = this.head;

    while (currentNode !== null) {
      arr.push(currentNode);
      currentNode = currentNode.next;
    }
    console.log(arr);
    return arr;
  }
}

let list = new DoublyLinkedList();

list.insert(1);
list.insert(2);
list.insert(3);
list.printList();
// Search for a key in the list and log the result
console.log("Search 2:", list.search(2)); // true

// Delete a node with a specific key from the list
list.delete(1);

// Search again for the key in the list and log the result
console.log("Search 2:", list.search(2)); // false
list.printList();
