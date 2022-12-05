import { NextFunction, Request, Response } from 'express'

export class AuthMiddleware {
  verifyToken (request: Request, response: Response, next: NextFunction): void {
    next()
  }
}
