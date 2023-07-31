import { Injectable } from '@nestjs/common';
import { OngsRepository } from '@app/repositories/Ongs/ongs';
import { Ong } from "@domain/Ong's/Ongs";

@Injectable()
export class OngsService {
  constructor(private ongRepository: OngsRepository) {}

  async getAllOngs(): Promise<Ong['props'][] | Error> {
    return this.ongRepository.findAllOngs();
  }
}
