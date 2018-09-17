export interface IBST {
    _root: BSTNode;
}
export declare class BSTNode {
    value: number;
    _left?: BSTNode;
    _right?: BSTNode;
    _parent?: BSTNode;
    constructor(value: number, _left?: BSTNode, _right?: BSTNode, _parent?: BSTNode);
}
