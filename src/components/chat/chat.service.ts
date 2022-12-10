
interface ChatModel {
  id: number
}

export class ChatService {
  async getChats (): Promise<ChatModel[]> {
    const chats = [
      {
        id: 1
      },
      {
        id: 2
      },
      {
        id: 3
      }
    ]

    return await Promise.resolve(chats)
  }

  async removeChat (): Promise<void> {

  }

  async addMessage (): Promise<void> {

  }

  async getMessages (): Promise<void> {

  }

  async editMessage (): Promise<void> {

  }

  async removeMessage (): Promise<void> {

  }
}
