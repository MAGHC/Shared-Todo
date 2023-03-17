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
exports.delTodo = exports.postTodo = exports.getByIdParam = exports.getTodos = void 0;
const todos_1 = require("./../utils/todos");
let todos = [
    {
        todoId: '1',
        email: 'easdsa@naver.com',
        createdAt: new Date(),
        todo: '2021까지~다하기',
        nickname: '시말',
    },
    {
        todoId: '2',
        email: 'easdsa@naver.com',
        createdAt: new Date(),
        todo: '2023까지~다하기',
        nickname: '시2말',
    },
];
function getTodos(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const nickname = req.query.nickname;
        const data = nickname ? todos.filter((todo) => todo.nickname === nickname) : todos;
        res.status(200).json(data);
    });
}
exports.getTodos = getTodos;
function getByIdParam(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const id = req.params.id;
        const isExist = todos.find((todo) => todo.todoId === id);
        if (isExist) {
            res.status(200).json(isExist);
        }
        else {
            res.status(404).json({ message: todos_1.TODOS_ERRORS.NOT_FOUND_TODO });
        }
    });
}
exports.getByIdParam = getByIdParam;
function postTodo(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { email, todo, nickname } = req.body;
        const newTodo = {
            nickname,
            todo,
            email,
            todoId: '3',
            createdAt: new Date(),
        };
        todos = [newTodo, ...todos];
        res.status(201).json(newTodo);
    });
}
exports.postTodo = postTodo;
function delTodo(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const id = req.params.id;
        const isExist = todos.find((todo) => todo.todoId === id);
        if (isExist) {
            todos = todos.filter((todo) => todo.todoId !== id);
            res.send(204);
        }
        else {
            res.status(404).json({ message: todos_1.TODOS_ERRORS.NOT_FOUND_TODO });
        }
    });
}
exports.delTodo = delTodo;
//# sourceMappingURL=todosContorller.js.map