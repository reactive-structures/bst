"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var immer_1 = __importDefault(require("immer"));
var actions_1 = require("./actions");
var utils_1 = require("./utils");
exports.insert = immer_1.default(function (state, action) {
    state._root = utils_1._insert(action.payload.value, state._root);
});
exports.remove = immer_1.default(function (state, action) {
    var remove = utils_1._remove.bind(state);
    remove(utils_1._searchRecursively(action.payload.value, state._root));
});
exports.reducerMap = new Map([
    [actions_1.BstActions.INSERT, exports.insert],
    [actions_1.BstActions.REMOVE, exports.remove]
]);
