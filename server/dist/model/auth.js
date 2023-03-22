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
exports.createUser = exports.getUserByEmail = exports.getAllUser = void 0;
const bcrypt_1 = require("../utils/bcrypt");
let allUser = [];
function getAllUser() {
    return __awaiter(this, void 0, void 0, function* () {
        return allUser;
    });
}
exports.getAllUser = getAllUser;
function getUserByEmail(email) {
    return __awaiter(this, void 0, void 0, function* () {
        return allUser.find((user) => user.email === email);
    });
}
exports.getUserByEmail = getUserByEmail;
function createUser(email, password, nickname) {
    return __awaiter(this, void 0, void 0, function* () {
        const newId = {
            email,
            password: yield (0, bcrypt_1.hashPw)(password),
            nickname,
        };
        allUser.push(newId);
        return newId.email;
    });
}
exports.createUser = createUser;
//# sourceMappingURL=auth.js.map