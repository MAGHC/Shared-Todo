"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
require("express-async-errors");
const todosRouter_1 = __importDefault(require("./router/todosRouter"));
const authRouter_1 = __importDefault(require("./router/authRouter"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use((0, helmet_1.default)());
app.use('/todos', todosRouter_1.default);
app.use('/auth', authRouter_1.default);
app.use((req, res, next) => {
    res.sendStatus(404);
});
app.use((err, req, res, next) => {
    console.error(err);
    res.sendStatus(500);
});
app.listen(8080, () => {
    console.log('hisda');
});
//# sourceMappingURL=app.js.map