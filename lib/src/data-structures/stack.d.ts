export declare function createStack(maxSize?: number): IStack;
interface IStack {
    quantity: number;
    storage: {};
    maxSize: number;
    push: (item: any) => void;
    pop: () => any;
    isEmpty: () => boolean;
    isFull: () => boolean;
    peek: () => any;
}
export {};
//# sourceMappingURL=stack.d.ts.map