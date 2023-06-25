export function createStack (maxSize = 5) {
    let quantityCount = 0

    const myStack: IStack = {
        quantity: quantityCount,
        storage: {},
        maxSize: maxSize,
        push: addItem,
        pop: removeItem,
        isEmpty: checkIfStorageEmpty,
        isFull: checkIfStorageFull,
        peek: checkLastItem,
    }

    return myStack
}
  
  function addItem (item: any) {
    if (this.quantity < this.maxSize) {
      this.quantity++
      this.storage = { ...this.storage, [this.quantity]: item }
    }
}
  
  function removeItem () {
    if (this.quantity > 0) {
      const lastItem = this.storage[this.quantity]
      delete this.storage[this.quantity]
      this.quantity--
      return lastItem
    }
}
  
  function checkIfStorageEmpty () {
    return this.quantity === 0
}
  
  function checkIfStorageFull () {
    return this.quantity === this.maxSize
}
  
  function checkLastItem () {
    if (this.quantity > 0) {
      return this.storage[this.quantity]
      
    }
}

interface IStack {
    quantity: number
    storage: {}
    maxSize: number
    push: (item: any) => void
    pop: () => any
    isEmpty: () => boolean
    isFull: () => boolean
    peek: () => any
}