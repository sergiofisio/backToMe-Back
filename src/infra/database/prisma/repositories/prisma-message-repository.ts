import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Message } from '@domain/message/Message';
import { MessageRepository } from '@app/repositories/Message/message';

@Injectable()
export class PrismaMessagesRepository implements MessageRepository {
  constructor(private prismaService: PrismaService) {}

  async register(message: Message): Promise<string> {
    try {
      const { title,
        content,
        senderId,
        receiverId, } = message.props;

      await this.prismaService.message.create({
        data: {
          
          title,
          content,
          senderId,
          receiverId,
        },
        select: {
          id: true,
        },
      });

      return "Registramos sua mensagem";
    } catch (error) {
      throw new Error('Erro ao registrar messagem');
    }
  }

  async findMessageById(id: string): Promise<any | Error> {
    try {
      const message = await this.prismaService.message.findFirst({
        where: { id },
      });

      if (!message) throw new BadRequestException('Messagem não encontrada');

      return { ...message };
    } catch (error) {
      throw new Error('Erro ao buscar messagem');
    }
  }

  async deleteMessage(messageId: string, senderId: string): Promise<void> {
    try {
      const message = await this.prismaService.message.findUnique({
        where: { id: messageId },
      });

      if (!message) {
        throw new Error('Messagem não encontrada');
      }
        if(message.senderId === senderId){
      await this.prismaService.message.delete({
        where: { id: messageId },
      })}else{
        throw new BadRequestException("Erro ao deletar")
      };
    } catch (error) {
      throw new Error('Erro ao excluir messagem');
    }
  }
}
