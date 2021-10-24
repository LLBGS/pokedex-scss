import { ListI } from '../interfaces/PokemonI';

export type ApiFindByNameReponseT = Partial<{
  id: number;
  name: string;
  abilities: {
    is_hidden: boolean;
    ability: Ability;
    slot: number;
  }[];
  types: { slot: number; type: Type }[];
  species: { name: string; url: string };
  sprites: {
    front_default: string;
  };
  stats: {
    base_stat: number;
    effort: number;
    stat: {
      name: string;
      url: string;
    };
  }[];
}> | null;

export type ApiFindByTypeResponseT = Partial<{
  pokemon: {
    pokemon: ListI;
  }[];
} | null>;

export type Ability = {
  name: string;
  url: string;
};

export type Type = {
  name: string;
  url: string;
};
