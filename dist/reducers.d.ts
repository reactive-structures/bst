import { BST } from './models';
import { BstActions } from './actions';
export declare const insert: (currentState: BST, a: any) => BST;
export declare const remove: (currentState: BST, a: any) => BST;
export declare const reducerMap: Map<BstActions, (currentState: BST, a: any) => BST>;
