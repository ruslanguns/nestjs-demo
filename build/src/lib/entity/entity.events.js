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
var typeorm_1 = require("typeorm");
var EntityEvent = /** @class */ (function () {
    function EntityEvent() {
    }
    EntityEvent.prototype.entityLoaded = function () {
        console.log('[EntityEvents]: entityLoaded event ', new Date());
    };
    EntityEvent.prototype.entityInserted = function () {
        console.log('[EntityEvents]: entityInserted event ', new Date());
    };
    EntityEvent.prototype.entityRemoved = function () {
        console.log('[EntityEvents]: entityRemoved event ', new Date());
    };
    __decorate([
        typeorm_1.AfterLoad(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], EntityEvent.prototype, "entityLoaded", null);
    __decorate([
        typeorm_1.AfterInsert(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], EntityEvent.prototype, "entityInserted", null);
    __decorate([
        typeorm_1.AfterRemove(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], EntityEvent.prototype, "entityRemoved", null);
    EntityEvent = __decorate([
        typeorm_1.Entity()
    ], EntityEvent);
    return EntityEvent;
}());
exports.EntityEvent = EntityEvent;
//# sourceMappingURL=entity.events.js.map