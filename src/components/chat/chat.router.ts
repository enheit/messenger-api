import { Router } from 'express'
import { ChatController } from './chat.controller.js'
import { ChatService } from './chat.service.js'

const chatController = new ChatController(new ChatService())

export const chatRouter = Router()

/* eslint-disable @typescript-eslint/no-misused-promises */
chatRouter.get('/', chatController.getChats.bind(chatController))
chatRouter.delete('/:chatId', chatController.removeChat.bind(chatController))

chatRouter.post('/:chatId/messages', chatController.addMessage.bind(chatController))
chatRouter.get('/:chatId/messages', chatController.getMessages.bind(chatController))
chatRouter.delete('/:chatId/messages/:messageId', chatController.removeMessage.bind(chatController))
chatRouter.put('/:chatId/messages/:messageId', chatController.editMessage.bind(chatController))
