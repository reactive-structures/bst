import { Action } from '@zentropy/store';
export declare enum BstActions {
    INSERT = "[BST] Insert item",
    REMOVE = "[BST] Remove item"
}
export declare class Insert implements Action {
    payload: {
        value: number;
    };
    readonly type: BstActions;
    constructor(payload: {
        value: number;
    });
}
export declare class Remove implements Action {
    payload: {
        value: number;
    };
    readonly type: BstActions;
    constructor(payload: {
        value: number;
    });
}
