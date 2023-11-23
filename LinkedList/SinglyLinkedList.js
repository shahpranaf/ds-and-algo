// Define a class Node to represent a node in the linked list
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
  }

  insert(data) {
    const newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
  }

  insertAfter(prev_node, data) {
    if (prev_node === null) {
      console.log("The given previous node must be in LinkedList.");
      return;
    }
    let newNode = new Node(data);
    newNode.next = prev_node.next;
    prev_node = newNode;
  }

  delete(key) {
    let temp = this.head;
    let prev = null;
    while (temp !== null) {
      if (temp.data === key) {
        if (prev === null) {
          this.head = temp.next;
        } else {
          prev.next = temp.next;
        }
        break;
      }
      prev = temp;
      temp = temp.next;
    }

    // let temp = this.head;
    // let prev = null;
    // if (temp !== null && temp.data === key) {
    //   this.head = temp.next;
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

let list = new SinglyLinkedList();

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
