class BTNode {
    constructor(value) {
        this.val = value;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor() {
        this.root = null;
        this.spaces = 5;
        this.sizeattr = 0;
        this.heightattr = 0;
    }

    // AddVal and get MinVal
    AddLeaf(val) {

        let newNode = new BTNode(val)
        if(!this.root){
            this.root = newNode;
            this.sizeattr = 1;
            this.heightattr = 1;
            return this;
        }
        let runner = this.root;
        while (runner) {
            if (val > runner.val) {
                if(runner.right){
                    runner = runner.right
                }
                else{
                    runner.right = newNode;
                    this.sizeattr += 1;
                    return this;
                }
            }
            else if (val < runner.val) {
                if(runner.left){
                    runner = runner.left
                }
                else{
                    runner.left = newNode;
                    this.sizeattr +=1;
                    return this
                }
            }
            else{
                return "Already in tree";
            }
        }
    }
    MinVal(){
        if(!this.root){
            return null
        }
        let runner = this.root;
        while(runner.left){
            runner = runner.left;
        }
        return runner;
    }
    Search(Val){
        let route = `|${this.root.val}| -> `
        let runner = this.root;
        while (runner.val != Val && runner != null) {
            if (Val > runner.val) {
                    runner = runner.right
                }
            else if (Val < runner.val) {
                    runner = runner.left
                    
                }
            route += `|${runner.val}| ->`
        }
        console.log(route)
        return route;
    }
    printUtil(node, space){
        if (node == null){
            return;
        }
        space += this.spaces;

        this.printUtil(node.right, space);

        let j = [];
        for(var i = this.spaces; i < space; i++){
            j.push(" ");
        }
        
        console.log((j.join('')) + `${node.val} \n`);
        this.printUtil(node.left,space);
    }
    //BST: Size
    // Write a size() method that returns the number of nodes (values) contained in the tree.
    size(){
        let size = 1;
        let runner = this.root;
        if(runner.left == null && runner.right == null){
            return size;
        }
        if(runner.left && runner.right){
            var lefttree = new BST();
            lefttree.root = runner.left;
            var righttree = new BST();
            righttree.root = runner.right;
            return size + lefttree.size() + righttree.size();
        }
        else if(runner.left){
            var lefttree = new BST();
            lefttree.root = runner.left;
            return size + lefttree.size();
        }
        else if(runner.right){
            var righttree = new BST();
            righttree.root = runner.right;
            return size + righttree.size();
        }
    }

    // BST : Height
    // Build a height() method on the BST object that returns the total height of the tree – the longest sequence of nodes from root node to leaf node.
    height(){
        let height = 1;
        let runner = this.root;
        if(runner.left == null && runner.right == null){
            return height;
        }
        if(runner.left && runner.right){
            var lefttree = new BST();
            lefttree.root = runner.left;
            var righttree = new BST();
            righttree.root = runner.right;
            return Math.max(height + lefttree.height(),height + righttree.height());
        }
        else if(runner.left){
            var lefttree = new BST();
            lefttree.root = runner.left;
            return height + lefttree.height();
        }
        else if(runner.right){
            var righttree = new BST();
            righttree.root = runner.right;
            return height + righttree.height();
        }
    }
}

let maple = new BST();
maple.AddLeaf(7);
maple.AddLeaf(3);
maple.AddLeaf(2);
maple.AddLeaf(16)
maple.AddLeaf(8)
maple.AddLeaf(1);
maple.AddLeaf(22);
maple.AddLeaf(10);
maple.AddLeaf(14);
maple.AddLeaf(12);

console.log(maple.size())
console.log(maple.sizeattr)
console.log(maple.height())
maple.Search(12)
maple.Search(22)

let oak = new BST();
oak.AddLeaf(5)
oak.AddLeaf(8)
oak.AddLeaf(9)
console.log(oak.size())
console.log(oak.height());