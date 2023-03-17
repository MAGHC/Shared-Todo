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
exports.getTodos = void 0;
const todos = [
    { id: 1, createdAt: new Date(), todo: '2021까지~다하기', nickname: '시말' },
    { id: 2, createdAt: new Date(), todo: '2023까지~다하기', nickname: '시2말' },
];
function getTodos(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const nickname = req.query.nickname;
        let data;
        if (nickname) {
            data = todos.filter((todo) => todo.nickname === nickname);
            return res.status(200).json(data);
        }
        data = todos;
        return res.status(200).json(data);
    });
}
exports.getTodos = getTodos;
//# sourceMappingURL=todosContorller.js.map