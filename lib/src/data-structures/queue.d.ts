export declare function createQueue(maxSize: number): IQueue;
interface IQueue {
    quantity: number;
    maxSize: number;
    front: number;
    back: number;
    storage: any;
    getQuantity: () => number;
    enQueue: (item: any) => void;
    deQueue: () => any;
    isEmpty: () => boolean;
    isFull: () => boolean;
    peek: () => any;
}
export {};
//# sourceMappingURL=queue.d.ts.map