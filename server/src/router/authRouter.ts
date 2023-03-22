import express from 'express';
import * as authController from '../controller/authController';

const router = express.Router();

router.post('/regist', authController.postRegist);

router.post('/login', authController.postLogin);

router.get('/check', authController.getCheck);

export default router;
