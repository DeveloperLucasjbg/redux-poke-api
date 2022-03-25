import { useSelector } from "react-redux";
import ItemCard from "../ItemCard";
import PokeShadow from "../PokeShadow";

function ResBuscador() {
  const buscador = useSelector((state) => state.buscador);

  return (
    <div>
      {buscador.pokemon.length === 0 && <PokeShadow />}
      {buscador.loading && (
        <>
          <span className="buscando">Buscando...</span>
        </>
      )}
      {buscador.pokemon.length >= 1 && (
        <div className="">
          {console.log(buscador.pokemon[0].stats)}
          <ItemCard
            stats={buscador.pokemon[0].stats}
            types={buscador.pokemon[0].types}
            name={buscador.pokemon[0].name}
            img={buscador.pokemon[0].sprites.front_default}
          />
        </div>
      )}
      {buscador.error !== "" && (
        <span className="error">i dont know this pokemon</span>
      )}
    </div>
  );
}

export default ResBuscador;
