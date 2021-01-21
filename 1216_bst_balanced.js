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
    BetterHeight(node = this.root){
        if(node == null){
            return 0;
        }
        else{
            return Math.max(this.height(node.left),this.height(node.right)) + 1;
        }

}

    BetterIsBalanced(squirrel = this.root){
        if(squirrel == null){
            return true;
        }
        else{
            let differ = Math.abs(this.height(squirrel.left) - this.height(squirrel.right));
            if(differ > 1){
                return false;
            }
            else{
                return this.isBalanced(squirrel.left) && this.isBalanced(squirrel.right);
            }
        }
}
//     BST: IsBalanced

// Write isBalanced()method to indicate whether a BST is balanced. For this challenge, consider a tree balanced when all nodes are balanced. A BTNode is balanced if heights of its left subtree and right subtree differ by at most one.
    IsBalanced(){

        var lefttree = new BST();
        var righttree = new BST();

        if(this.root.left){
            lefttree.root = this.root.left;
            var left = lefttree.height();
        }
        else{
            left = 0;
        }
        if(this.root.right){
            righttree.root = this.root.right;
            var right = righttree.height();
        }
        else{
            right = 0;
        }
        if(left == 0 && right ==0){
            return true
        }
        if(left == right || left == right +1 || left == right -1){
            if(this.root.right){
                var rightcheck = righttree.IsBalanced();
            }
            else{
                rightcheck = true
            }
            if(this.root.left){
                var leftcheck = lefttree.IsBalanced();
            }
            else{
                leftcheck = true
            }

            return leftcheck && rightcheck
        }
        else{
            return false
        }
    }


    IsBalanced2(){
        let height = 1;
        let runner = this.root;
        if(runner.left == null && runner.right == null){
            return true;
        }
        if(runner.left && runner.right){
            var lefttree = new BST();
            lefttree.root = runner.left;
            var righttree = new BST();
            righttree.root = runner.right;
            return lefttree.IsBalanced() && righttree.IsBalanced()
        }
        else if(runner.left || runner.right){
            return false
        }
        return true
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

console.log(maple.IsBalanced())

let oak = new BST();
oak.AddLeaf(5)
oak.AddLeaf(8)
oak.AddLeaf(3)
oak.AddLeaf(6)
oak.AddLeaf(9)
// oak.AddLeaf(2)
// oak.AddLeaf(4)
console.log(oak.IsBalanced());