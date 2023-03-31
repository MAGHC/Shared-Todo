"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const required = (key, defaultValue = undefined) => {
    const value = process.env[key] || defaultValue;
    if (!value) {
        throw new Error(`key ${key} 설정 안됨`);
    }
    return value;
};
exports.config = {
    jwt: {
        secretKey: required('JWT_SECRET'),
        expireDay: required('JWT_EXPIRES_DAY', '1d'),
    },
    bcrypt: {
        saltyValue: parseInt(required('BCRYPT_SALTY_VALUE', '12')),
    },
    host: {
        port: parseInt(required('HOST_PORT', '8080')),
    },
};
//# sourceMappingURL=config.js.map