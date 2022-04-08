import { useProductsAction } from "../Providers/ProductProviders";

export const Filter = () => {
  const dispatch = useProductsAction();
  return (
    <div>
      <p>filter products based on : </p>
      <div>
        order by
        <select onChange={(e) => dispatch({ type: "filter", event: e })}>
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
