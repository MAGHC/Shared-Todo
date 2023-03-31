"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isAuth = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const auth_1 = require("../model/auth");
const secretKey = 'n_a9ivm=y0dt5x#)xzd-x%ie5i3dxn*kvp2jd)6ofe&=7+%v*5';
function isAuth(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const authHead = req.get('Authorization');
        if (!(authHead && authHead.startsWith('Bearer '))) {
            return res.status(401).json({ message: `Bearer에러${authHead}` });
        }
        const token = authHead && authHead.split(' ')[1];
        if (!token) {
            return res.status(401).json({ message: '토큰 ㄴ' });
        }
        jsonwebtoken_1.default.verify(token, secretKey, (error, decoded) => __awaiter(this, void 0, void 0, function* () {
            if (error) {
                return res.status(401).json({ message: `${authHead}이렇다네` });
            }
            const user = yield (0, auth_1.getUserByEmail)(decoded.email);
            if (!user) {
                return res.status(401).json({ message: 'invaliduser' });
            }
            req.userEmail = user.email;
            req.token = token;
            return next();
        }));
    });
}
exports.isAuth = isAuth;
//# sourceMappingURL=auth.js.map