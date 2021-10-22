export interface ListI {
  name: string;
  url: string;
}

export interface ApiResponseI {
  count: number;
  next: string | null;
  previous: string | null;
  results: ListI[];
}

export interface ContextI {
  myPokeList: any[];
}

export interface PokemonDetailI {
  name: string;
  abilitties: string;
  type: string;
}
