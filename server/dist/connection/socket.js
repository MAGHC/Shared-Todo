"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.io = exports.Socket = void 0;
const socket_io_1 = require("socket.io");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = require("../config");
const express_1 = __importDefault(require("express"));
class Socket {
    constructor(server) {
        this.io = new socket_io_1.Server(server, {
            cors: {
                origin: '*',
            },
        });
        this.io.use((socket, next) => {
            const token = socket.handshake.auth.token;
            if (token) {
                return next(new Error('로그인X'));
            }
            jsonwebtoken_1.default.verify(token, config_1.config.jwt.secretKey, (error, decoded) => {
                if (error) {
                    return next(new Error('토큰문제'));
                }
                next();
            });
        });
        this.io.on('connect', (socket) => {
            console.log('소켓연결성공');
        });
    }
    static getIo() {
        if (!Socket.instance) {
            const app = (0, express_1.default)();
            const server = app.listen(config_1.config.host.port);
            Socket.instance = new Socket(server);
        }
        return Socket.instance;
    }
}
exports.Socket = Socket;
exports.io = Socket.getIo();
//# sourceMappingURL=socket.js.map