"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var models_1 = require("./models");
var ChildKeys;
(function (ChildKeys) {
    ChildKeys["left"] = "_left";
    ChildKeys["right"] = "_right";
})(ChildKeys = exports.ChildKeys || (exports.ChildKeys = {}));
function _insert(value, current) {
    var insertKey = current.value > value ? ChildKeys.left : ChildKeys.right;
    if (!current[insertKey]) {
        current[insertKey] = new models_1.BSTNode(value, undefined, undefined, current);
    }
    else {
        _insert(value, current[insertKey]);
    }
    return current;
}
exports._insert = _insert;
function _traverseOrdered(node, callback) {
    if (!node)
        return;
    _traverseOrdered(node._left, callback);
    callback(node);
    _traverseOrdered(node._right, callback);
}
exports._traverseOrdered = _traverseOrdered;
function _traversePreOrder(node, callback) {
    if (!node)
        return;
    callback(node);
    _traverseOrdered(node._left, callback);
    _traverseOrdered(node._right, callback);
}
exports._traversePreOrder = _traversePreOrder;
function _traversePostOrder(node, callback) {
    if (!node)
        return;
    _traverseOrdered(node._left, callback);
    _traverseOrdered(node._right, callback);
    callback(node.value);
}
exports._traversePostOrder = _traversePostOrder;
function _searchRecursively(_value, _node) {
    return !_node || _node.value === _value
        ? _node
        : _value < _node.value
            ? _searchRecursively(_value, _node._left)
            : _searchRecursively(_value, _node._right);
}
exports._searchRecursively = _searchRecursively;
function _findMax(node, current) {
    current = current || { value: -Infinity };
    if (!node) {
        return current;
    }
    if (current.value < node.value) {
        current = node;
    }
    return _findMax(node._right, current);
}
exports._findMax = _findMax;
function _findMin(node, current) {
    current = current || { value: Infinity };
    if (!node) {
        return current;
    }
    if (current.value > node.value) {
        current = node;
    }
    return _findMin(node._left, current);
}
exports._findMin = _findMin;
function _replaceChild(parent, oldChild, newChild) {
    if (!parent) {
        this._root = newChild;
        if (this._root !== undefined) {
            this._root._parent = undefined;
        }
    }
    else {
        if (parent._left === oldChild) {
            parent._left = newChild;
        }
        else {
            parent._right = newChild;
        }
        if (newChild) {
            newChild._parent = parent;
        }
    }
}
exports._replaceChild = _replaceChild;
function _remove(node) {
    var replace = _replaceChild.bind(this);
    if (!node) {
        return false;
    }
    if (node._left && node._right) {
        var min = _findMin(node._right);
        var temp = node.value;
        node.value = min.value;
        min.value = temp;
        return _remove(min);
    }
    else {
        if (node._left) {
            replace(node._parent, node, node._left);
        }
        else if (node._right) {
            replace(node._parent, node, node._right);
        }
        else {
            replace(node._parent, node, undefined);
        }
        return true;
    }
}
exports._remove = _remove;
function _getHeight(node) {
    if (!node) {
        return 0;
    }
    return 1 + Math.max(_getHeight(node._left), _getHeight(node._right));
}
exports._getHeight = _getHeight;
function _getDiameter(node) {
    if (!node) {
        return 0;
    }
    var leftHeight = _getHeight(node._left);
    var rightHeight = _getHeight(node._right);
    var path = leftHeight + rightHeight + 1;
    return Math.max(path, _getDiameter(node._left), _getDiameter(node._right));
}
exports._getDiameter = _getDiameter;
