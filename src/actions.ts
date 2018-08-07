import { Action } from '@zentropy/store';

export enum BstActions {
  INSERT = '[BST] Insert item',
  REMOVE = '[BST] Remove item'
}

export class Insert implements Action {
  readonly type = BstActions.INSERT;

  constructor(public payload: { value: number }) {}
}

export class Remove implements Action {
  readonly type = BstActions.REMOVE;

  constructor(public payload: { value: number }) {}
}
