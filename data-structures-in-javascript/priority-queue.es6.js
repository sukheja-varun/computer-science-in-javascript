class Node {
    constructor(data, priority) {
        this.data = data;
        this.priority = priority
    }
}

/**
 * Priority Queue Class here implements the data structure 'Priority Queue' using javascript array.
 * Element with priority of smaller number are lined up 1st i.e. they are given higher priority.
 * If for 2 elements they have same priority then in that case we serve it as FCFS i.e. new element is inserted
 * at back of the already inserted element with same priority.
 */
class PriorityQueue {
    constructor() {
        this.queue = [];
        this.size = 0;
    }

    /**
     * @description It creates a new Node with (data and priority) and inserts it into queue based on priority.
     * Priority with lowest number is at higher priority.
     * @param {*} data Element which is to be inserted.
     * @param {number} priority Priority of the element it be inserted.
     */
    insert(data, priority) {
        // finding the position where to insert the data
        let index = 0;
        for (; index < this.size; index++) {
            if (priority < this.queue[index].priority) {
                break;
            }
        }
        // creating new node and inserts data
        let newNode = new Node(data, priority);
        this.queue.splice(index, 0, newNode);
        this.size++;
    }


    /**
     * @description It prints the queue
     */
    print() {
        for (let node of this.queue) {
            console.log('data:', node.data, 'priority:', node.priority);
        }
    }
}





let pQueue = new PriorityQueue();
pQueue.insert(12, 5);
pQueue.insert(55, 2);
pQueue.insert(23, 5);
pQueue.insert(134, 8);
pQueue.print();