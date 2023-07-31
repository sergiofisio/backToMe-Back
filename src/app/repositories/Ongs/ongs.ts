import { Ong } from "@domain/Ong's/Ongs";

export abstract class OngsRepository {
  abstract findAllOngs(): Promise<Ong['props'][]>;
}
