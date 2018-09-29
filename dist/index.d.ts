import { Store } from '@reactive-redux/store';
import { IBST, BSTNode } from './models';
import { TraverseOrder } from './selectors';
import { Observable } from 'rxjs';
export { TraverseOrder } from './selectors';
export declare class BinarySearchTree extends Store<IBST> {
    private rootValue;
    state$: Observable<IBST>;
    max$: Observable<BSTNode>;
    min$: Observable<BSTNode>;
    height$: Observable<number>;
    diameter$: Observable<number>;
    constructor(rootValue?: number);
    insert(value: number): void;
    delete(value: number): void;
    traverse$(order?: TraverseOrder): Observable<BSTNode[]>;
    find$(value: number): Observable<BSTNode>;
}
