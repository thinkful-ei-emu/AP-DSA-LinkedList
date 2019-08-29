class _Node {
    constructor(value, next) {
        this.value = value;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insertFirst(item) {
        this.head = new _Node(item, this.head);
    }

    insertLast(item) {
        if (this.head === null) {
            this.insertFirst(item);
        }
        else {
            let tempNode = this.head;
            while (tempNode.next !== null) {
                tempNode = tempNode.next;
            }
            tempNode.next = new _Node(item, null);
        }
    }

    find(item) { 
        // Start at the head
        let currNode = this.head;
        // If the list is empty
        if (!this.head) {
            return null;
        }
        // Check for the item 
        while (currNode.value !== item) {
            /* Return null if it's the end of the list 
               and the item is not on the list */
            if (currNode.next === null) {
                return null;
            }
            else {
                // Otherwise, keep looking 
                currNode = currNode.next;
            }
        }
        // Found it
        return currNode;
    }

    remove(item){ 
        // If the list is empty
        if (!this.head) {
            return null;
        }
        // If the node to be removed is head, make the next node head
        if (this.head.value === item) {
            this.head = this.head.next;
            return;
        }
        // Start at the head
        let currNode = this.head;
        // Keep track of previous
        let previousNode = this.head;

        while ((currNode !== null) && (currNode.value !== item)) {
            // Save the previous node 
            previousNode = currNode;
            currNode = currNode.next;
        }
        if (currNode === null) {
            console.log('Item not found');
            return;
        }
        previousNode.next = currNode.next;
    }

    insertBefore(item, index){

    }

    insertAfter(item, index){

    }

    insertAt(item, index){

        if (this.head === null) {
            this.insertFirst(item);
        }

        else{

            let tempNode = new _Node(item)

            let currNode = this.head;

            let previousNode;

            if(index === 0){
                tempNode.next = this.head

                this.head = tempNode
            }

            else{
                currNode = this.head;

                let i = 0

                while( i < index){

                    i++

                    previousNode = currNode

                    currNode = currNode.next

                }

                tempNode.next = currNode
                previousNode = tempNode
            }
        }

    }
}

function display(list){

    // console.log(list.head)

    let currNode = list.head

    let arr = []

    while (currNode){

        arr.push(currNode.value)

        currNode = currNode.next

    }

    console.log(arr)
}

function main(){

    let SLL = new LinkedList()

    SLL.insertFirst('Apollo')
    SLL.insertLast('Boomer')
    SLL.insertLast('Helo')
    SLL.insertLast('Husker')
    SLL.insertLast('Starbuck')
    SLL.insertLast('Tauhida')
    SLL.remove('squirrel')
    //SLL.insertBefore('Athena', 1)
    // SLL.insertAfter('Hotdog', 3)
    //SLL.insertAt('Kat', 3)
    SLL.remove("Tauhida")

    display(SLL)
}

main()
