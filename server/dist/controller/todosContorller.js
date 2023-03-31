"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
exports.putTodo = exports.delTodo = exports.postTodo = exports.getByIdParam = exports.getTodos = void 0;
const todoModel = __importStar(require("../model/todo"));
const todos_1 = require("./../utils/todos");
function getTodos(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const nickname = req.query.nickname;
        const data = nickname
            ? yield todoModel.getAllTodoByNick(nickname)
            : yield todoModel.getAllTodos();
        res.status(200).json(data);
    });
}
exports.getTodos = getTodos;
function getByIdParam(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const id = req.params.id;
        const isExist = yield todoModel.getTodoById(id);
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
        const newTodo = yield todoModel.createTodo(email, todo, nickname);
        res.status(201).json(newTodo);
    });
}
exports.postTodo = postTodo;
function delTodo(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const id = req.params.id;
        const isExist = yield todoModel.getTodoById(id);
        if (isExist) {
            todoModel.deleteTodo(id);
            res.send(204);
        }
        else {
            res.status(404).json({ message: todos_1.TODOS_ERRORS.NOT_FOUND_TODO });
        }
    });
}
exports.delTodo = delTodo;
function putTodo(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id } = req.params;
        const { todo } = req.body;
        const isExist = yield todoModel.getTodoById(id);
        if (isExist) {
            isExist.todo = todo;
            res.status(200).json(isExist);
        }
        else {
            res.status(404).json({ message: todos_1.TODOS_ERRORS.NOT_FOUND_TODO });
        }
    });
}
exports.putTodo = putTodo;
//# sourceMappingURL=todosContorller.js.map