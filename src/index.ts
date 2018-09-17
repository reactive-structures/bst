import { Store } from '@reactive-redux/store';
import { BST, BSTNode } from './models';
import { reducerMap } from './reducers';
import { Insert, Remove } from './actions';
import {
  traverse,
  findInTree,
  findMax,
  findMin,
  TraverseOrderEnum,
  getHeight,
  getDiameter
} from './selectors';

export { TraverseOrderEnum } from './selectors';

export class ReactiveBST extends Store<BST> {
  public max$ = this.state$.pipe(findMax);
  public min$ = this.state$.pipe(findMin);
  public height$ = this.state$.pipe(getHeight);
  public diameter$ = this.state$.pipe(getDiameter);

  constructor(private rootValue: number = 0) {
    super({ _root: new BSTNode(rootValue) }, reducerMap);
  }

  insert(value: number) {
    this.dispatch(new Insert({ value }));
  }

  delete(value: number) {
    this.dispatch(new Remove({ value }));
  }

  traverse$(order: TraverseOrderEnum = TraverseOrderEnum.inorder) {
    return this.state$.pipe(traverse(order));
  }

  find$(value: number) {
    return this.state$.pipe(findInTree(value));
  }
}
