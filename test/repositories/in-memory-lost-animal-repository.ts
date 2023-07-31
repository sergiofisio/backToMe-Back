import { LostAnimalsRepository } from '@app/repositories/LostAnimals/lost-animals';
import { LostAnimal } from '@domain/LostAnimal/LostAnimal';
import { NotFoundException } from '@nestjs/common';

export class inMemoryLostAnimalRepository implements LostAnimalsRepository {
  public lostAnimals: LostAnimal[] = [];

  async create(animal: LostAnimal): Promise<void> {
    this.lostAnimals.push(animal);
  }

  async find(): Promise<LostAnimal['props'][] | Error> {
    if (this.lostAnimals.length < 1) {
      return new NotFoundException('There are no lost animals to list');
    }

    return this.lostAnimals.map((lostAnimal) => lostAnimal.props);
  }
}
