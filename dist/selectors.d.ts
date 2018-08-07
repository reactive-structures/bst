import { BST, BSTNode } from './models';
export declare enum TraverseOrderEnum {
    inorder = "_traverseOrdered",
    preorder = "_traversePreOrder",
    postorder = "_traversePostOrder"
}
export declare const traverse: (order: TraverseOrderEnum) => import("rxjs/internal/types").UnaryFunction<import("rxjs/internal/Observable").Observable<BST>, import("rxjs/internal/Observable").Observable<BSTNode[]>>;
export declare const findInTree: (value: any) => import("rxjs/internal/types").UnaryFunction<import("rxjs/internal/Observable").Observable<BST>, import("rxjs/internal/Observable").Observable<BSTNode>>;
export declare const findMax: import("rxjs/internal/types").UnaryFunction<import("rxjs/internal/Observable").Observable<BST>, import("rxjs/internal/Observable").Observable<BSTNode>>;
export declare const findMin: import("rxjs/internal/types").UnaryFunction<import("rxjs/internal/Observable").Observable<BST>, import("rxjs/internal/Observable").Observable<BSTNode>>;
export declare const getHeight: import("rxjs/internal/types").UnaryFunction<import("rxjs/internal/Observable").Observable<BST>, import("rxjs/internal/Observable").Observable<number>>;
export declare const getDiameter: import("rxjs/internal/types").UnaryFunction<import("rxjs/internal/Observable").Observable<BST>, import("rxjs/internal/Observable").Observable<number>>;
