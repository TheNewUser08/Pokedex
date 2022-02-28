export default interface PokemonBase {
  name: string;
  url: string;
  img: string;
  id: number;
  types: [
    {
      type: {
        name: string;
      };
    },
  ];
}
