import { inMemoryAdoptionAnimalsRepository } from '@test/repositories/in-memory-adoption-animal-repository';
import { AdoptionAnimalsService } from './adoption-animals.service';

describe('Adoption Animal', () => {
  it('should register a animal to adoption', async () => {
    const adoptionAnimalsRepository = new inMemoryAdoptionAnimalsRepository();
    const adoptionAnimalsService = new AdoptionAnimalsService(
      adoptionAnimalsRepository,
    );

    const sud = {
      species: 'any_specie',
      race: 'any_race',
      age: 'Filhote',
      color: 'any_color',
      size: 'any_size',
      distinctive_characteristics: 'any_characteristic',
      personality_description: 'any_description',
      userId: 'any_id',
    };
    await adoptionAnimalsService.register(sud);

    expect(adoptionAnimalsRepository.adoptionAnimals.length).toBe(1);
    expect(adoptionAnimalsRepository.adoptionAnimals[0].props).toEqual(sud);
  });
});
