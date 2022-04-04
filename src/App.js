import "./App.css";
import ProductList from "./Components/ProductList/ProductList-component";
import { NavBar } from "./Components/Navbar/navBar-component";
import React, { Component } from "react";
import { ContextProvider } from "./Components/Context/CounterProvider";
import { CounterOne } from "./Components/Context/CounterOne";
import { CountReducer } from "./Components/Reducer/CountReducer";
import { useState } from "react";
import {
  ProductsProvider,
  useProducts,
  useProductsAction,
} from "./Components/Providers/ProductProviders";

export const App = () => {
  return (
    <div className="App">
      <ProductsProvider>
        <NavBar />
        <ProductList />
      </ProductsProvider>
    </div>
  );
};

export default App;
