import { Module } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { PrismaMessagesRepository } from './prisma-message-repository';
import { MessageRepository } from '@app/repositories/Message/message';

@Module({
  providers: [
    PrismaService,
    { provide: MessageRepository, useClass: PrismaMessagesRepository },
  ],
  exports: [{ provide: MessageRepository, useClass: PrismaMessagesRepository }],
})
export class MessagesDatabaseModule {}
