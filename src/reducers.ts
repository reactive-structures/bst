import produce from 'immer';
import { BST } from './models';
import { Insert, BstActions } from './actions';
import { _insert, _remove, _searchRecursively } from './utils';

export const insert = produce<BST>((state: BST, action: Insert) => {
  state._root = _insert(action.payload.value, state._root);
});

export const remove = produce<BST>((state: BST, action: Insert) => {
  const remove = _remove.bind(state);
  remove(_searchRecursively(action.payload.value, state._root));
});

export const reducerMap = new Map([
  [BstActions.INSERT, insert],
  [BstActions.REMOVE, remove]
]);
