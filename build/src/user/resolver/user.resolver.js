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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var graphql_1 = require("@nestjs/graphql");
var lib_1 = require("../../../../../../../../../../src/lib");
var user_entity_1 = require("../entity/user.entity");
var user_service_1 = require("../user.service");
var UserResolver = /** @class */ (function () {
    function UserResolver(userService) {
        this.userService = userService;
    }
    UserResolver.prototype.me = function (ctx) {
        return __awaiter(this, void 0, void 0, function () {
            var userId, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        userId = ctx.req['userId'];
                        if (!userId) {
                            return [2 /*return*/, undefined];
                        }
                        return [4 /*yield*/, this.userService.findOne(userId)];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2:
                        err_1 = _a.sent();
                        throw new Error(err_1);
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    UserResolver.prototype.users = function () {
        return __awaiter(this, void 0, void 0, function () {
            var users, err_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.userService.findAll()];
                    case 1:
                        users = _a.sent();
                        return [2 /*return*/, users];
                    case 2:
                        err_2 = _a.sent();
                        throw new Error(err_2);
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    UserResolver.prototype.user = function (_a) {
        var id = _a.id;
        return __awaiter(this, void 0, void 0, function () {
            var user, err_3;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.userService.findOne(id)];
                    case 1:
                        user = _b.sent();
                        return [2 /*return*/, user];
                    case 2:
                        err_3 = _b.sent();
                        throw new Error(err_3);
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    UserResolver.prototype.addUser = function (addUserInput) {
        return __awaiter(this, void 0, void 0, function () {
            var user, err_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.userService.addUser(addUserInput)];
                    case 1:
                        user = _a.sent();
                        return [2 /*return*/, user];
                    case 2:
                        err_4 = _a.sent();
                        throw new Error(err_4);
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    UserResolver.prototype.signup = function (userRegInput) {
        return __awaiter(this, void 0, void 0, function () {
            var user, err_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.userService.signup(userRegInput)];
                    case 1:
                        user = _a.sent();
                        return [2 /*return*/, user];
                    case 2:
                        err_5 = _a.sent();
                        throw new Error(err_5);
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    UserResolver.prototype.login = function (userLoginInput) {
        return __awaiter(this, void 0, void 0, function () {
            var user, err_6;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.userService.login(userLoginInput)];
                    case 1:
                        user = _a.sent();
                        return [2 /*return*/, user];
                    case 2:
                        err_6 = _a.sent();
                        throw new Error(err_6);
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    var _a;
    __decorate([
        graphql_1.Query(function (returns) { return user_entity_1.User; }, { nullable: true }),
        __param(0, graphql_1.Context()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [typeof (_a = typeof lib_1.IRequestContext !== "undefined" && lib_1.IRequestContext) === "function" ? _a : Object]),
        __metadata("design:returntype", Promise)
    ], UserResolver.prototype, "me", null);
    __decorate([
        graphql_1.Query(function (returns) { return [user_entity_1.User]; }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], UserResolver.prototype, "users", null);
    __decorate([
        graphql_1.Query(function (returns) { return user_entity_1.User; }),
        __param(0, graphql_1.Args()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [user_entity_1.GetUserArgs]),
        __metadata("design:returntype", Promise)
    ], UserResolver.prototype, "user", null);
    __decorate([
        graphql_1.Mutation(function (returns) { return user_entity_1.User; }),
        __param(0, graphql_1.Args('addUserInput')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [user_entity_1.AddUserInput]),
        __metadata("design:returntype", Promise)
    ], UserResolver.prototype, "addUser", null);
    __decorate([
        graphql_1.Mutation(function () { return user_entity_1.User; }),
        __param(0, graphql_1.Args('regInput')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [user_entity_1.UserRegInput]),
        __metadata("design:returntype", Promise)
    ], UserResolver.prototype, "signup", null);
    __decorate([
        graphql_1.Mutation(function (returns) { return user_entity_1.User; }),
        __param(0, graphql_1.Args('loginInput')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [user_entity_1.UserLoginInput]),
        __metadata("design:returntype", Promise)
    ], UserResolver.prototype, "login", null);
    UserResolver = __decorate([
        graphql_1.Resolver(function (of) { return user_entity_1.User; }),
        __metadata("design:paramtypes", [user_service_1.UserService])
    ], UserResolver);
    return UserResolver;
}());
exports.UserResolver = UserResolver;
//# sourceMappingURL=user.resolver.js.map