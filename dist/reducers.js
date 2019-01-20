"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _a;
var immer_1 = require("immer");
var actions_1 = require("./actions");
var utils_1 = require("./utils");
immer_1.setAutoFreeze(false);
exports.insert = immer_1.produce(function (state, action) {
    state._root = utils_1._insert(action.payload.value, state._root);
    return state;
});
exports.remove = immer_1.produce(function (state, action) {
    var remove = utils_1._remove.bind(state);
    remove(utils_1._searchRecursively(action.payload.value, state._root));
    return state;
});
exports.reducerMap = (_a = {},
    _a[actions_1.BstActions.INSERT] = exports.insert,
    _a[actions_1.BstActions.REMOVE] = exports.remove,
    _a);
// new Map([
//   [BstActions.INSERT, insert],
//   [BstActions.REMOVE, remove]
// ]);
