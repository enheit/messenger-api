import { Request, Response } from 'express'
import { UserService } from './user.service.js'

export class UserController {
  constructor (private readonly userService: UserService) {

  }

  async changeInformation (request: Request, response: Response): Promise<void> {
    await this.userService.changeInformation()

    response.sendStatus(200)
  }

  async changeAvatar (request: Request, response: Response): Promise<void> {
    await this.userService.changeAvatar()

    response.sendStatus(200)
  }
}
