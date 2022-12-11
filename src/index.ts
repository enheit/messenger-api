import bodyParser from 'body-parser'
import dotenv from 'dotenv'
import express from 'express'
import { MongoClient } from 'mongodb'

import { authRouter } from './components/auth/auth.router.js'
import { chatRouter } from './components/chat/chat.router.js'
import { userRouter } from './components/user/user.router.js'

dotenv.config()

export const mongoClient = new MongoClient(process.env.DATABASE_URL as string)

await mongoClient.connect()

const db = mongoClient.db('messenger-db')

const session = mongoClient.startSession()

try {
  await session.withTransaction(async () => {
    await db.collection('users').insertOne({ name: 'Oleh' }, { session })

    await db.collection('orders').insertOne({ orderFor: 'Oleh' }, { session })
  })
} catch (error) {
  console.log(error)
} finally {
  await session.endSession()
}

await db.collection('users').insertOne({ name: 'Roman' })

const app = express()

app.use(bodyParser.json())

app.use('/auth', authRouter)
app.use('/chats', chatRouter)
app.use('/user', userRouter)

const port = Number(process.env.PORT ?? 3000)

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})
