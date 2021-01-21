// In the classic problem of the Towers of Hanoi, you have 3 towers and N disks of different sizes which can slide onto any tower.  The puzzle starts with disks sorted in ascending order of size from top to bottom.  You have the following constraints: 1) Only one disk can be moved at a time 2) A disk is slid off the top of one tower onto another tower 3) a disk cannot be placed on top of a smaller disk.  Write a program to move the disks from the first tower to the last using stacks.

class StackNode {
    constructor(val){
        this.value = val;
        this.next = null;
    }
}

class Stack {
    constructor(){
        this.top = null;
    }
    AddToStack(num){
        let newnode = new StackNode(num)
        newnode.next = this.top;
        this.top = newnode;
        return this.top;
    }
    RemoveFromStack(){
        let removal = this.top;
        this.top = this.top.next;
        return removal;
    }
}

class Towers{
    constructor(size){
        this.left = new Stack();
        this.center = new Stack();
        this.right = new Stack();
        this.size = size;
        for(let i = size;i>0;i--){
            this.left.AddToStack(i)
        }
    }
    printCurrentStatus(){
        console.log("Left:")
        let runner = this.left.top
        while(runner){
            console.log(runner.value)
            runner = runner.next
        }
        console.log("Center:")
        runner = this.center.top
        while(runner){
            console.log(runner.value)
            runner = runner.next
        }
        console.log("Right:")
        runner = this.right.top
        while(runner){
            console.log(runner.value)
            runner = runner.next
        }
    }
    move(start,end){
        switch(start){
            case 'l':
                start = this.left
                break
            case 'r':
                start = this.right
                break
            case 'c':
                start = this.center
        }
        switch(end){
            case 'l':
                end = this.left
                break
            case 'r':
                end = this.right
                break
            case 'c':
                end = this.center
        }
        if(end.top==null || start.top.value < end.top.value){
            end.AddToStack(start.RemoveFromStack().value)
        }
        
    }
    solve(){
        dest = 'r'
        buffer = 'c'
        current = 'l'
        if(this.left.top < this.size){
            if(this.size % 2 == 0){
                this.move('l','c')
                this.move('l','r')
                this.move('c','r');
            }
        }
        let temp = new Towers(this.size - 1)
        temp.solve()
        else{

        }
        
        if(this.size % 2 == 1){

        }
    }
}

function solveTowers(towers){

}

let hanoi = new Towers(4)
hanoi.solve()
hanoi.printCurrentStatus();
