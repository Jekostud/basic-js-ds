const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {

    array = []; //create array with name "array"

    push(element) {
        this.array = this.array.concat(element) //array = array plus (concat) element
    }

    pop() {
        if (this.array.length == 0) return undefined //check array, if array is empty than return undefined
        let lastElem = this.array[this.array.length - 1] //capture top element 
        this.array = this.array.slice(0, this.array.length - 1) // delete top element
        return lastElem //return top element
    }

    peek() {
        if (this.array.length == 0) return undefined // check array for elements
        return this.array[this.array.length - 1] // return top element
    }
}

module.exports = {
    Stack
};