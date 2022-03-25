import "./index.css";
import CompraPoke from "./CompraPoke";
import PokeTypes from "./PokeTypes";
import PokeStats from "./PokeStats";

const ItemCard = ({ name, img, id, types, stats }) => {
  return (
    <div className="cardContainer">
      <h3 className="pokeName">{name}</h3>
      <img src={img} alt="pokeSprite" />
      <p className="poke-id">{id}</p>
      <PokeTypes types={types} />
      <PokeStats stats={stats} />
      <CompraPoke name={name} img={img} />
    </div>
  );
};

export default ItemCard;
