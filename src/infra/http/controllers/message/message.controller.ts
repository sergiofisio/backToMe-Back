import { MessageService } from '@infra/http/services/message/message.service';
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';

@Controller('message')
export class MessagesController {
  constructor(private readonly messageService: MessageService) {}

  @Post('send')
  async createMessage(@Body() message: any) {
    return this.messageService.createMessage(message);
  }


  @Get(':id/find')
  async findMessageById(@Param('id') id: string) {
    return this.messageService.findMessageById(id);
  }


  @Delete(':id/delete')
  async deleteMessage(@Param('messageId') messageId: string,@Param('senderId')senderId: string) {
    return this.messageService.deleteMessage(messageId,senderId);
  }
}
