import logo from "./img/pokeapiLogo.png";
import "./App.css";
import store from "./redux/store";
import { Provider } from "react-redux";
import Buscador from "./components/buscador/Buscador";
import ResBuscador from "./components/buscador/ResBuscador";
import PokesInStore from "./components/PokesInStore";

function App() {
  // const pokemons = useSelector((state) => state.game_shop.pokemons);
  // store.subscribe(() => {
  // console.log(store.getState().game_shop);
  // });
  return (
    <Provider store={store}>
      <div className="App">
        <section className="App-section">
          <div style={{ display: "flex", margin: "1em 0" }}>
            <img src={ logo} className="App-logo" alt="logo" />
            <p style={{ marginLeft: "1em" }}>Redux-Thunk PokeApi</p>
          </div>
          <Buscador />
          <ResBuscador />
          <PokesInStore />
        </section>
      </div>
    </Provider>
  );
}

export default App;
