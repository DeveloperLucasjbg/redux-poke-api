export const ADD_POKEMON = "ADD_POKEMON";
export const TAKE_POKEMON = "TAKE_POKEMON";

export const add_pokemon_action = (cant,name,img) => {
  return {
    type: ADD_POKEMON,
    payload: {name,cant,img},
  };
};

export const take_pokemon_action = (name) => {
  return {
    type: TAKE_POKEMON,
    payload: name,
  };
};
