import { useProducts } from "../Providers/ProductProviders";
import "./navBar-styles.scss";

export const NavBar = () => {
  const products = useProducts();
  const totalItems = products.filter((p) => p.quantity > 0).length;

  return (
    <header className="navBar">
      <h2>fronthooks.com shopping</h2>
      <span>{totalItems}</span>
    </header>
  );
};
