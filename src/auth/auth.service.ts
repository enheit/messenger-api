import { CognitoService } from './cognito.service.js'

export class AuthService {
  constructor (private readonly cognitoService: CognitoService) {}

  async signIn (): Promise<void> {
    return await this.cognitoService.signIn()
  }

  async signUp (): Promise<void> {
    return await this.cognitoService.signUp()
  }

  async signOut (): Promise<void> {
    return await this.cognitoService.signOut()
  }
}
