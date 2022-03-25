import "./index.css";
import { useDispatch } from "react-redux";
import { useState } from "react";
import fetchPokemon from "../../redux/actions/buscadorAction";

const Buscador = () => {
  const [pokemon_name, setPokemon_name] = useState("ho-oh");
  const dispatch = useDispatch();
  
  return (
    <div>
      <input
        style={{ padding: "0.4em", borderRadius: "0.6em" }}
        type="text"
        id="buscar"
        placeholder=" buscar poke"
        value={pokemon_name}
        onChange={(event) => {
          setPokemon_name(event.target.value.toLowerCase());
        }}
      />
      <button
        style={{ padding: "0.3em", borderRadius: "0.6em" }}
        onClick={() => {
          dispatch(fetchPokemon(pokemon_name || null));
        }}
        className="button"
      >
        Buscar
      </button>
    </div>
  );
};

export default Buscador;
