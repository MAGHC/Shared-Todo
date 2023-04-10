"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initIo = exports.Socket = void 0;
const socket_io_1 = require("socket.io");
class Socket {
    constructor(server) {
        this.io = new socket_io_1.Server(server, {
            cors: {
                origin: '*',
            },
        });
        // this.io.use((socket, next) => {
        //   const token = socket.handshake.auth.token;
        //   if (!token) {
        //     return next(new Error('로그인X'));
        //   }
        //   jwt.verify(
        //     token,
        //     config.jwt.secretKey,
        //     (error: jwt.VerifyErrors | null, decoded: string | jwt.JwtPayload | undefined) => {
        //       if (error) {
        //         return next(new Error('토큰문제'));
        //       }
        //       next();
        //     },
        //   );
        // });
        this.io.on('connection', (socket) => {
            console.log('소켓 연결됨');
        });
    }
    static initIo(server) {
        if (!Socket.instance) {
            Socket.instance = new Socket(server);
        }
        return Socket.instance.io;
    }
}
exports.Socket = Socket;
exports.initIo = Socket.initIo;
//# sourceMappingURL=socket.js.map