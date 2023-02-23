export interface Pokemon {
    id: number;
    pokedexId: number;
    name: string;
    image: string;
    apiTypes: {
        name: string;
        image: string;
      }[];
    

}