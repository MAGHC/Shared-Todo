"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isVerify = exports.createToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const secretKey = 'n_a9ivm=y0dt5x#)xzd-x%ie5i3dxn*kvp2jd)6ofe&=7+%v*5';
const expireDate = '1d';
function createToken(email) {
    return jsonwebtoken_1.default.sign({ email }, secretKey, { expiresIn: expireDate });
}
exports.createToken = createToken;
function isVerify(token) {
    return jsonwebtoken_1.default.verify(token, secretKey);
}
exports.isVerify = isVerify;
//# sourceMappingURL=jwt.js.map