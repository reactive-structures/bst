"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a;
var immer_1 = __importDefault(require("immer"));
var actions_1 = require("./actions");
var utils_1 = require("./utils");
exports.insert = immer_1.default(function (state, action) {
    state._root = utils_1._insert(action.payload.value, state._root);
    return state;
});
exports.remove = immer_1.default(function (state, action) {
    var remove = utils_1._remove.bind(state);
    remove(utils_1._searchRecursively(action.payload.value, state._root));
    return { _root: __assign({}, state._root) };
});
exports.reducerMap = (_a = {},
    _a[actions_1.BstActions.INSERT] = exports.insert,
    _a[actions_1.BstActions.REMOVE] = exports.remove,
    _a);
// new Map([
//   [BstActions.INSERT, insert],
//   [BstActions.REMOVE, remove]
// ]);
