// Stacks
// Stacks and Queues are companion data structures. Both are sequential, meaning they manage data according to the order in which they were added. A Queue data structure operates by a principle of “First-In becomes First-Out” (FIFO); a Stack is quite the opposite (Last-In, First-Out or LIFO).

// Consider a pile of papers. With this stack of papers, we can only get a good look at the top of the pile. When we add another paper, that page becomes the only one visible. We can only add and remove papers from the top. We cannot add a page mid-stack (just as one should not cut into the middle of a queue at the ice cream store).

// Stack Implementation Based on Array
// Build essential methods push, pop, top, contains, isEmpty, size for ArrStack using an array. Make sure you designate the underlying array as private (declared var), not public (attached to this).



class ArrStack{
    constructor(){
        this.stack = []; //Creating a variable creates a private variable, rather than a global class function
        this.size = 0;
    }
    push(val){
        this.stack[this.size] = val
        this.size +=1
        // console.log(this.stack)
        return this
    }
    pop(){
        this.stack.length = this.size -1 
        this.size -= 1
        console.log(this.stack)
        return this
    }

}
function compareARRStacks(stack1,stack2){
    if (stack1.size != stack2.size){
        return false
    }
    for(var i = 0; i< stack1.stack.length; i++){
        console.log(stack1.stack[i])
        console.log(stack2.stack[i])
        if (stack1.stack[i] != stack2.stack[i]){
            return false
        }
    }
    return true
}

// new_list = new ArrStack()
// new_list.push(5)
// new_list.push(7)
// new_list.push(6)
// new_list.pop()

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}
class SLStack{
    constructor(val){
        this.head = null
        this.size = 0
    }
    push(val){
        var newNode = new Node(val)
        newNode.next = this.head
        this.head = newNode
    }
    pop(){
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

// Compare Stacks
// Given two Stack objects, create a standalone function to return whether they are equal. Stacks are equal only if they have equal elements in identical order. You can use an additional third Stack for storage; you will need it because you must return the given Stacks to their original condition upon exit.  

function compareSLStacks(stack1,stack2){
    if (stack1.size != stack2.size){
        return false
    }
    else{
        runner1 = stack1.head
        runner2 = stack2.head
        while (runner1 != null){
            if (runner1.val != runner2.val){
                return false
            }
            runner1 = runner1.next
            runner2 = runner2.next
        }
        return true
    }
}



stack1 = new ArrStack()
stack1.push(10)
stack1.push(18)
stack1.push(15)
stack1.push(13)

stack2 = new ArrStack()
stack2.push(10)
stack2.push(18)
stack2.push(15)
stack2.push(13)


console.log(compareARRStacks(stack1,stack2))