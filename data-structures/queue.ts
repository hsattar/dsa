interface IQueue {
    quantity: number
    maxSize: number
    front: number
    back: number
    storage: any
    getQuantity: () => number
    enQueue: (item: any) => void
    deQueue: () => any
    isEmpty: () => boolean
    isFull: () => boolean
    peek: () => any
}

export function createQueue (maxSize: number) {
    let quantity = 0
    
    const myQueue: IQueue = {
        quantity:  quantity,
        maxSize:  maxSize,
        front:  0,
        back:  0,
        storage:  {},
        enQueue:  addToQueue,
        deQueue:  removeFromQueue,
        getQuantity:  getQuantity,
        isEmpty:  checkIfEmpty,
        isFull:  checkIfFull,
        peek:  checkFirstItem
    }

    return myQueue
}

function addToQueue (item: any) {
    if (this.quantity < this.maxSize) {
        this.quantity++
        this.storage = { ...this.storage, [this.quantity]: item }
        this.back = this.quantity
        this.front = 1
    }
}

function removeFromQueue () {
    if (this.quantity > 0) {
        this.quantity--
        delete this.storage[this.front]
        this.front++
        if (this.quantity === 0) {
            this.front = 0
            this.back = 0
        }
    }
}

function getQuantity () {
    return this.quantity
}

function checkIfEmpty () {
    return this.quantity === 0
}

function checkIfFull () {
    return this.quantity === this.maxSize
}

function checkFirstItem () {
    return this.storage[this.front]
}