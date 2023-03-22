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
let allUser = [];
function postRegist(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { email, password, nickname } = req.body;
        const newId = {
            email,
            password: yield (0, bcrypt_1.hashPw)(password),
            nickname,
        };
        const isExist = allUser.find((user) => user.email === email);
        if (isExist) {
            res.status(409).json({
                message: auth_1.AUTH_ERRORS.ISEXIST,
            });
        }
        allUser = [...allUser, newId];
        console.log(allUser);
        res.status(201).json({
            token: (0, jwt_1.createToken)(email),
            message: `${email} ${auth_2.AUTH_SUCCESS.createID}`,
        });
    });
}
exports.postRegist = postRegist;
function postLogin(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        res.sendStatus(202);
    });
}
exports.postLogin = postLogin;
function getCheck(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        res.sendStatus(205);
    });
}
exports.getCheck = getCheck;
//# sourceMappingURL=authController.js.map