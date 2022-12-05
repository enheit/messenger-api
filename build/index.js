import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import { App } from './app.js';
import { AuthController } from './auth/auth.controller.js';
import { AuthMiddleware } from './auth/auth.middleware.js';
import { AuthService } from './auth/auth.service.js';
import { CognitoService } from './auth/cognito.service.js';
dotenv.config();
const app = new App({
    middlewares: [
        bodyParser.json()
    ],
    controllers: [
        new AuthController(new AuthService(new CognitoService()), new AuthMiddleware())
    ]
});
app.bootstrap();
