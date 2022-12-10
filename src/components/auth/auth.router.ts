import { Router } from 'express'
import { AuthController } from './auth.controller.js'
import { AuthService } from './auth.service.js'

const authController = new AuthController(new AuthService())

export const authRouter = Router()

/* eslint-disable @typescript-eslint/no-misused-promises */
authRouter.post('/sign-in', authController.signIn.bind(authController))
authRouter.post('/sign-up', authController.signUp.bind(authController))
authRouter.delete('/sign-out', authController.signOut.bind(authController))
