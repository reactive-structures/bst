import { Store } from '@reactive-redux/store';
import { BST, BSTNode } from './models';
import { TraverseOrder } from './selectors';
export { TraverseOrder } from './selectors';
export declare class ReactiveBST extends Store<BST> {
    private rootValue;
    max$: import("rxjs/internal/Observable").Observable<BSTNode>;
    min$: import("rxjs/internal/Observable").Observable<BSTNode>;
    height$: import("rxjs/internal/Observable").Observable<number>;
    diameter$: import("rxjs/internal/Observable").Observable<number>;
    constructor(rootValue?: number);
    insert(value: number): void;
    delete(value: number): void;
    traverse$(order?: TraverseOrder): import("rxjs/internal/Observable").Observable<BSTNode[]>;
    find$(value: number): import("rxjs/internal/Observable").Observable<BSTNode>;
}
