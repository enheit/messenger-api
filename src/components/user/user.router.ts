import { Router } from 'express'
import { UserController } from './user.controller.js'
import { UserService } from './user.service.js'

const userController = new UserController(new UserService())

export const userRouter = Router()

/* eslint-disable @typescript-eslint/no-misused-promises */
userRouter.put('/', userController.changeInformation.bind(userController))
userRouter.put('/avatar', userController.changeAvatar.bind(userController))
