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

    insertBefore(item, target){

        if (this.head === null) {
            this.insertFirst(item);
        }

        else{
            let currNode = this.head

            let previous;

            while((currNode !== null) && (currNode.value !== target)){
                previous = currNode
                currNode = currNode.next
            }

            if(currNode === null){
                console.log(`The target does not exist`)
                return;
            }

            let tempNode = previous
            
            tempNode.next = new _Node(item, previous.next)
        }

    }

    insertAfter(item, target){

        if (this.head === null) {
            this.insertFirst(item);
          }
        
        else{

            let currNode = this.head;

            let previous;

            while((currNode !== null) && (currNode.value !== target)){
                previous = currNode
                currNode = currNode.next
            }

            if(currNode === null){
                console.log(`The target does not exist`)
                return;
            }

            let tempNode = currNode
            tempNode.next = new _Node(item, currNode.next)

        }
        
    }

    insertAt(item, index){
        if(index === 0){
            this.insertFirst(item);
        }

        else{
            let currNode = this.head

            for(let i = 0; i < index - 1; i++){

                if(currNode !== null){
                    currNode = currNode.next
                }

                else{
                    console.log('Index does not exist')
                }
            }

            currNode.next = new _Node(item, currNode.next)
        }
    }
}

function display(list){

    //console.log(list.head)

    let currNode = list.head

    let arr = []

    while (currNode){

        arr.push(currNode.value)

        currNode = currNode.next

    }

    console.log(arr)
}

function size(list){

    if(list.head === null){
        console.log('This list is currently empty');;
    }

    else{
        let currNode = list.head

        let size = 0

        while(currNode){
            currNode = currNode.next
            size++
        }

        console.log(size);
    }
}

function isEmpty(list){

    if(list.head === null){
        console.log(`Empty: Yes`);;
    }

    else{
        console.log(`Empty: No`)
    }
}

function findLast(list){

    if(list.head === null){
        console.log('This list is currently empty');;
    }

    else{
        
        let currNode = list.head

        let lastNode;

        while(currNode){

            if(currNode.next === null){
                lastNode = currNode
            }

            currNode = currNode.next
        }

        console.log(`Last Node: ${lastNode.value}`)
    }


}

function findPrevious(list, item){

    if(list.head === null){
        console.log('This list is currently empty');;
    }

    else{

        let currNode = list.head

        let previousNode;

        while(currNode.value !== item){
            

            previousNode = currNode
            currNode = currNode.next

            // console.log(previousNode)
            // console.log(currNode)
        }

        console.log(`Previous Node before ${item} is ${previousNode.value}`)

    }
}

function main(){

    let SLL = new LinkedList()

    SLL.insertFirst('Apollo')
    SLL.insertLast('Boomer')
    SLL.insertLast('Helo')
    SLL.insertLast('Husker')
    SLL.insertLast('Starbuck')
    SLL.insertLast('Tauhida')
    //SLL.remove('squirrel')
    SLL.insertBefore('Athena', 'Boomer')
    SLL.insertAfter('Hotdog', 'Helo')
    SLL.insertAt('Kat', 3)
    //SLL.remove("Tauhida")
    SLL.insertLast('Starbuck')

    display(SLL)

    //size(SLL)

    //isEmpty(SLL)

    //findLast(SLL)

    //findPrevious(SLL, 'Husker')

    //console.log(reverse(SLL))

    //console.log(thirdFrom(SLL))

    //console.log(middle(SLL))

    console.log(cycle(SLL))
}

//main()


//4. It appears to be removing duplicates from the linked list. It's time complexity is likely O(n^2) due to the nested while loop


//5. 

function reverse(list){
    let currNode = list.head;

    let previous;

    let tempNode

    while(currNode){

        tempNode = currNode.next

        currNode.next = previous

        previous = currNode;

        currNode = tempNode;
    }

    return previous
}

//6. 

function thirdFrom(list){

    let currNode = list.head

    while(currNode !== null){
        
        if(currNode.next.next.next === null){
            return currNode.value
        }

        else{

            currNode = currNode.next

        }
    }

}

//7.

function middle(list){

    let currNode = list.head

    let tempNode = list.head

    while(currNode !== null){

        if(currNode.next === null){
            return tempNode.value
        }

        tempNode = tempNode.next

        currNode = currNode.next.next

    }

    console.log(tempNode.value)

}

//8.

function makeCycleList(){

    let CycleList = new LinkedList()

    CycleList.insertFirst('a')
    CycleList.insertLast('b')
    CycleList.insertLast('a')
    CycleList.insertLast('c')
    CycleList.insertLast('d')
    CycleList.insertLast('e')

    display(CycleList)

    console.log(checkCycle(CycleList))

}

makeCycleList()

function checkCycle(list){

    let currNode = list.head

    let tempNode = list.head

    while(currNode !== null){

        if(currNode.next === null){
            return false
        }

        tempNode = tempNode.next

        currNode = currNode.next.next

        // console.log(currNode, tempNode)

        if(currNode.value === tempNode.value){
            return true;
        }

    }
}

