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
var Category = /** @class */ (function (_super) {
    __extends(Category, _super);
    function Category() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        type_graphql_1.Field(),
        typeorm_1.Column({ unique: true }),
        class_validator_1.Length(3, 255),
        class_validator_1.IsString(),
        __metadata("design:type", String)
    ], Category.prototype, "name", void 0);
    Category = __decorate([
        typeorm_1.Entity(),
        type_graphql_1.ObjectType()
    ], Category);
    return Category;
}(date_entity_1.DateBase));
exports.Category = Category;
var CategoryInput = /** @class */ (function () {
    function CategoryInput() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn('uuid'),
        __metadata("design:type", String)
    ], CategoryInput.prototype, "id", void 0);
    __decorate([
        type_graphql_1.Field(),
        typeorm_1.Column(),
        class_validator_1.MaxLength(30),
        class_validator_1.IsString(),
        __metadata("design:type", String)
    ], CategoryInput.prototype, "name", void 0);
    CategoryInput = __decorate([
        type_graphql_1.InputType()
    ], CategoryInput);
    return CategoryInput;
}());
exports.CategoryInput = CategoryInput;
var CategoryArgs = /** @class */ (function () {
    function CategoryArgs() {
    }
    __decorate([
        type_graphql_1.Field(function (type) { return type_graphql_1.ID; }),
        class_validator_1.IsString(),
        __metadata("design:type", String)
    ], CategoryArgs.prototype, "id", void 0);
    __decorate([
        type_graphql_1.Field(),
        class_validator_1.IsString(),
        __metadata("design:type", String)
    ], CategoryArgs.prototype, "name", void 0);
    CategoryArgs = __decorate([
        type_graphql_1.ArgsType()
    ], CategoryArgs);
    return CategoryArgs;
}());
exports.CategoryArgs = CategoryArgs;
//# sourceMappingURL=category.entity.js.map