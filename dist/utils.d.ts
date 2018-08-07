import { BSTNode } from './models';
export declare enum ChildKeys {
    left = "_left",
    right = "_right"
}
export declare function _insert(value: number, current: BSTNode): BSTNode;
export declare function _traverseOrdered(node: any, callback: any): void;
export declare function _traversePreOrder(node: any, callback: any): void;
export declare function _traversePostOrder(node: any, callback: any): void;
export declare function _searchRecursively(_value: any, _node: BSTNode): BSTNode;
export declare function _findMax(node: any, current?: any): BSTNode;
export declare function _findMin(node: any, current?: any): BSTNode;
export declare function _replaceChild(parent: any, oldChild: any, newChild: any): void;
export declare function _remove(node: any): any;
export declare function _getHeight(node: any): number;
export declare function _getDiameter(node: any): number;
