import express from 'express';
import * as todosController from '../controller/todosContorller';
import { isAuth } from '../middleware/auth';

const router = express.Router();

router.get('/', isAuth, todosController.getTodos);

router.get('/:id', isAuth, todosController.getByIdParam);

router.post('/', isAuth, todosController.postTodo);

router.delete('/:id', isAuth, todosController.delTodo);

router.put('/:id', isAuth, todosController.putTodo);

export default router;
