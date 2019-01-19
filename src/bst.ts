import { Store, select } from '@reactive-redux/store';
import { IBST, BSTNode } from './models';
import { reducerMap } from './reducers';
import { Insert, Remove } from './actions';
import {
  traverse,
  findInTree,
  findMax,
  findMin,
  TraverseOrder,
  getHeight,
  getDiameter
} from './selectors';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

type ActionsUnion = Insert | Remove;

export class BinarySearchTree extends Store<IBST, ActionsUnion> {
  public state$: Observable<IBST>;
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

  remove(value: number) {
    this.dispatch(new Remove({ value }));
  }

  traverse$(order: TraverseOrder = TraverseOrder.IN) {
    return this.state$.pipe(traverse(order));
  }

  find$(value: number) {
    return this.state$.pipe(findInTree(value));
  }
}
