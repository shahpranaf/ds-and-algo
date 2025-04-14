/* implement an array using an object, and it will have the methods 
 * get, push, pop, insert, and remove. We will also need to track the length of the array. 
 * Calling get, push, pop, and length should all take O(1) time, and insert/remove will take O(n) time.
 */
 
class DynamicArray {
    constructor() {
        this.length = 0;
        this.data = {};
    }

    get(index) {
        return this.data[index];
    }

    push(item) {
        this.data[this.length] = item;
        this.length++;

        return this.length;
    }

    pop() {
        if(this.length === 0) {
            return undefined;
        }

        const poppedItem = this.data[this.length - 1];
        delete this.data[this.length - 1];
        this.length--;

        return poppedItem;
    }

    insert(index, item) {
        if (index > this.length || index < 0) {
            return undefined;
        }

        this.length++;

        for (let i = this.length - 1; i > index; i--) {
            this.data[i] = this.data[i - 1];
        }

        this.data[index] = item;

        return this.data;
    }

    remove(index) {
        if (this.length === 0) {
            return undefined;
        }
        if (index > this.length - 1 || index < 0) {
            return undefined;
        }

        const removedItem = this.data[index];
        for(let i = index; i < this.length - 1; i++) {
            this.data[i] = this.data[i+1];
        }
        delete this.data[this.length - 1];
        this.length--;

        return removedItem;
    }
}

module.exports = DynamicArray;