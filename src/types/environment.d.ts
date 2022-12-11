export {}

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PORT: string | undefined
      DATABASE_URL: string | undefined
    }
  }
}
