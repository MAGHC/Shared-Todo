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
exports.deleteTodo = exports.updateTodo = exports.createTodo = exports.getTodoById = exports.getAllTodoByNick = exports.getAllTodos = void 0;
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
function getAllTodos() {
    return __awaiter(this, void 0, void 0, function* () {
        return todos;
    });
}
exports.getAllTodos = getAllTodos;
function getAllTodoByNick(nickname) {
    return __awaiter(this, void 0, void 0, function* () {
        return todos.filter((todo) => todo.nickname === nickname);
    });
}
exports.getAllTodoByNick = getAllTodoByNick;
function getTodoById(id) {
    return __awaiter(this, void 0, void 0, function* () {
        return todos.find((todo) => todo.todoId === id);
    });
}
exports.getTodoById = getTodoById;
function createTodo(email, todo, nickname) {
    return __awaiter(this, void 0, void 0, function* () {
        const newTodo = {
            nickname,
            todo,
            email,
            todoId: '3',
            createdAt: new Date(),
        };
        todos = [newTodo, ...todos];
        return newTodo;
    });
}
exports.createTodo = createTodo;
function updateTodo(id, todo) {
    return __awaiter(this, void 0, void 0, function* () {
        const findedTodo = yield getTodoById(id);
        if (findedTodo) {
            findedTodo.todo = todo;
        }
        return findedTodo;
    });
}
exports.updateTodo = updateTodo;
function deleteTodo(id) {
    todos.filter((todo) => todo.todoId !== id);
}
exports.deleteTodo = deleteTodo;
//# sourceMappingURL=todo.js.map