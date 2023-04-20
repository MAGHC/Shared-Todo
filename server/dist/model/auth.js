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
const db_1 = require("../db/db");
let allUser = [];
function getAllUser() {
    return __awaiter(this, void 0, void 0, function* () {
        return allUser;
    });
}
exports.getAllUser = getAllUser;
function getUserByEmail(email) {
    return __awaiter(this, void 0, void 0, function* () {
        return db_1.db.execute('SELECT * FROM users WHERE email=?', [email]).then((res) => res[0][0]);
    });
}
exports.getUserByEmail = getUserByEmail;
function createUser(user) {
    return __awaiter(this, void 0, void 0, function* () {
        const { nickname, password, email, profileUrl } = user;
        return db_1.db
            .execute('INSERT INTO users (nickname, password, email, profileUrl) VALUES(?, ?, ?, ?)', [
            nickname,
            password,
            email,
            profileUrl,
        ])
            .then((res) => res[0].insertId);
    });
}
exports.createUser = createUser;
//# sourceMappingURL=auth.js.map