import express from 'express';
export class App {
    app;
    constructor(config) {
        this.app = express();
        this.initializeMiddlewares(config);
        this.initializeControllers(config);
    }
    initializeMiddlewares(config) {
        config.middlewares.forEach(middleware => {
            this.app.use(middleware);
        });
    }
    initializeControllers(config) {
        config.controllers.forEach(controller => {
            this.app.use(controller.path, controller.router);
        });
    }
    bootstrap() {
        const port = Number(process.env.PORT ?? 8080);
        this.app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });
    }
}
