import express, { Express, Router } from 'express'

interface AppConfig {
  controllers: Array<{ router: Router, path: string }>
  middlewares: any[]
}

export class App {
  app: Express

  constructor (config: AppConfig) {
    this.app = express()

    this.initializeMiddlewares(config)
    this.initializeControllers(config)
  }

  private initializeMiddlewares (config: AppConfig): void {
    config.middlewares.forEach(middleware => {
      this.app.use(middleware)
    })
  }

  private initializeControllers (config: AppConfig): void {
    config.controllers.forEach(controller => {
      this.app.use(controller.path, controller.router)
    })
  }

  bootstrap (): void {
    const port = Number(process.env.PORT ?? 8080)

    this.app.listen(port, () => {
      console.log(`Server is running on port ${port}`)
    })
  }
}
