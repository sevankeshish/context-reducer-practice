import "./navBar-styles.scss";
export const NavBar = ({ totalItems }) => {
  // export const NavBar = (totalItems) => {
  return (
    <header className="navBar">
      <h2>fronthooks.com shopping</h2>
      <span>{totalItems}</span>
      {/* <span>{props.totalItems}</span> */}
    </header>
  );
};
