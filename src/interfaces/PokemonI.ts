export interface ListI {
  name: string;
  url: string;
}

export interface MyPokeList extends ListI {
  imageUrl: string;
}

export interface ApiResponseI {
  count: number;
  next: string | null;
  previous: string | null;
  results: ListI[];
}

export interface ContextI {
  myPokeList: MyPokeList[];
}

export interface PokemonDetailI {
  name: string;
  abilitties: string;
  type: string;
}
