const { Router } = require('express');

const authController = require('../controllers/auth.controller');

const authRouter = Router();

authRouter.post('/auth/login', authController.login);
authRouter.post('/auth/register', authController.register);
authRouter.post('/auth/refresh-token', authController.refresh);

module.exports = authRouter;