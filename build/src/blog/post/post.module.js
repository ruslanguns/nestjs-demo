"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = require("@nestjs/common");
var post_service_1 = require("./post.service");
var PostModule = /** @class */ (function () {
    function PostModule() {
    }
    PostModule = __decorate([
        common_1.Module({
            providers: [post_service_1.PostService]
        })
    ], PostModule);
    return PostModule;
}());
exports.PostModule = PostModule;
//# sourceMappingURL=post.module.js.map