import express from 'express';
import * as authController from '../controller/authController';

import { isAuth } from '../middleware/auth';

const router = express.Router();

router.post('/regist', authController.postRegist);

router.post('/login', authController.postLogin);

router.get('/check', isAuth, authController.getCheck);

export default router;
