"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var graphql_1 = require("@nestjs/graphql");
var graphql_2 = require("graphql");
var mongodb_1 = require("mongodb");
var DateScalar = /** @class */ (function () {
    function DateScalar() {
        this.description = 'A custom Date scalar type';
    }
    DateScalar.prototype.parseValue = function (val) {
        return new Date(val); // value from a client
    };
    DateScalar.prototype.serialize = function (val) {
        return val.getTime(); // value sent to client
    };
    DateScalar.prototype.parseLiteral = function (ast) {
        if (ast.kind === graphql_2.Kind.INT) {
            return new Date(ast.value);
        }
        return null;
    };
    DateScalar = __decorate([
        graphql_1.Scalar('Date', function (type) { return Date; })
    ], DateScalar);
    return DateScalar;
}());
exports.DateScalar = DateScalar;
/* to create custom scalars; instantiate the GraphQLScalarType  */
exports.ObjectIdScalar = new graphql_2.GraphQLScalarType({
    name: 'ObjectId',
    description: 'Mongo object id scalar type',
    parseValue: function (val) {
        return new mongodb_1.ObjectId(val); // val from client input
    },
    serialize: function (val) {
        return val.toHexString(); // val sent to client
    },
    parseLiteral: function (ast) {
        if (ast.kind === graphql_2.Kind.STRING) {
            return new exports.ObjectIdScalar(ast.value); // val from the client query
        }
        return null;
    },
});
//# sourceMappingURL=index.js.map