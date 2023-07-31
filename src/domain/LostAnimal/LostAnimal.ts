import { Animal, AnimalProps } from '@domain/Animal/Animal';
import { z } from 'zod';

interface LostAnimalProps extends AnimalProps {
  species: string;
  race: string;
  age: string;
  color: string;
  size: string;
  distinctive_characteristics: string;
  date_loss: string;
  location_loss: string;
  userId: string;
}

export class LostAnimal extends Animal {
  props: LostAnimalProps;

  constructor(animalProps: LostAnimalProps) {
    super(
      z.object({
        species: z.string({ required_error: 'Espécie não foi informada' }),
        race: z.string({ required_error: 'Raça não foi informada' }),
        age: z.string({ required_error: 'Idade não foi informada' }),
        color: z.string({ required_error: 'Cor não foi informada' }),
        size: z.string({ required_error: 'Tamanho não foi informado' }),
        distinctive_characteristics: z.string({
          required_error: 'Características não foram informadas',
        }),
        date_loss: z.string({
          required_error: 'Data da perda não foi informada',
        }),
        location_loss: z.string({
          required_error: 'Localização da perda não foi informada',
        }),
        userId: z.string({
          required_error: 'Identificação do usuário não foi informada',
        }),
      }),
    );

    const newAnimal = this.handle(animalProps);

    this.props = newAnimal.body;
  }
}
