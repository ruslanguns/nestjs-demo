"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = require("@nestjs/common");
var config_service_1 = require("./config.service");
var constants_1 = require("../../../../../../../../../src/lib/constants");
// THIS PROVIDER (token) WOULD BE REPLACED BY THE useClass SERVICE
/* const configService = {
  provide: ConfigService,
  useClass: process.env.NODE_ENV === 'development' ? DevConfigService ? ProdConfigService
} */
var ConfigModule = /** @class */ (function () {
    function ConfigModule() {
    }
    ConfigModule_1 = ConfigModule;
    /** @OPTIONS is a directory path that holds config  */
    ConfigModule.register = function (options) {
        return {
            module: ConfigModule_1,
            providers: [
                config_service_1.ConfigService,
                {
                    /* This will make it injectable into the ConfigService, */
                    provide: constants_1.CONFIG_OPTIONS,
                    useValue: options,
                },
            ],
            exports: [config_service_1.ConfigService],
        };
    };
    var ConfigModule_1;
    ConfigModule = ConfigModule_1 = __decorate([
        common_1.Module({})
    ], ConfigModule);
    return ConfigModule;
}());
exports.ConfigModule = ConfigModule;
//# sourceMappingURL=config.module.js.map