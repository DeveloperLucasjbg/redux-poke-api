import "./index.css";
import pokeShadow from "../img/pokeShadow.png";

const PokeShadow = () => {
  return (
    <div className="cardContainer">
      <img className=".cardContainer" style={{maxWidth:'6.5em'}} src={pokeShadow} alt="poke-Sprite" />
      <h3 className="pokeName">UnknowPoke</h3>
    </div>
  );
};

export default PokeShadow;
