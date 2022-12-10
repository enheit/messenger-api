import bodyParser from 'body-parser'
import dotenv from 'dotenv'
import express from 'express'

import { authRouter } from './components/auth/auth.router.js'
import { chatRouter } from './components/chat/chat.router.js'
import { userRouter } from './components/user/user.router.js'

dotenv.config()

const app = express()

app.use(bodyParser.json())

app.use('/auth', authRouter)
app.use('/chats', chatRouter)
app.use('/user', userRouter)

const port = Number(process.env.PORT ?? 3000)

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})
