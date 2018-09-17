"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var store_1 = require("@reactive-redux/store");
var models_1 = require("./models");
var reducers_1 = require("./reducers");
var actions_1 = require("./actions");
var selectors_1 = require("./selectors");
var selectors_2 = require("./selectors");
exports.TraverseOrder = selectors_2.TraverseOrder;
var BinarySearchTree = /** @class */ (function (_super) {
    __extends(BinarySearchTree, _super);
    function BinarySearchTree(rootValue) {
        if (rootValue === void 0) { rootValue = 0; }
        var _this = _super.call(this, { _root: new models_1.BSTNode(rootValue) }, reducers_1.reducerMap) || this;
        _this.rootValue = rootValue;
        _this.max$ = _this.state$.pipe(selectors_1.findMax);
        _this.min$ = _this.state$.pipe(selectors_1.findMin);
        _this.height$ = _this.state$.pipe(selectors_1.getHeight);
        _this.diameter$ = _this.state$.pipe(selectors_1.getDiameter);
        return _this;
    }
    BinarySearchTree.prototype.insert = function (value) {
        this.dispatch(new actions_1.Insert({ value: value }));
    };
    BinarySearchTree.prototype.delete = function (value) {
        this.dispatch(new actions_1.Remove({ value: value }));
    };
    BinarySearchTree.prototype.traverse$ = function (order) {
        if (order === void 0) { order = selectors_1.TraverseOrder.IN; }
        return this.state$.pipe(selectors_1.traverse(order));
    };
    BinarySearchTree.prototype.find$ = function (value) {
        return this.state$.pipe(selectors_1.findInTree(value));
    };
    return BinarySearchTree;
}(store_1.Store));
exports.BinarySearchTree = BinarySearchTree;
