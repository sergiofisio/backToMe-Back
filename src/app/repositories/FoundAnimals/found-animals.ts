import { FoundAnimal } from '@domain/AnimalFound/FoundAnimal';

export abstract class FoundAnimalsRepository {
  abstract create(animal: FoundAnimal): Promise<void>;
}
