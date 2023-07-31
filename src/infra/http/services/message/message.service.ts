import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import { MessageRepository } from '@app/repositories/Message/message';
import { Message, } from '@domain/message/Message';

@Injectable()
export class MessageService {
  constructor(private messageRepository: MessageRepository) {}

  async createMessage(message: any): Promise<string> {
    

    const newMessage = new Message(message);

    const messageId = await this.messageRepository.register(newMessage); 

    return messageId;
  }

  async findMessageById(messageId: string) {
    if (!messageId) {
      throw new BadRequestException('Identificação de mensagem inválida');
    }
    const message = await this.messageRepository.findMessageById(messageId);
    if (!('senderId' in message)) {
      throw new BadRequestException('Mensagem não encontrado');
    }
    return message;
  }

  async deleteMessage(messageId: string, senderId: string): Promise<void> {
    const message = await this.messageRepository.findMessageById(messageId);

    if (!message) {
      throw new NotFoundException('Message not found');
    }

    await this.messageRepository.deleteMessage(messageId, senderId);
  }
}
