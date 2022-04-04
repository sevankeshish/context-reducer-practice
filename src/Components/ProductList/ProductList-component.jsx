import { Product } from "../Product/Product-component";
import { useProducts, useProductsAction } from "../Providers/ProductProviders";
import "./ProductList-style.scss";

export const ProductList = (props) => {
  const { changeHandler, decrementHandler, removeHandler, incrementHandler } =
    useProductsAction();
  const products = useProducts();

  if (products.length === 0) return <div>there is no product in the cart</div>;
  return (
    <div className="ProductList-style">
      {/* {!this.state.products.length && <div>go to shoppings</div>} */}
      {products.map((product) => (
        <Product
          key={product.id}
          items={product}
          onDelete={() => removeHandler(product.id)}
          onIncrement={() => incrementHandler(product.id)}
          onChange={(e) => changeHandler(e, product.id)}
          onDecrement={() => decrementHandler(product.id)}
        />
      ))}
    </div>
  );
};

export default ProductList;
