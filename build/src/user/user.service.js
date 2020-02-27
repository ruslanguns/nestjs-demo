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
var common_1 = require("@nestjs/common");
var typeorm_1 = require("@nestjs/typeorm");
var typeorm_2 = require("typeorm");
var user_entity_1 = require("./entity/user.entity");
var UserService = /** @class */ (function () {
    function UserService(userRepository, cnx /* Use for TRANSACTION purpose */) {
        this.userRepository = userRepository;
        this.cnx = cnx;
    }
    UserService.prototype.addUser = function (user) {
        return __awaiter(this, void 0, void 0, function () {
            var err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.userRepository.save(user)];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2:
                        err_1 = _a.sent();
                        throw new Error(err_1);
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    UserService.prototype.signup = function (userArgs) {
        return __awaiter(this, void 0, void 0, function () {
            var res, userExists, err_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 5, , 6]);
                        res = void 0;
                        return [4 /*yield*/, this.userRepository.findOne({
                                where: { email: userArgs.email },
                            })];
                    case 1:
                        userExists = _a.sent();
                        if (!userExists) return [3 /*break*/, 2];
                        console.log('[userExists:]:', userExists);
                        res = { id: null, data: 'User exists' };
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, this.userRepository.save(userArgs)];
                    case 3:
                        res = _a.sent();
                        _a.label = 4;
                    case 4: return [2 /*return*/, res];
                    case 5:
                        err_2 = _a.sent();
                        throw new Error(err_2);
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    UserService.prototype.login = function (user) {
        return __awaiter(this, void 0, void 0, function () {
            var err_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        console.log('[userService:]', user);
                        return [4 /*yield*/, this.userRepository.save(user)];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2:
                        err_3 = _a.sent();
                        throw new Error(err_3);
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    UserService.prototype.createMany = function (user) {
        return __awaiter(this, void 0, void 0, function () {
            var qRunner, err_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        qRunner = this.cnx.createQueryRunner();
                        return [4 /*yield*/, qRunner.connect()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, qRunner.startTransaction()];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        _a.trys.push([3, 7, 9, 11]);
                        return [4 /*yield*/, qRunner.manager.save(user[0])];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, qRunner.manager.save(user[1])];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, qRunner.commitTransaction()];
                    case 6:
                        _a.sent();
                        return [3 /*break*/, 11];
                    case 7:
                        err_4 = _a.sent();
                        // rollback trnx
                        return [4 /*yield*/, qRunner.rollbackTransaction()];
                    case 8:
                        // rollback trnx
                        _a.sent();
                        return [3 /*break*/, 11];
                    case 9: 
                    // release qRunner
                    return [4 /*yield*/, qRunner.release()];
                    case 10:
                        // release qRunner
                        _a.sent();
                        return [7 /*endfinally*/];
                    case 11: return [2 /*return*/];
                }
            });
        });
    };
    UserService.prototype.findAll = function () {
        return __awaiter(this, void 0, void 0, function () {
            var err_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.userRepository.find()];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2:
                        err_5 = _a.sent();
                        throw new Error(err_5);
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    UserService.prototype.findOne = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var err_6;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.userRepository.findOne({ where: { id: id } })];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2:
                        err_6 = _a.sent();
                        throw new Error(err_6);
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    UserService.prototype.remove = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var err_7;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.userRepository.delete(id)];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        err_7 = _a.sent();
                        throw new Error(err_7);
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    UserService = __decorate([
        common_1.Injectable(),
        __param(0, typeorm_1.InjectRepository(user_entity_1.User)),
        __metadata("design:paramtypes", [typeorm_2.Repository,
            typeorm_2.Connection /* Use for TRANSACTION purpose */])
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map