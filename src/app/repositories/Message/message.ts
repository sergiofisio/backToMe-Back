import { Message } from '@domain/message/Message';
import { EditMessageDTO } from '@infra/http/dtos/Message/editMessage.dto';

export abstract class MessageRepository {
  abstract register(message: Message): Promise<string>;

  abstract findMessageById(messageId: string): Promise<Message>;

  abstract deleteMessage(messageId: string,senderId:string): Promise<void>
}
