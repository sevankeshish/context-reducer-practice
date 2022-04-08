import { useState } from "react";
import { useProductsAction } from "../Providers/ProductProviders";

export const Filter = () => {
  const [value, setValue] = useState("");
  const dispatch = useProductsAction();

  const changeHandler = (e) => {
    dispatch({ type: "filter", event: e });
    setValue(e.target.value);
    console.log("sevan", value);
  };
  return (
    <div>
      <p>filter products based on : </p>
      <div>
        order by
        <select onChange={changeHandler} value={value}>
          {/* <select onChange={(e) => dispatch({ type: "filter", event: e })}> */}
          {/* <select onChange={(e) => console.log(e.target.value)}> */}
          <option value="">ALL</option>
          <option value="S">S</option>
          <option value="XS">XS</option>
          <option value="M">M</option>
          <option value="L">L</option>
          <option value="X">X</option>
          <option value="XL">XL</option>
          <option value="XLL">XLL</option>
        </select>
      </div>
    </div>
  );
};
