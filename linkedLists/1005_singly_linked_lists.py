class SLL:
    def __init__(self):
        self.head = None
    #add to Front

    def addToFront(self,val):
        # change the head of the list to a new node
        new_node = Node(val)
        new_node.next = self.head
        self.head = new_node

    def addToBack(self,val):
        # find the node that points to none
        # make that last node point to our new node
        new_node = Node(val)
        runner = self.head
        while runner.next != None:
            runner = runner.next
        runner.next = new_node

    def contains(self,val):
        runner = self.head
        while runner.next != None:
            runner = runner.next
            if runner.val == val:
                return True
        return False

    def printList(self):
        output = ""
        runner = self.head
        while(start.next != None):
            output += str(start.val) + ', '
            start = start.next
        output += str(start.val)
        print(output)


class Node:
    def __init__(self,val):
        self.val = val
        self.next = None


mylist = SLL()
node1 = Node('daisy')
mylist.head = node1
node2 = Node('daffodil')
node1.next = node2
node3 = Node('tulip')
node2.next = node3

mylist.addToBack('rose')
mylist.addToBack('peanut')
mylist.addToBack('orchid')



def printlist(alist):
    output = ""
    start = alist.head
    # output += start.val + ', '
    while(start.next != None):
        output += str(start.val) + ', '
        start = start.next
    output += str(start.val)
    print(output)

printlist(mylist)

#add to back


#contains

