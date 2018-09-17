"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var utils = __importStar(require("./utils"));
var TraverseOrder;
(function (TraverseOrder) {
    TraverseOrder["IN"] = "_traverseOrdered";
    TraverseOrder["PRE"] = "_traversePreOrder";
    TraverseOrder["POST"] = "_traversePostOrder";
})(TraverseOrder = exports.TraverseOrder || (exports.TraverseOrder = {}));
exports.traverse = function (order) {
    return rxjs_1.pipe(operators_1.map(function (state) { return state._root; }), operators_1.map(function (node) {
        var payload = [];
        utils[order](node, function (v) {
            payload.push(v);
        });
        return payload;
    }), operators_1.filter(function (v) { return !!v; }), operators_1.distinctUntilChanged());
};
exports.findInTree = function (value) {
    return rxjs_1.pipe(operators_1.map(function (state) { return state._root; }), operators_1.map(function (node) { return utils._searchRecursively(value, node); }), operators_1.filter(function (v) { return !!v; }), operators_1.distinctUntilChanged());
};
exports.findMax = rxjs_1.pipe(operators_1.map(function (state) { return state._root; }), operators_1.map(function (node) { return utils._findMax(node); }), operators_1.filter(function (v) { return !!v; }), operators_1.distinctUntilChanged());
exports.findMin = rxjs_1.pipe(operators_1.map(function (state) { return state._root; }), operators_1.map(function (node) { return utils._findMin(node); }), operators_1.filter(function (v) { return !!v; }), operators_1.distinctUntilChanged());
exports.getHeight = rxjs_1.pipe(operators_1.map(function (state) { return state._root; }), operators_1.map(function (node) { return utils._getHeight(node); }), operators_1.filter(function (v) { return !!v; }), operators_1.distinctUntilChanged());
exports.getDiameter = rxjs_1.pipe(operators_1.map(function (state) { return state._root; }), operators_1.map(function (node) { return utils._getDiameter(node); }), operators_1.filter(function (v) { return !!v; }), operators_1.distinctUntilChanged());
