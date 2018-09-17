import { BSTNode } from './models';
export declare enum ChildKeys {
    left = "_left",
    right = "_right"
}
export declare function _insert(value: number, current: BSTNode): BSTNode;
export declare function _traverseOrdered(node: BSTNode, callback: any): BSTNode;
export declare function _traversePreOrder(node: BSTNode, callback: any): BSTNode;
export declare function _traversePostOrder(node: BSTNode, callback: any): BSTNode;
export declare function _searchRecursively(value: number, node: BSTNode): BSTNode;
export declare function _findMax(node: BSTNode, current?: BSTNode): BSTNode;
export declare function _findMin(node: BSTNode, current?: any): BSTNode;
export declare function _replaceChild(parent: BSTNode, oldChild: BSTNode, newChild: BSTNode): void;
export declare function _remove(node: BSTNode): boolean;
export declare function _getHeight(node: BSTNode): number;
export declare function _getDiameter(node: BSTNode): number;
