import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

import './index.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import AuthContextProvider from './context/AuthContextProvider';
import TodoPage from './pages/TodoPage';
import EventBusProvider from './context/EventBusProvider';
// import socket from 'socket.io-client';

// const io = socket('localhost:8080');

// io.on('todo', (msg) => {
//   console.log(msg, '확인 들어와랑');
// });

const router = createBrowserRouter([
  {
    path: '/',
    children: [
      {
        index: true,
        element: <TodoPage></TodoPage>,
      },
    ],
  },
]);

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <EventBusProvider>
        <AuthContextProvider>
          <RouterProvider router={router}></RouterProvider>
        </AuthContextProvider>
      </EventBusProvider>
    </QueryClientProvider>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
