export interface PokemonInterface {
  abilities: [
    {
      ability: {
        name: string;
      };
    },
  ];
  base_experience: number;
  name: string;
  moves: [
    {
      move: {
        name: string;
      };
    },
  ];
  sprites: {
    front_default: string;
  };
  stats: [
    {
      base_stat: number;
      stat: {
        name: string;
      };
    },
  ];
  types: [
    {
      type: {
        name: string;
      };
    },
  ];
  weight: number;
  height: number;
}
