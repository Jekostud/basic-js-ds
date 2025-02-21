const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
    constructor() {
        this.head = null; // the link to the first node in Queue
        this.length = 0; // the number of nodes in Queue

    }
    getUnderlyingList() {
        let actual = this.head;
        return actual;
    }

    enqueue(value) {
        let node = new ListNode(value); // creates the node using class Node
        let actual = this.head;

        //if current not true (our list is empty))
        if (!actual) { // if the first Node exitsts
            this.head = node; // now the created node is the last node
            this.length++; // increases the length of Queue by 1
        }

        //if list is not empty
        else {
            //if there is current.next
            while (actual.next) {
                actual = actual.next;
            }
            actual.next = node;
            this.length++;
        }
    }

    dequeue() {
        let actual = this.head; // saves the link to the head which we need to remove
        this.head = actual.next; // moves the head link to the second Node in the Queue
        this.length--; // decreaments the length of our Queue

        return actual.value;
    }
}

module.exports = {
    Queue
};