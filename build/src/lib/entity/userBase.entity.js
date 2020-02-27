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
var typeorm_1 = require("typeorm");
var constants_1 = require("../constants");
var UserBase = /** @class */ (function () {
    function UserBase() {
    }
    __decorate([
        type_graphql_1.Field(function (type) { return type_graphql_1.ID; }),
        typeorm_1.PrimaryGeneratedColumn('uuid'),
        __metadata("design:type", String)
    ], UserBase.prototype, "id", void 0);
    __decorate([
        type_graphql_1.Field(),
        typeorm_1.Column(),
        class_validator_1.IsString(),
        __metadata("design:type", String)
    ], UserBase.prototype, "firstName", void 0);
    __decorate([
        type_graphql_1.Field(),
        typeorm_1.Column(),
        class_validator_1.IsString(),
        __metadata("design:type", String)
    ], UserBase.prototype, "lastName", void 0);
    __decorate([
        type_graphql_1.Field(),
        class_validator_1.IsString(),
        typeorm_1.Column('text', { unique: true }),
        __metadata("design:type", String)
    ], UserBase.prototype, "email", void 0);
    __decorate([
        typeorm_1.Column(),
        class_validator_1.IsString(),
        __metadata("design:type", String)
    ], UserBase.prototype, "password", void 0);
    __decorate([
        type_graphql_1.Field(function (type) { return constants_1.UserRole; }, { nullable: true }) //the Enum most be issued as type foremost
        ,
        typeorm_1.Column({ type: 'enum', enum: constants_1.UserRole, default: constants_1.UserRole.EDITOR }),
        __metadata("design:type", String)
    ], UserBase.prototype, "role", void 0);
    __decorate([
        typeorm_1.Column('bool', { default: false, nullable: true }),
        class_validator_1.IsBoolean(),
        __metadata("design:type", Boolean)
    ], UserBase.prototype, "confirmedSignup", void 0);
    __decorate([
        typeorm_1.CreateDateColumn({ type: 'date', nullable: true }),
        class_validator_1.IsDate(),
        __metadata("design:type", Date)
    ], UserBase.prototype, "createdDate", void 0);
    __decorate([
        typeorm_1.UpdateDateColumn({ type: 'date', nullable: true }),
        class_validator_1.IsDate(),
        __metadata("design:type", Date)
    ], UserBase.prototype, "updatedDate", void 0);
    UserBase = __decorate([
        type_graphql_1.ObjectType({ description: 'The user model' }),
        typeorm_1.Entity()
    ], UserBase);
    return UserBase;
}());
exports.UserBase = UserBase;
/* To tell TypeGraphQL about our enum, we would ideally mark the enums with the @GraphQLEnumType() decorator. However, TypeScript decorators only work with classes, so we need to make TypeGraphQL aware of the enums manually by calling the registerEnumType function and providing the enum name for GraphQL: */
type_graphql_1.registerEnumType(constants_1.UserRole, {
    name: 'UserRole',
    description: 'The definition of an enumerated User Role',
});
//# sourceMappingURL=userBase.entity.js.map