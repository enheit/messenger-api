import { Request, Response, Router } from 'express'
import { AuthMiddleware } from './auth.middleware.js'
import { AuthService } from './auth.service.js'

export class AuthController {
  readonly path = '/auth'
  readonly router: Router

  constructor (
    private readonly authService: AuthService,
    private readonly authMiddleware: AuthMiddleware
  ) {
    this.router = Router()

    this.router.use(this.authMiddleware.verifyToken)

    /* eslint-disable @typescript-eslint/no-misused-promises */
    this.router.post('/sign-in', this.signIn.bind(this))
    this.router.post('/sign-up', this.signUp.bind(this))
    this.router.delete('/sign-out', this.signOut.bind(this))
    /* eslint-enable @typescript-eslint/no-misused-promises */
  }

  async signIn (request: Request, response: Response): Promise<void> {
    await this.authService.signIn()

    response.sendStatus(200)
  }

  async signUp (reqeust: Request, response: Response): Promise<void> {
    await this.authService.signUp()

    response.sendStatus(200)
  }

  async signOut (request: Request, response: Response): Promise<void> {
    await this.authService.signOut()

    response.sendStatus(200)
  }
}
