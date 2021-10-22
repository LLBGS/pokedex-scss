import { ApiResponseI, ListI } from '../interfaces/PokemonI';
import { Api } from '../services/Api';
import {
  ApiFindByNameReponseT,
  ApiFindByTypeResponseT,
} from '../types/PokemonT';

export const PokemonRepository = {
  findAllPokemons: async (offset: number, limit = 10) => {
    try {
      const { data } = await Api.get<ApiResponseI>('/pokemon', {
        params: {
          limit,
          offset,
        },
      });
      return data;
    } catch (error) {
      throw new Error(`It is not possible to return to the pokémons list`);
    }
  },

  findPokemonByName: async (name: string) => {
    try {
      const { data } = await Api.get<ApiFindByNameReponseT>(`/pokemon/${name}`);
      return data;
    } catch (error) {
      console.error('Pokemon name not found ::>', error);
      return null;
    }
  },

  findAllTypes: async () => {
    try {
      const { data } = await Api.get<ApiResponseI>(`/type`);
      return data;
    } catch (error) {
      console.error('Pokemon Type Not Found ::>', error);
      return null;
    }
  },

  findAllAbilities: async () => {
    try {
      const { data } = await Api.get<ApiResponseI>('/ability');
      return data;
    } catch (error) {
      console.error('Pokemon Ability not Found ::>', error);
      return null;
    }
  },

  findByType: async (type: string) => {
    try {
      const { data } = await Api.get<ApiFindByTypeResponseT>(`/type/${type}`);
      if (data?.pokemon) {
        const newData = data?.pokemon.map((data) => {
          return {
            name: data.pokemon.name,
            url: data.pokemon.url,
          };
        });
        return newData;
      }
    } catch (error) {
      console.error('No Pokemons with this type were found ::> ', error);
      return null;
    }
  },

  findByAbility: async (ability: string) => {
    try {
      const { data } = await Api.get<ApiFindByTypeResponseT>(
        `/ability/${ability}`
      );
      if (data?.pokemon) {
        const newData = data?.pokemon.map((data) => {
          return {
            name: data.pokemon.name,
            url: data.pokemon.url,
          };
        });
        return newData;
      }
    } catch (error) {
      console.error('No Pokemons with this ability were found ::> ', error);
      return null;
    }
  },
};
