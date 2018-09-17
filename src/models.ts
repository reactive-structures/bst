export interface IBST {
  _root: BSTNode;
}

export class BSTNode {
  constructor(
    public value: number,
    public _left?: BSTNode,
    public _right?: BSTNode,
    public _parent?: BSTNode
  ) {}
}
