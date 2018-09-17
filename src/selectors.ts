import { pipe } from 'rxjs';
import { map, filter, distinctUntilChanged } from 'rxjs/operators';
import { BST, BSTNode } from './models';
import * as utils from './utils';

export enum TraverseOrder {
  inorder = '_traverseOrdered',
  preorder = '_traversePreOrder',
  postorder = '_traversePostOrder'
}

export const traverse = (order: TraverseOrder) =>
  pipe(
    map((state: BST) => state._root),
    map(node => {
      const payload: BSTNode[] = [];
      utils[order](node, v => {
        payload.push(v);
      });
      return payload;
    }),
    filter(v => !!v),
    distinctUntilChanged()
  );

export const findInTree = value =>
  pipe(
    map((state: BST) => state._root),
    map(node => utils._searchRecursively(value, node)),
    filter(v => !!v),
    distinctUntilChanged()
  );

export const findMax = pipe(
  map((state: BST) => state._root),
  map(node => utils._findMax(node)),
  filter(v => !!v),
  distinctUntilChanged()
);

export const findMin = pipe(
  map((state: BST) => state._root),
  map(node => utils._findMin(node)),
  filter(v => !!v),
  distinctUntilChanged()
);

export const getHeight = pipe(
  map((state: BST) => state._root),
  map(node => utils._getHeight(node)),
  filter(v => !!v),
  distinctUntilChanged()
);

export const getDiameter = pipe(
  map((state: BST) => state._root),
  map(node => utils._getDiameter(node)),
  filter(v => !!v),
  distinctUntilChanged()
);
