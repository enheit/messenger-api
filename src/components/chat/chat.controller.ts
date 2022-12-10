import { Request, Response } from 'express'
import { ChatService } from './chat.service.js'

export class ChatController {
  constructor (
    private readonly chatService: ChatService
  ) { }

  async getChats (request: Request, response: Response): Promise<void> {
    const chats = await this.chatService.getChats()

    response.json({
      chats
    })
  }

  async removeChat (request: Request, response: Response): Promise<void> {
    response.sendStatus(200)
  }

  async getMessages (request: Request, response: Response): Promise<void> {
    response.sendStatus(200)
  }

  async addMessage (request: Request, response: Response): Promise<void> {
    response.sendStatus(200)
  }

  async editMessage (request: Request, response: Response): Promise<void> {
    response.sendStatus(200)
  }

  async removeMessage (request: Request, response: Response): Promise<void> {
    response.sendStatus(200)
  }
}
