// Binary Search Trees

// In a doubly linked list, each node has a value, plus pointers to two peers (prev and next). Similarly, in a binary tree each node has a value, plus pointers to two children, left and right. Just as with linked lists, these pointer attributes often reference another node, but can be null. Linked lists and binary trees always start with a single node; in a linked list we call it the head, in a binary tree we call it the root. The BST structures the data in a tree rather than a flat linear sequence.

// A binary tree node can have a left child and/or a right child; each child might have left and/or right children of its own. An entire section of a family might descend from one sibling as opposed to another, similarly there are related subsets of a binary tree. These are (no surprise) called subtrees. We refer to all nodes stemming from the root node’s left pointer as the root’s left subtree, for example. By their basic definition, neither generic binary trees nor generic linked lists impose any specific order on where values must be located in them. There is a type of binary tree that adds structure, though.

// The binary search tree adds a requirement that for every node, all nodes in its left subtree must have smaller values. Similarly, its right subtree must contain only values that are greater than or equal to its value. This constraint holds for every node in the subtree, not just the direct children.

// BST nodes without children are considered leaf nodes. Depending on its values, no node is required to have two children. Even in a tree containing many values, the root node might have a left or right pointer that is null (e.g. if the root contains the smallest or largest value in the tree, respectively).

// The Binary Search Tree is an example of an Ordered data structure, because the values are stored in a way that allows us easily to get from one value to the next-largest value or next-smallest value.
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
    }

    // AddVal and get MinVal
    AddLeaf(val) {

        let newNode = new BTNode(val)
        if(!this.root){
            this.root = newNode;
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
                    return this;
                }
            }
            else if (val < runner.val) {
                if(runner.left){
                    runner = runner.left
                }
                else{
                    runner.left = newNode;
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

console.log(maple.MinVal())
maple.Search(12)
maple.Search(22)
maple.printUtil(maple.root,0)