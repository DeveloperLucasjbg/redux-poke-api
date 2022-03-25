import { ADD_POKEMON, TAKE_POKEMON } from "../actions/pokeShopActions";

const default_game_shop = {
  pokemons: [],
};
const game_shop = (state = default_game_shop, action) => {
  switch (action.type) {
    case ADD_POKEMON: {
      let name = action.payload.name;
      let cant = action.payload.cant.toString();
      let img = action.payload.img;
      return {
        pokemons: [...state.pokemons, { name: name, cant:cant, img: img }],
      };
    }
    case TAKE_POKEMON: {
      let copyState = state.pokemons;
      copyState = copyState.filter((e) => e.name !== action.payload);
      return {
        pokemons: copyState,
      };
    }
    default:
      return state;
  }
};

export default game_shop;
