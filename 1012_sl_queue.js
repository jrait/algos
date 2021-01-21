//         SLQueue
// Create SLQueue method enqueue(val) to add the given value to end of our queue. Remember, SLQueue uses a singly linked list (not an array).

class SLqueue{
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0
    }
    push(val) {
        var newNode = new Node(val);
        if(this.head == null){
            this.head = newNode
            this.tail = newNode
            return this
        }
        else{
            this.tail.next = newNode
            this.tail  = newNode
        }
    }
    pop(){
        // Remove the first node in the list
        this.head = this.head.next
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
}