import { Store } from '@reactive-redux/store';
import { IBST, BSTNode } from './models';
import { Insert, Remove } from './actions';
import { TraverseOrder } from './selectors';
import { Observable } from 'rxjs';
declare type ActionsUnion = Insert | Remove;
export declare class BinarySearchTree extends Store<IBST, ActionsUnion> {
    private rootValue;
    state$: Observable<IBST>;
    max$: Observable<BSTNode>;
    min$: Observable<BSTNode>;
    height$: Observable<number>;
    diameter$: Observable<number>;
    constructor(rootValue?: number);
    insert(value: number): void;
    remove(value: number): void;
    traverse$(order?: TraverseOrder): Observable<BSTNode[]>;
    find$(value: number): Observable<BSTNode>;
}
export {};
