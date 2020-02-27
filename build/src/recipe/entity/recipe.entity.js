"use strict";
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
var Recipe = /** @class */ (function () {
    function Recipe() {
    }
    __decorate([
        type_graphql_1.Field(function (type) { return type_graphql_1.ID; }),
        __metadata("design:type", String)
    ], Recipe.prototype, "id", void 0);
    __decorate([
        type_graphql_1.Field(),
        __metadata("design:type", String)
    ], Recipe.prototype, "title", void 0);
    __decorate([
        type_graphql_1.Field({ nullable: true }),
        __metadata("design:type", String)
    ], Recipe.prototype, "description", void 0);
    __decorate([
        type_graphql_1.Field(),
        __metadata("design:type", Date)
    ], Recipe.prototype, "creationDate", void 0);
    __decorate([
        type_graphql_1.Field(function (type) { return [String]; }),
        __metadata("design:type", Array)
    ], Recipe.prototype, "ingredients", void 0);
    Recipe = __decorate([
        type_graphql_1.ObjectType()
    ], Recipe);
    return Recipe;
}());
exports.Recipe = Recipe;
var NewRecipeInput = /** @class */ (function () {
    function NewRecipeInput() {
    }
    __decorate([
        type_graphql_1.Field(),
        class_validator_1.MaxLength(30),
        __metadata("design:type", String)
    ], NewRecipeInput.prototype, "title", void 0);
    __decorate([
        type_graphql_1.Field({ nullable: true }),
        class_validator_1.IsOptional(),
        class_validator_1.Length(30, 255),
        __metadata("design:type", String)
    ], NewRecipeInput.prototype, "description", void 0);
    __decorate([
        type_graphql_1.Field(function (type) { return [String]; }),
        __metadata("design:type", Array)
    ], NewRecipeInput.prototype, "ingredients", void 0);
    NewRecipeInput = __decorate([
        type_graphql_1.InputType()
    ], NewRecipeInput);
    return NewRecipeInput;
}());
exports.NewRecipeInput = NewRecipeInput;
var RecipesArgs = /** @class */ (function () {
    function RecipesArgs() {
        this.skip = 0;
        this.take = 25;
    }
    __decorate([
        type_graphql_1.Field(function () { return type_graphql_1.Int; }),
        class_validator_1.Min(0),
        __metadata("design:type", Object)
    ], RecipesArgs.prototype, "skip", void 0);
    __decorate([
        type_graphql_1.Field(function () { return type_graphql_1.Int; }),
        class_validator_1.Min(1),
        class_validator_1.Max(50),
        __metadata("design:type", Object)
    ], RecipesArgs.prototype, "take", void 0);
    RecipesArgs = __decorate([
        type_graphql_1.ArgsType()
    ], RecipesArgs);
    return RecipesArgs;
}());
exports.RecipesArgs = RecipesArgs;
//# sourceMappingURL=recipe.entity.js.map