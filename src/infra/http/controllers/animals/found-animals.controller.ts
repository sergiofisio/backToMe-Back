import { RegisterFoundAnimalDTO } from '@infra/http/dtos/FoundAnimal/registerFoundAnimal.dto';
import { FoundAnimalService } from '@infra/http/services/animals/FoundAnimals/found-animals.service';
import { Body, Controller, Post } from '@nestjs/common';

@Controller('animals-found')
export class FoundAnimalsController {
  constructor(private foundAnimalSerivce: FoundAnimalService) {}

  @Post('registered')
  async register(@Body() registerFoundAnimalDTO: RegisterFoundAnimalDTO) {
    return await this.foundAnimalSerivce.register(registerFoundAnimalDTO);
  }
}
