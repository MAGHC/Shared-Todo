import express from 'express';
import * as todosController from '../controller/todosContorller';

const router = express.Router();

router.get('/', todosController.getTodos);

export default router;
