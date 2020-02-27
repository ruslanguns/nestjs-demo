"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = require("@nestjs/common");
exports.Roles = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return common_1.SetMetadata('roles', args);
};
//# sourceMappingURL=roles.decorator.js.map