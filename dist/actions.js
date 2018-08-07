"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BstActions;
(function (BstActions) {
    BstActions["INSERT"] = "[BST] Insert item";
    BstActions["REMOVE"] = "[BST] Remove item";
})(BstActions = exports.BstActions || (exports.BstActions = {}));
var Insert = /** @class */ (function () {
    function Insert(payload) {
        this.payload = payload;
        this.type = BstActions.INSERT;
    }
    return Insert;
}());
exports.Insert = Insert;
var Remove = /** @class */ (function () {
    function Remove(payload) {
        this.payload = payload;
        this.type = BstActions.REMOVE;
    }
    return Remove;
}());
exports.Remove = Remove;
