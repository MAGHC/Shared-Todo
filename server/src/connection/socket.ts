import { Server } from 'socket.io';
import jwt from 'jsonwebtoken';

export class Socket {
  io;

  private static instance: Socket;

  private constructor(server: any) {
    this.io = new Server(server, {
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

  public static initIo(server?: any) {
    if (!Socket.instance) {
      Socket.instance = new Socket(server);
    }
    return Socket.instance.io;
  }
}

export let initIo = Socket.initIo;
