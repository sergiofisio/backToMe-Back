import { Controller, Get } from '@nestjs/common';
import { OngsService } from '@infra/http/services/Ongs/ongs.service';
import { Ong } from "@domain/Ong's/Ongs";

@Controller('ongs')
export class OngsController {
  constructor(private ongsService: OngsService) {}

  @Get('all')
  async getAllOngs(): Promise<Ong['props'][] | Error> {
    return this.ongsService.getAllOngs();
  }
}
