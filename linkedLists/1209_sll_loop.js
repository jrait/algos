// Singly Linked List : Reverse

// Reverse the node sequence. Given an SList object, the .head property should point to the previously-last node, and the rest of the nodes should follow similarly from back to front.

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SLL {
    constructor() {
        this.head = null;
    }

    addToFront(val) {
        var newNode = new Node(val);
        if (this.head == null) {
            this.head = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
    }

    addToBack(val) {
        var newNode = new Node(val);
        var runner = this.head
        while (runner.next != null) {
            runner = runner.next;
        }
        runner.next = newNode;
    }

    contains(val) {
        var runner = this.head;
        while (runner != null) {
            if (runner.val == val) {
                return runner;
            }
            runner = runner.next;
        }
        return false;
    }

    removeFront() {

        // Remove the first node in the list
        this.head = this.head.next
    }

    removeBack() {

        // Remove the last node in the list
        var runner = this.head;
        while (runner.next.next != null) {
            runner = runner.next;
        }
        runner.next = null
    }

    length() {

        // Count and return the amount of nodes in the list
        var count = 0;
        var runner = this.head;

        while (runner != null) {
            count += 1
            runner = runner.next;
        }

        return count;
    }

    printList() {
        var output = "";
        var runner = this.head;

        while (runner != null) {
            output += runner.val + ", ";
            runner = runner.next;
        }

        console.log(output);
        return output;
    }
    //Min to Front
    minToFront() {
        var runner = this.head;
        var min = this.head
        var prevnode = this.head
        var minprev = null
        while (runner != null) {
            if (runner.val < min.val) {
                min = runner;
                minprev = prevnode
            }
            prevnode = runner
            runner = runner.next
        }
        minprev.next = min.next
        min.next = this.head;
        this.head = min;
    }


    //Max to Back
    //Not complete, does not work if Max is the head
    maxToBack() {
        var runner = this.head;
        var max = this.head
        var prevnode = this.head
        var maxprev = null
        while (runner != null) {
            if (runner.val > max.val) {
                max = runner;
                maxprev = prevnode
            }
            prevnode = runner
            runner = runner.next
        }
        prevnode.next = max
        maxprev.next = max.next
        max.next = null;
    }

    // //prepend value

    prependVal(new_val, before_val) {
        var runner = this.head;
        var new_node = new Node(new_val);
        var before_val_exists = false;
        if (this.head.val == before_val) {
            new_node.next = this.head;
            this.head = new_node;
            return null
        }

        while (runner.next != null) {

            if (runner.next.val == before_val) {
                new_node.next = runner.next
                runner.next = new_node
                before_val_exists = true
                return null
            }

            runner = runner.next;
        }
        if (before_val_exists == false) {
            var runner = this.head
            while (runner.next != null) {
                runner = runner.next;
            }
            runner.next = new_node;
        }
    }

    appendVal(new_val, after_val) {
        var runner = this.head;
        var new_node = new Node(new_val)
        while (runner != null) {
            if (runner.val == after_val) {
                new_node.next = runner.next
                runner.next = new_node
                return null
            }
            runner = runner.next;
        }
        runner.next = new_node
    }
    // Remove Negatives
    // - Find and remove any negative value nodes in the list

    removeNegatives() {
        var runner = this.head

        while (runner.next != null) {
            if (this.head.val < 0) {
                this.head = runner.next
            }
            else if (runner.next.val < 0) {
                runner.next = runner.next.next
                if (runner.next == null) {
                    break
                }
            }
            runner = runner.next
        }

    }


    // Second to Last Value
    // - Find and return the second-to-last value in the list
    // - What will you do if the list isn't long enough? What if it only has 1 item? What if it has 2?

    secondLast() {
        var length = this.length()
        if (length < 2) {
            return this.head.val
        }
        var runner = this.head;
        while (runner.next.next != null) {
            runner = runner.next;
        }
        return runner.val
    }

    // BONUS CHALLENGE: Partition
    // - Given a value, find that value in the list
    // - Once found, take every value in the list that's LOWER than that value and move those nodes EARLIER (so, on the LEFT side of the found node)
    // - Take all the values that are greater and move those nodes later (aka to the RIGHT of the found node)
    // - Try making it work for a list with 3 nodes only to start (look for the middle value)

    partition(check_value) {
        var pivot = this.contains(check_value)
        var runner = this.head
        var lower = new SLL()
        var higher = new SLL()
        while (runner != null) {
            if (runner.val > check_value) {
                higher.addToFront(runner.val)
            }
            if (runner.val < check_value) {
                lower.addToFront(runner.val)
            }
            runner = runner.next
        }
        this.head = pivot
        pivot.next = null
        runner = lower.head
        while (runner != null) {
            this.addToFront(runner.val)
            runner = runner.next
        }
        runner = higher.head
        while (runner != null) {
            this.addToBack(runner.val)
            runner = runner.next
        }
    }

    //Sean's solution:
    partition2(someval) {
        var runner = this.head;
        var templist = new SLL();
        while (runner != null) {
            if (runner.val < someval) {
                templist.addToBack(runner.val);
            }
            runner = runner.next;
        }
        runner = this.head;
        while (runner != null) {
            if (runner.val == someval) {
                templist.addToBack(runner.val);
            }
            runner = runner.next;
        }
        runner = this.head;
        while (runner != null) {
            if (runner.val > someval) {
                templist.addToBack(runner.val);
            }
            runner = runner.next;
        }
        this.head = templist.head;
    }
    reverse(){
        let runner = this.head;
        let next;
        let prev = null;
        while(runner){
            next = runner.next
            runner.next = prev;
            prev = runner;
            runner = next;
        }
        this.head = prev;
    }
//     SLL: Has Loop

// Benny Bob sends linked lists to Mr. Nibbles, but he doesn’t quite trust him. Is he trying to make his code spin infinitely? Given a linked list, determine whether it has a loop, and return a boolean accordingly.

    hasLoop(){
        let runner = this.head;
        let nodes = []
        while(runner){
            for(let node of nodes){
                if(runner.next===node){
                    return true
                }
            }
            nodes.push(runner)
            runner = runner.next
        } 
        return false
    }
// SLL Break Loop

// Even better than finding where the loops start would be to just fix them. You will be given a potentially loopy list; determine whether there is a loop, and if so, break it. Retain all nodes, in original order.
    breakLoop(){
        let runner = this.head;
        let nodes = []
        while(runner){
            for(let node of nodes){
                if(runner.next===node){
                    runner.next = null;
                    return true
                }
            }
            nodes.push(runner)
            runner = runner.next
        }
        return false
    }
}

let n1 = new Node(3)
let n2 = new Node(4)
let n3 = new Node(5)
let n4 = new Node(6)

n1.next = n2;
n2.next = n3;
n3.next = n4;
n4.next = n2;

mylist = new SLL()
mylist.head = n1

console.log(mylist.hasLoop());
console.log(mylist.breakLoop());
mylist.printList();
// mylist.addToFront(5)
// mylist.addToBack(-20)
// mylist.addToBack(16)
// mylist.addToBack(3)
// mylist.addToBack(2)
// mylist.addToBack(7)
// mylist.printList()

// mylist.reverse();
// mylist.printList();
