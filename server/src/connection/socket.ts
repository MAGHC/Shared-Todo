import { Server } from 'socket.io';
import jwt from 'jsonwebtoken';
import { config } from '../config';
import express from 'express';

export class Socket {
  io;

  private static instance: Socket;

  private constructor(server: any) {
    this.io = new Server(server, {
      cors: {
        origin: '*',
      },
    });

    this.io.use((socket, next) => {
      const token = socket.handshake.auth.token;

      if (token) {
        return next(new Error('로그인X'));
      }
      jwt.verify(
        token,
        config.jwt.secretKey,
        (error: jwt.VerifyErrors | null, decoded: string | jwt.JwtPayload | undefined) => {
          if (error) {
            return next(new Error('토큰문제'));
          }
          next();
        },
      );
    });
    this.io.on('connect', (socket) => {
      console.log('소켓연결성공');
    });
  }

  public static getIo() {
    if (!Socket.instance) {
      const app = express();
      const server = app.listen(config.host.port);
      Socket.instance = new Socket(server);
    }

    return Socket.instance;
  }
}

export let io = Socket.getIo();
