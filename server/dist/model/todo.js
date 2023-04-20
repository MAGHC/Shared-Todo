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
const db_1 = require("../db/db");
const COMMON_QUERY = 'SELECT td.email, td.todo, td.createdAt, us.nickname, us.profileUrl, us.email FROM todos as td JOIN users as us ON td.email=us.email ';
const ORDERBY = 'ORDER BY td.createdAt DESC';
function getAllTodos() {
    return __awaiter(this, void 0, void 0, function* () {
        return db_1.db.execute(`${COMMON_QUERY} ${ORDERBY}`).then((res) => res[0]);
    });
}
exports.getAllTodos = getAllTodos;
function getAllTodoByNick(nickname) {
    return __awaiter(this, void 0, void 0, function* () {
        return db_1.db
            .execute(`${COMMON_QUERY} WHERE td.nickname=? ${ORDERBY} `, [nickname])
            .then((res) => res[0]);
    });
}
exports.getAllTodoByNick = getAllTodoByNick;
function getTodoById(id) {
    return __awaiter(this, void 0, void 0, function* () {
        return db_1.db.execute(`${COMMON_QUERY} WHERE td.todoId=?`, [id]).then((res) => res[0][0]);
    });
}
exports.getTodoById = getTodoById;
function createTodo(email, todo, nickname) {
    return __awaiter(this, void 0, void 0, function* () {
        return db_1.db
            .execute('INSERT INTO todos (todo,email,createdAt,nickname) VALUES(?,?,?,?)', [
            todo,
            email,
            new Date(),
            nickname,
        ])
            .then((res) => getTodoById(res[0].insertId));
    });
}
exports.createTodo = createTodo;
function updateTodo(id, todo) {
    return __awaiter(this, void 0, void 0, function* () {
        const findedTodo = yield getTodoById(id);
        if (findedTodo) {
            return db_1.db
                .execute('UPDATE todos SET todo=? WHERE todoId=? ', [todo, id])
                .then((res) => getTodoById(id));
        }
        return findedTodo;
    });
}
exports.updateTodo = updateTodo;
function deleteTodo(id) {
    return db_1.db.execute('DELETE FROM todos WHERE todoId=?', [id]);
}
exports.deleteTodo = deleteTodo;
//# sourceMappingURL=todo.js.map