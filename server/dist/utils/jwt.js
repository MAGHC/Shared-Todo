"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = require("../config");
function createToken(email) {
    return jsonwebtoken_1.default.sign({ email }, config_1.config.jwt.secretKey, { expiresIn: config_1.config.jwt.expireDay });
}
exports.createToken = createToken;
//# sourceMappingURL=jwt.js.map