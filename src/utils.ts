import { BSTNode } from './models';

export enum ChildKeys {
  left = '_left',
  right = '_right'
}

export function _insert(value: number, current: BSTNode): BSTNode {
  const insertKey = current.value > value ? ChildKeys.left : ChildKeys.right;

  if (!current[insertKey]) {
    current[insertKey] = new BSTNode(value, undefined, undefined, current);
  } else {
    _insert(value, current[insertKey]);
  }

  return current;
}

export function _traverseOrdered(node, callback) {
  if (!node) return;
  _traverseOrdered(node._left, callback);
  callback(node);
  _traverseOrdered(node._right, callback);
}

export function _traversePreOrder(node, callback) {
  if (!node) return;
  callback(node);
  _traverseOrdered(node._left, callback);
  _traverseOrdered(node._right, callback);
}

export function _traversePostOrder(node, callback) {
  if (!node) return;
  _traverseOrdered(node._left, callback);
  _traverseOrdered(node._right, callback);
  callback(node.value);
}

export function _searchRecursively(_value, _node: BSTNode): BSTNode {
  return !_node || _node.value === _value
    ? _node
    : _value < _node.value
      ? _searchRecursively(_value, _node._left)
      : _searchRecursively(_value, _node._right);
}

export function _findMax(node, current?): BSTNode {
  current = current || { value: -Infinity };
  if (!node) {
    return current;
  }
  if (current.value < node.value) {
    current = node;
  }
  return _findMax(node._right, current);
}

export function _findMin(node, current?): BSTNode {
  current = current || { value: Infinity };
  if (!node) {
    return current;
  }
  if (current.value > node.value) {
    current = node;
  }
  return _findMin(node._left, current);
}

export function _replaceChild(parent, oldChild, newChild) {
  if (!parent) {
    this._root = newChild;
    if (this._root !== undefined) {
      this._root._parent = undefined;
    }
  } else {
    if (parent._left === oldChild) {
      parent._left = newChild;
    } else {
      parent._right = newChild;
    }
    if (newChild) {
      newChild._parent = parent;
    }
  }
}

export function _remove(node) {
  const replace = _replaceChild.bind(this);

  if (!node) {
    return false;
  }
  if (node._left && node._right) {
    const min = _findMin(node._right);
    const temp = node.value;
    node.value = min.value;
    min.value = temp;
    return _remove(min);
  } else {
    if (node._left) {
      replace(node._parent, node, node._left);
    } else if (node._right) {
      replace(node._parent, node, node._right);
    } else {
      replace(node._parent, node, undefined);
    }
    return true;
  }
}

export function _getHeight(node): number {
  if (!node) {
    return 0;
  }
  return 1 + Math.max(_getHeight(node._left), _getHeight(node._right));
}

export function _getDiameter(node): number {
  if (!node) {
    return 0;
  }
  const leftHeight = _getHeight(node._left);
  const rightHeight = _getHeight(node._right);
  const path = leftHeight + rightHeight + 1;
  return Math.max(path, _getDiameter(node._left), _getDiameter(node._right));
}
