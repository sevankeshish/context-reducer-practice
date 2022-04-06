import { Product } from "../Product/Product-component";
import { useProducts, useProductsAction } from "../Providers/ProductProviders";
import "./ProductList-style.scss";

export const ProductList = (props) => {
  const dispatch = useProductsAction();
  const products = useProducts();

  if (products.length === 0) return <div>there is no product in the cart</div>;
  return (
    <div className="ProductList-style">
      {/* {!this.state.products.length && <div>go to shoppings</div>} */}
      {products.map((product) => (
        <Product
          key={product.id}
          items={product}
          onDelete={() => dispatch({ type: "remove", id: product.id })}
          onIncrement={() => dispatch({ type: "increment", id: product.id })}
          onChange={(e) => dispatch({ type: "edit", id: product.id, event: e })}
          onDecrement={() => dispatch({ type: "decrement", id: product.id })}
        />
      ))}
    </div>
  );
};

export default ProductList;
