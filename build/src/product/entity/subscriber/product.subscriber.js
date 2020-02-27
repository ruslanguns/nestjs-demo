"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var typeorm_1 = require("typeorm");
var product_entity_1 = require("../product.entity");
var ProductSubscriber = /** @class */ (function () {
    function ProductSubscriber() {
    }
    ProductSubscriber.prototype.listenTo = function () {
        // listens only to POST events
        return product_entity_1.Product;
    };
    ProductSubscriber.prototype.beforeInsert = function (e) {
        console.log("[BEFORE PRODUCT INSERTED: " + e.entity);
    };
    ProductSubscriber = __decorate([
        typeorm_1.EventSubscriber()
    ], ProductSubscriber);
    return ProductSubscriber;
}());
exports.ProductSubscriber = ProductSubscriber;
//# sourceMappingURL=product.subscriber.js.map