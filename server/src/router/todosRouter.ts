import express from 'express';
import * as todosController from '../controller/todosContorller';

const router = express.Router();

router.get('/', todosController.getTodos);

router.get('/:id', todosController.getByIdParam);

router.post('/', todosController.postTodo);

router.delete('/:id', todosController.delTodo);

export default router;
