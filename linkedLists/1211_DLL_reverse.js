// Doubly Linked List

// There is certainly no reason why a linked list node must refer to only one other node. For the best flexibility when traversing a list, we might want to be connected in both directions: forward and backward. Whereas singly linked lists feature nodes that only know about their forward neighbor (unable to look backward), doubly linked lists are more like lines of preschoolers holding hands as they walk down the street together, on a field trip to the fire station. This expands our ability to easily iterate back and forth through the DList, forming a much better parallel with our idx array iterator.

class DLNode {
    constructor(val) {
        this.value = val;
        this.next = null;
        this.previous = null;
    }
}

class DLL {
    constructor() {
        this.head = null;
        this.tail = null;
        this.count = 0;
    }
    AddtoFront(val) {
        if(this.head==null){
            this.head = new DLNode(val);
            this.tail = this.head;
        }
        else{
            let temp = new DLNode(val);
            temp.next = this.head;
            this.head.previous = temp;
            this.head = temp;
        }
    }
    AddtoBack(val){
        if(this.tail==null){
            this.head = new DLNode(val);
            this.tail = this.head;
        }
        else{
            let temp = new DLNode(val);
            this.tail.next = temp;
            temp.previous = this.tail;
            this.tail = temp;
        }
    }
    PrintForward(){
        let runner = this.head;
        while(runner){
            console.log(runner.value);
            runner = runner.next;
        }
    }
    PrintBackward(){
        let runner = this.tail;
        while(runner){
            console.log(runner.value)
            runner = runner.previous;
        }
    }
    Reverse(){
        let runner = this.head;
        while(runner){
            [runner.next,runner.previous] = [runner.previous,runner.next]
            runner = runner.previous;
        }
        [this.head,this.tail] = [this.tail,this.head]
    }
    prependVal(val,newVal){
        let runnner = this.head;
        while(runner){
            if(runner.val == val){
                let temp = new Node(newVal);
                temp.previous = runner.previous;
                temp.next = runner;
                runner.previous.next = temp;
                runner.previous = temp;
            }
        }
    }
}

let mylist = new DLL();
mylist.AddtoBack(4);

mylist.AddtoBack(6);
mylist.AddtoBack(8);
mylist.AddtoBack(10);

mylist.PrintForward();
mylist.Reverse();
console.log("Reversed")
mylist.PrintForward();