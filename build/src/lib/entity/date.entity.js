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
var entity_events_1 = require("./entity.events");
var DateBase = /** @class */ (function (_super) {
    __extends(DateBase, _super);
    function DateBase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        type_graphql_1.Field(function (type) { return type_graphql_1.ID; }),
        typeorm_1.PrimaryGeneratedColumn('uuid'),
        __metadata("design:type", String)
    ], DateBase.prototype, "id", void 0);
    __decorate([
        typeorm_1.CreateDateColumn({ nullable: true }),
        class_validator_1.IsDate(),
        __metadata("design:type", Date)
    ], DateBase.prototype, "createdDate", void 0);
    __decorate([
        typeorm_1.UpdateDateColumn({ nullable: true }),
        class_validator_1.IsDate(),
        __metadata("design:type", Date)
    ], DateBase.prototype, "updatedDate", void 0);
    DateBase = __decorate([
        type_graphql_1.ObjectType({ description: 'The Date model' }),
        typeorm_1.Entity()
    ], DateBase);
    return DateBase;
}(entity_events_1.EntityEvent));
exports.DateBase = DateBase;
//# sourceMappingURL=date.entity.js.map