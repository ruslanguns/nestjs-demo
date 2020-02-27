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
var userBase_entity_1 = require("../../../../../../../../../../src/lib/entity/userBase.entity");
var type_graphql_1 = require("type-graphql");
var typeorm_1 = require("typeorm");
var constants_1 = require("../../../../../../../../../../src/lib/constants");
var User = /** @class */ (function (_super) {
    __extends(User, _super);
    function User() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    User = __decorate([
        type_graphql_1.ObjectType({ description: 'The user model' }),
        typeorm_1.Entity()
    ], User);
    return User;
}(userBase_entity_1.UserBase));
exports.User = User;
var GetUserArgs = /** @class */ (function () {
    function GetUserArgs() {
    }
    __decorate([
        type_graphql_1.Field(function (type) { return type_graphql_1.ID; }),
        __metadata("design:type", String)
    ], GetUserArgs.prototype, "id", void 0);
    GetUserArgs = __decorate([
        type_graphql_1.ArgsType()
    ], GetUserArgs);
    return GetUserArgs;
}());
exports.GetUserArgs = GetUserArgs;
var UserRegInput = /** @class */ (function () {
    function UserRegInput() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn('uuid'),
        __metadata("design:type", String)
    ], UserRegInput.prototype, "id", void 0);
    __decorate([
        type_graphql_1.Field(),
        class_validator_1.IsString(),
        __metadata("design:type", String)
    ], UserRegInput.prototype, "firstName", void 0);
    __decorate([
        type_graphql_1.Field(),
        class_validator_1.IsString(),
        __metadata("design:type", String)
    ], UserRegInput.prototype, "lastName", void 0);
    __decorate([
        type_graphql_1.Field(),
        class_validator_1.IsString(),
        __metadata("design:type", String)
    ], UserRegInput.prototype, "email", void 0);
    __decorate([
        type_graphql_1.Field(),
        class_validator_1.IsString(),
        __metadata("design:type", String)
    ], UserRegInput.prototype, "password", void 0);
    UserRegInput = __decorate([
        type_graphql_1.InputType({ description: 'New user data' })
    ], UserRegInput);
    return UserRegInput;
}());
exports.UserRegInput = UserRegInput;
var UserLoginInput = /** @class */ (function () {
    function UserLoginInput() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn('uuid'),
        __metadata("design:type", String)
    ], UserLoginInput.prototype, "id", void 0);
    __decorate([
        type_graphql_1.Field(),
        class_validator_1.IsString(),
        __metadata("design:type", String)
    ], UserLoginInput.prototype, "email", void 0);
    __decorate([
        type_graphql_1.Field(),
        class_validator_1.IsString(),
        __metadata("design:type", String)
    ], UserLoginInput.prototype, "password", void 0);
    UserLoginInput = __decorate([
        type_graphql_1.InputType({ description: 'New user data' })
    ], UserLoginInput);
    return UserLoginInput;
}());
exports.UserLoginInput = UserLoginInput;
var AddUserInput = /** @class */ (function (_super) {
    __extends(AddUserInput, _super);
    function AddUserInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    var _a;
    __decorate([
        typeorm_1.PrimaryGeneratedColumn('uuid'),
        __metadata("design:type", String)
    ], AddUserInput.prototype, "id", void 0);
    __decorate([
        type_graphql_1.Field(),
        class_validator_1.IsString(),
        __metadata("design:type", String)
    ], AddUserInput.prototype, "firstName", void 0);
    __decorate([
        type_graphql_1.Field(),
        class_validator_1.IsString(),
        __metadata("design:type", String)
    ], AddUserInput.prototype, "lastName", void 0);
    __decorate([
        type_graphql_1.Field(),
        class_validator_1.IsString(),
        __metadata("design:type", String)
    ], AddUserInput.prototype, "email", void 0);
    __decorate([
        type_graphql_1.Field(),
        class_validator_1.IsString(),
        __metadata("design:type", String)
    ], AddUserInput.prototype, "password", void 0);
    __decorate([
        type_graphql_1.Field(),
        class_validator_1.IsString(),
        __metadata("design:type", typeof (_a = typeof constants_1.UserRole !== "undefined" && constants_1.UserRole) === "function" ? _a : Object)
    ], AddUserInput.prototype, "role", void 0);
    AddUserInput = __decorate([
        type_graphql_1.InputType({ description: 'Add new user with role' })
    ], AddUserInput);
    return AddUserInput;
}(userBase_entity_1.UserBase));
exports.AddUserInput = AddUserInput;
//# sourceMappingURL=user.entity.js.map