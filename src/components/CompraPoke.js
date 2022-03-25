import { useDispatch } from "react-redux";
import {
  add_pokemon_action,
} from "../redux/actions/pokeShopActions";

const CompraPoke = ({name,img}) => {
  const dispatch = useDispatch();
  return (
    <div className="cardButtons">
      <button
        onClick={() => {
          dispatch(add_pokemon_action(1,name,img));
        }}
      >
        Add
      </button>
    </div>
  );
};

export default CompraPoke;

// CLASS FORM
// class CompraPoke extends Component {
//   render() {
//     return (
//       <div className="cardButtons">
//         <button
//           onClick={() => {
//             this.props.add_pokemon_action(1);
//           }}
//         >
//           Add
//         </button>
//         <button
//           onClick={() => {
//             this.props.take_pokemon_action(1);
//           }}
//         >
//           Take
//         </button>
//       </div>
//     );
//   }
// }

// const mapDispatchProps = {
//   add_pokemon_action,
//   take_pokemon_action,
// };
// export default connect(null, mapDispatchProps)(CompraPoke);
