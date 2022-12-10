import { Request, Response } from 'express'
import { AuthService } from './auth.service.js'

export class AuthController {
  constructor (
    private readonly authService: AuthService
  ) { }

  async signIn (request: Request, response: Response): Promise<void> {
    await this.authService.signIn()

    response.sendStatus(200)
  }

  async signUp (request: Request, response: Response): Promise<void> {
    await this.authService.signUp()

    response.sendStatus(200)
  }

  async signOut (request: Request, response: Response): Promise<void> {
    await this.authService.signOut()

    response.sendStatus(200)
  }
}
