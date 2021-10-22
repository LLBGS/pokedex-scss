import { ListI } from '../interfaces/PokemonI';

export type ApiFindByNameReponseT = Partial<{
  species: { name: string; url: string };
}> | null;

export type ApiFindByTypeResponseT = Partial<{
  pokemon: {
    pokemon: ListI;
  }[];
} | null>;
