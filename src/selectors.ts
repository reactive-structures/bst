import { pipe } from 'rxjs';
import { map, filter, distinctUntilChanged } from 'rxjs/operators';
import { IBST, BSTNode } from './models';
import * as utils from './utils';

export enum TraverseOrder {
  IN = '_traverseOrdered',
  PRE = '_traversePreOrder',
  POST = '_traversePostOrder'
}

export const traverse = (order: TraverseOrder) =>
  pipe(
    map((state: IBST) => state._root),
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
    map((state: IBST) => state._root),
    map(node => utils._searchRecursively(value, node)),
    filter(v => !!v),
    distinctUntilChanged()
  );

export const findMax = pipe(
  map((state: IBST) => state._root),
  map(node => utils._findMax(node)),
  filter(v => !!v),
  distinctUntilChanged()
);

export const findMin = pipe(
  map((state: IBST) => state._root),
  map(node => utils._findMin(node)),
  filter(v => !!v),
  distinctUntilChanged()
);

export const getHeight = pipe(
  map((state: IBST) => state._root),
  map(node => utils._getHeight(node)),
  filter(v => !!v),
  distinctUntilChanged()
);

export const getDiameter = pipe(
  map((state: IBST) => state._root),
  map(node => utils._getDiameter(node)),
  filter(v => !!v),
  distinctUntilChanged()
);
