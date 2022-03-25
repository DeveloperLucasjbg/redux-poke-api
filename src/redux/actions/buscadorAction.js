import axios from "axios";
export const FETCH_POKEMON_REQUEST = "fetch_pokemon_request";
export const FETCH_POKEMON_SUCCESS = "fetch_pokemon_success";
export const FETCH_POKEMON_FAILURE = "fetch_pokemon_failure";

//Action

export const fetchPokemonRequest = () => {
  return {
    type: FETCH_POKEMON_REQUEST,
  };
};
export const fetchPokemonSuccess = (Pokemon) => {
  return {
    type: FETCH_POKEMON_SUCCESS,
    payload: Pokemon,
  };
};
export const fetchPokemonFailure = (err) => {
  return {
    type: FETCH_POKEMON_FAILURE,
    payload: err,
  };
};

const fetchPokemon = (value) => {
  return (dispatch) => {
    dispatch(fetchPokemonRequest());
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${value}`)
      .then((res) => {
        dispatch(fetchPokemonSuccess([res.data]));
      })
      .catch((err) => {
        dispatch(fetchPokemonFailure("no se encontro el pokemon"));
      });
  };
};
export default fetchPokemon;
