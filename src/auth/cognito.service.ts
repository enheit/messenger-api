
export class CognitoService {
  async signIn (): Promise<void> {
    return await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve()
      }, 5000)
    })
  }

  async signUp (): Promise<void> {
    return await Promise.resolve()
  }

  async signOut (): Promise<void> {
    return await Promise.resolve()
  }
}
