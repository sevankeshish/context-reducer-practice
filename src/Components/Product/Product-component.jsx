import "./product-style.scss";
import { BiTrash } from "react-icons/bi";
import { useEffect, useContext } from "react";
import { UserContext, websiteContext } from "../../App";

// export default class Product extends Component{
//   componentWillUnmount() {
//     console.log("Product.js componentWillUnmount");
//   }
//   render(){
//     console.log("Product render");
//     return (
//       <div className="product-style">
//       </div>
//     );
//   }
// }

export const Product = ({
  items,
  onChange,
  onDecrement,
  onIncrement,
  onDelete,
}) => {
  //CDM + CDU + CWUM => useEffect
  useEffect(() => {
    console.log("Product js useEffect");
    return () => {
      //clean up => timer,interval ,...
      console.log("Product CWUM");
    };
  }, []);
  // console.log(props);

  // const user = useContext(UserContext);
  // const web = useContext(websiteContext);
  // console.log(user, web);

  return (
    <div className="product-style">
      {/* <p>product name : {props.name}</p>
      <p>product price : {props.price}</p>
      <button onClick={props.onDelete}>Delete</button> */}
      <p>product name : {items.title}</p>
      <p>product price : {items.price}</p>
      <span className="value">{items.quantity}</span>
      <input
        className="input"
        type="text"
        onChange={onChange}
        value={items.title}
      />
      <button
        onClick={onDecrement}
        className={`${items.quantity <= 1 ? "trash-icon" : null} decrement`}
        // className={`${props.items.quantity <= 1 && "trash-icon"} decrement`}
      >
        {items.quantity > 1 ? "-" : <BiTrash />}
      </button>
      <button onClick={onIncrement} className="increment">
        +
      </button>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
};
