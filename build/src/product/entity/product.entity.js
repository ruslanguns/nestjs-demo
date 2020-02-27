"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var class_validator_1 = require("class-validator");
var type_graphql_1 = require("type-graphql");
var typeorm_1 = require("typeorm");
var date_entity_1 = require("../../lib/entity/date.entity");
var Product = /** @class */ (function (_super) {
    __extends(Product, _super);
    function Product() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        type_graphql_1.Field(),
        typeorm_1.Column(),
        class_validator_1.IsString(),
        __metadata("design:type", String)
    ], Product.prototype, "name", void 0);
    __decorate([
        type_graphql_1.Field(),
        typeorm_1.Column(),
        class_validator_1.IsString(),
        class_validator_1.Length(2, 255),
        __metadata("design:type", String)
    ], Product.prototype, "description", void 0);
    __decorate([
        type_graphql_1.Field(),
        typeorm_1.Column(),
        class_validator_1.IsString(),
        __metadata("design:type", String)
    ], Product.prototype, "image", void 0);
    __decorate([
        type_graphql_1.Field(),
        typeorm_1.Column(),
        class_validator_1.IsString(),
        __metadata("design:type", String)
    ], Product.prototype, "barCode", void 0);
    __decorate([
        type_graphql_1.Field(),
        typeorm_1.Column({ default: 0 }),
        class_validator_1.IsDecimal(),
        __metadata("design:type", Number)
    ], Product.prototype, "costPrice", void 0);
    __decorate([
        type_graphql_1.Field(),
        typeorm_1.Column({ default: 0 }),
        class_validator_1.IsDecimal(),
        __metadata("design:type", Number)
    ], Product.prototype, "sellPrice", void 0);
    __decorate([
        type_graphql_1.Field(),
        class_validator_1.IsDefined(),
        typeorm_1.Column({ default: 5 }),
        class_validator_1.IsDecimal(),
        __metadata("design:type", Number)
    ], Product.prototype, "inStock", void 0);
    __decorate([
        type_graphql_1.Field(),
        typeorm_1.Column({ default: 0, nullable: true }),
        class_validator_1.IsDecimal(),
        __metadata("design:type", Number)
    ], Product.prototype, "outStock", void 0);
    __decorate([
        type_graphql_1.Field(),
        typeorm_1.Column(),
        class_validator_1.IsString(),
        __metadata("design:type", String)
    ], Product.prototype, "sellsMeasurement", void 0);
    __decorate([
        type_graphql_1.Field(),
        typeorm_1.Column(),
        class_validator_1.IsBoolean(),
        __metadata("design:type", String)
    ], Product.prototype, "visibleOnShelve", void 0);
    Product = __decorate([
        typeorm_1.Entity(),
        type_graphql_1.ObjectType({ description: 'Product data' })
    ], Product);
    return Product;
}(date_entity_1.DateBase));
exports.Product = Product;
var ProductInput = /** @class */ (function () {
    function ProductInput() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn('uuid'),
        __metadata("design:type", String)
    ], ProductInput.prototype, "id", void 0);
    __decorate([
        type_graphql_1.Field(),
        class_validator_1.IsString(),
        __metadata("design:type", String)
    ], ProductInput.prototype, "email", void 0);
    __decorate([
        type_graphql_1.Field(),
        class_validator_1.IsString(),
        __metadata("design:type", String)
    ], ProductInput.prototype, "password", void 0);
    ProductInput = __decorate([
        type_graphql_1.InputType({ description: 'Product input data' })
    ], ProductInput);
    return ProductInput;
}());
exports.ProductInput = ProductInput;
var ProductIdArgs = /** @class */ (function () {
    function ProductIdArgs() {
    }
    __decorate([
        type_graphql_1.Field(function (type) { return type_graphql_1.ID; }),
        class_validator_1.IsString(),
        __metadata("design:type", String)
    ], ProductIdArgs.prototype, "id", void 0);
    ProductIdArgs = __decorate([
        type_graphql_1.ArgsType()
    ], ProductIdArgs);
    return ProductIdArgs;
}());
exports.ProductIdArgs = ProductIdArgs;
var ProductNameArgs = /** @class */ (function () {
    function ProductNameArgs() {
    }
    __decorate([
        type_graphql_1.Field(),
        class_validator_1.IsString(),
        __metadata("design:type", String)
    ], ProductNameArgs.prototype, "title", void 0);
    ProductNameArgs = __decorate([
        type_graphql_1.ArgsType()
    ], ProductNameArgs);
    return ProductNameArgs;
}());
exports.ProductNameArgs = ProductNameArgs;
//# sourceMappingURL=product.entity.js.map