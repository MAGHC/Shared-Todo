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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCheck = exports.postLogin = exports.postRegist = void 0;
const bcrypt_1 = require("../utils/bcrypt");
const jwt_1 = require("./../utils/jwt");
const auth_1 = require("../utils/auth");
const auth_2 = require("../utils/auth");
const auth_3 = require("../model/auth");
function postRegist(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { email, password, nickname } = req.body;
        if (!email || !password || !nickname) {
            res.sendStatus(422);
        }
        const isExist = yield (0, auth_3.getUserByEmail)(email);
        if (isExist) {
            res.status(409).json({
                message: auth_1.AUTH_ERRORS.ISEXIST,
            });
        }
        (0, auth_3.createUser)(email, password, nickname);
        res.status(201).json({
            token: (0, jwt_1.createToken)(email),
            user: { nickname, email },
            message: `${email} ${auth_2.AUTH_SUCCESS.createID}`,
        });
    });
}
exports.postRegist = postRegist;
function postLogin(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { email, password } = req.body;
        const user = yield (0, auth_3.getUserByEmail)(email);
        if (!user) {
            res.sendStatus(404);
        }
        const currentPw = user && user.password;
        if (currentPw) {
            const isValid = yield (0, bcrypt_1.comparePw)(password, currentPw);
            if (!isValid) {
                res.sendStatus(422);
            }
            else {
                res.status(200).json({
                    token: (0, jwt_1.createToken)(email),
                    user: { nickname: user.nickname, email: user.email },
                    message: `${auth_2.AUTH_SUCCESS.login}`,
                });
            }
        }
        res.sendStatus(202);
    });
}
exports.postLogin = postLogin;
function getCheck(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!req.userEmail || !req.token) {
            return res.sendStatus(404);
        }
        res.status(200).json({
            token: req.token,
            userEmail: req.userEmail,
        });
    });
}
exports.getCheck = getCheck;
//# sourceMappingURL=authController.js.map