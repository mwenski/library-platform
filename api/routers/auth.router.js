const { Router } = require('express');

const authController = require('../controllers/auth.controller');

const authRouter = Router();

authRouter.post('/login', authController.login);
authRouter.post('/register', authController.register);
authRouter.post('/refresh-token', authController.refresh);

module.exports = authRouter;