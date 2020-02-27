"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function logger(req, res, next) {
    console.log("[loggerMiddleware] Requested: " + req.url + " ");
    next();
}
exports.logger = logger;
;
//# sourceMappingURL=logger.middleware.js.map