import "./App.css";
import ProductList from "./Components/ProductList/ProductList-component";
import { NavBar } from "./Components/Navbar/navBar-component";
import React, { Component } from "react";
import { ContextProvider } from "./Components/Context/CounterProvider";
import { CounterOne } from "./Components/Context/CounterOne";

class App extends Component {
  state = {
    products: [
      { title: "React js", price: "$99", id: "1", quantity: "1" },
      { title: " Vue js", price: "$89", id: "2", quantity: "1" },
      { title: "Angular", price: "$79", id: "3", quantity: "1" },
    ],
    // isShow: true,
    // count: 0,
    // count: 0,
  };

  removeHandler = (id) => {
    // return console.log("clicked", id);
    const filteredProduct = this.state.products.filter((p) => p.id !== id);
    this.setState({ products: filteredProduct });
  };

  incrementHandler = (val) => {
    const index = this.state.products.findIndex((item) => item.id === val);
    // console.log(index);

    const product = { ...this.state.products[index] };
    product.quantity++;

    const copyProducts = [...this.state.products];
    copyProducts[index] = product;

    this.setState({ products: copyProducts });
  };

  changeHandler = (event, id) => {
    // console.log(event.target.value, id);
    const index = this.state.products.findIndex((item) => item.id === id);
    // console.log(index);

    const product = { ...this.state.products[index] };
    product.title = event.target.value;

    const copyItems = [...this.state.products];
    copyItems[index] = product;

    this.setState({ products: copyItems });
  };

  decrementHandler = (id) => {
    // console.log(id);
    const index = this.state.products.findIndex((item) => item.id === id);
    console.log(index);

    const product = { ...this.state.products[index] };
    if (product.quantity <= 1) {
      const removeProduct = this.state.products.filter((p) => p.id !== id);
      this.setState({ products: removeProduct });
    } else {
      const copyItems = [...this.state.products];
      product.quantity--;
      copyItems[index] = product;
      this.setState({ products: copyItems });
    }
  };

  componentDidMount() {
    console.log("App.js componentDidMount");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("App.js componentDidUpdate");
    console.log("App.js", prevState);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return true;
  }

  render() {
    return (
      <>
        <ContextProvider>
          <p>wellcme to the context</p>
          <CounterOne />
        </ContextProvider>
        {/* <NavBar
          // totalItems={this.state.products.filter((p) => p.quantity > 0).length}
          totalItems={this.state.products.length}
        />
        <ProductList
          products={this.state.products}
          onDelete={this.removeHandler}
          onIncrement={this.incrementHandler}
          onChange={this.changeHandler}
          onDecrement={this.decrementHandler}
        /> */}
      </>
    );
  }
}

export default App;
