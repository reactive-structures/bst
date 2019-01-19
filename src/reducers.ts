import produce from 'immer';
import { IBST } from './models';
import { Insert, BstActions } from './actions';
import { _insert, _remove, _searchRecursively } from './utils';

export const insert = produce<IBST>((state: IBST, action: Insert) => {
  state._root = _insert(action.payload.value, state._root);
  return { _root: { ...state._root } };
});

export const remove = produce<IBST>((state: IBST, action: Insert) => {
  const remove = _remove.bind(state);
  remove(_searchRecursively(action.payload.value, state._root));
  return { _root: { ...state._root } };
});

export const reducerMap = {
  [BstActions.INSERT]: insert,
  [BstActions.REMOVE]: remove
};

// new Map([
//   [BstActions.INSERT, insert],
//   [BstActions.REMOVE, remove]
// ]);
