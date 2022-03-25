import { useSelector } from "react-redux";
import "./index.css";
import PokeInStoreCard from "./PokeInStoreCard";

const PokeInStore = () => {
  const pokemons = useSelector((state) => state.game_shop.pokemons);
  return (
    <div className="pokeInStoreContainer">
      {pokemons.length === 0 ? (
        <div className="emptypokestore">
          <p style={{ color: "white" }}>EMPTY POKSTORE</p>
        </div>
      ) : (
        pokemons.map((e, i) => (
          <PokeInStoreCard key={i} name={e.name} cant={e.cant} img={e.img} />
        ))
      )}
    </div>
  );
};

export default PokeInStore;

// ########### CLASS FORM
// const mapStateToProps = (state) => {
//     return {
//       game_shop: state.game_shop,
//     };
//   };
//   class CantidadPoke extends Component {
//     render() {
//       return <>unidades:{this.props.game_shop.pokemon}</>;
//     }
//   }

//   export default connect(mapStateToProps)(CantidadPoke);
