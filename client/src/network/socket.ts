// import socket from 'socket.io-client';

// import { Todo } from '../type/todo';

// export default class SocketClass {
//   io;

//   constructor(getToken: string | null) {
//     this.io = socket('http://localhost:8080', {
//       auth: (callback) => callback({ token: getToken }),
//       transports: ['websocket'],
//     });

//     this.io.on('connect', () => {
//       console.log(`connect`);
//     });

//     this.io.on('connect_error', (err) => {
//       console.group('socket err', err.message);
//     });
//   }

//   onSync(event: string, callback: (msg: Todo) => void) {
//     if (!this.io.connected) {
//       this.io.connect();
//     }
//     this.io.on(event, (msg: Todo) => callback(msg));
//     return () => this.io.off(event); // 꺼주는 코드
//   }
// }

export {};
