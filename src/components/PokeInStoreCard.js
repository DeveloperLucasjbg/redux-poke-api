import "./index.css";

import { useDispatch } from "react-redux";
import { take_pokemon_action } from "../redux/actions/pokeShopActions";
function PokeInStoreCard({ name, img }) {
  const dispatch = useDispatch();

  return (
    <div className="PokeInStoreCard cardButtons">
      <img src={img} alt={name} />
      <h4>{name}</h4>
      <button
        onClick={() => {
          dispatch(take_pokemon_action(name));
        }}
      >
       take
      </button>
    </div>
  );
}

export default PokeInStoreCard;
