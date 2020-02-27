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
var common_1 = require("@nestjs/common");
var core_1 = require("@nestjs/core");
var graphql_1 = require("@nestjs/graphql");
var typeorm_1 = require("@nestjs/typeorm");
var typeorm_2 = require("typeorm");
var app_controller_1 = require("./app.controller");
var app_service_1 = require("./app.service");
var auth_module_1 = require("./auth/auth.module");
var blog_module_1 = require("./blog/blog.module");
var category_module_1 = require("./category/category.module");
var config_module_1 = require("./config/config.module");
var database_module_1 = require("./database/database.module");
var logging_interceptor_1 = require("./interceptor/logging.interceptor");
var recipe_module_1 = require("./recipe/recipe.module");
var typeorm_config_service_1 = require("./services/typeorm-config/typeorm-config.service");
var user_module_1 = require("./user/user.module");
var product_module_1 = require("./product/product.module");
var AppModule = /** @class */ (function () {
    function AppModule(cnx) {
        this.cnx = cnx;
        cnx
            .connect()
            .then(function (cn) {
            if (cn) {
                return;
            }
        })
            .catch(function (err) { return console.log('[DB Connection Error]: ', err); });
    }
    AppModule.prototype.onModuleInit = function () {
        console.log("[AppModule] has been initialized...");
    };
    AppModule.prototype.onApplicationShutdown = function (signal) {
        console.log("[AppModule] received " + signal + " to shut down...");
    };
    AppModule = __decorate([
        common_1.Module({
            imports: [
                recipe_module_1.RecipeModule,
                auth_module_1.AuthModule,
                database_module_1.DatabaseModule,
                user_module_1.UserModule,
                blog_module_1.BlogModule,
                config_module_1.ConfigModule.register({ folder: './env' }),
                graphql_1.GraphQLModule.forRoot({
                    autoSchemaFile: 'schema.gql',
                    installSubscriptionHandlers: true,
                    debug: true,
                    playground: true,
                }),
                typeorm_1.TypeOrmModule.forRoot({
                    host: 'localhost',
                    port: 5432,
                    username: 'postgres',
                    password: 'toor',
                    database: 'db_test_101',
                    logging: ['error'],
                    logger: 'file',
                    maxQueryExecutionTime: 1000,
                    entityPrefix: 'inv_',
                    cache: {
                        duration: 60000,
                    },
                    synchronize: true,
                    //entities: ['src/**.entity.ts'],
                    entities: ['dist/**/*.entity{.ts,.js}'],
                    autoLoadEntities: true,
                }),
                category_module_1.CategoryModule,
                product_module_1.ProductModule,
            ],
            controllers: [app_controller_1.AppController],
            providers: [
                app_service_1.AppService,
                {
                    provide: core_1.APP_INTERCEPTOR,
                    useClass: logging_interceptor_1.LoggingInterceptor,
                },
                typeorm_config_service_1.TypeormConfigService,
            ],
        }),
        __metadata("design:paramtypes", [typeorm_2.Connection])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map