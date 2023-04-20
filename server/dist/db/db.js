"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
const mysql2_1 = __importDefault(require("mysql2"));
const config_1 = require("../config");
const pool = mysql2_1.default.createPool({
    host: config_1.config.db.host,
    user: config_1.config.db.user,
    database: config_1.config.db.datebase,
    password: config_1.config.db.password,
});
exports.db = pool.promise();
//# sourceMappingURL=db.js.map