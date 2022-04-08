import React from "react";
import { useContext, useReducer } from "react";
import { productsData } from "../db/products";
export const ProductContext = React.createContext();
export const ProductContextDispatcher = React.createContext();

const initialState = [
  { title: "React js", price: "$99", id: "1", quantity: "1" },
  { title: " Vue js", price: "$89", id: "2", quantity: "1" },
  { title: "Angular", price: "$79", id: "3", quantity: "1" },
];

const reducer = (state, action) => {
  switch (action.type) {
    case "edit": {
      const index = state.findIndex((item) => item.id === action.id);
      const product = { ...state[index] };
      product.title = action.event.target.value;
      const copyItems = [...state];
      copyItems[index] = product;
      return copyItems;
    }
    case "decrement": {
      const index = state.findIndex((item) => item.id === action.id);
      console.log(index);
      const product = { ...state[index] };
      if (product.quantity <= 1) {
        const removeProduct = state.filter((p) => p.id !== action.id);
        return removeProduct;
      } else {
        const copyItems = [...state];
        product.quantity--;
        copyItems[index] = product;
        return copyItems;
      }
    }
    case "remove":
      const filteredProduct = state.filter((p) => p.id !== action.id);
      return filteredProduct;

    case "increment": {
      const index = state.findIndex((item) => item.id === action.id);
      const product = { ...state[index] };
      product.quantity++;
      const copyProducts = [...state];
      copyProducts[index] = product;
      return copyProducts;
    }
    case "filter":
      // console.log(action.event.target.value);
      // return state;
      if (action.event.target.value === "") {
        return productsData;
      } else {
        // console.log(action.event.target.value);
        const updatedProducts = productsData.filter(
          (p) => p.availableSizes.indexOf(action.event.target.value) >= 0
        );
        return updatedProducts;
      }
    default:
      return state;
  }
};

// const initialState = 0;
// const reducer = (state, action) => {
//   switch (action.type) {
//     case "add":
//       return state + action.value;
//     case "decrement":
//       return state - action.value;
//     case "reset":
//       return initialState;
//     default:
//       return state;
//   }
// };

export const ProductsProvider = ({ children }) => {
  const [products, dispatch] = useReducer(reducer, initialState);
  //   const [Products, dispatch] = useReducer(reducer, initialState);

  return (
    <ProductContext.Provider value={products}>
      <ProductContextDispatcher.Provider value={dispatch}>
        {children}
      </ProductContextDispatcher.Provider>
    </ProductContext.Provider>
  );
};

export const useProducts = () => useContext(ProductContext);

export const useProductsAction = () => {
  return useContext(ProductContextDispatcher);
  // const products = useContext(ProductContext);

  // const removeHandler = (id) => {
  //   // return console.log("clicked", id);
  //   const filteredProduct = products.filter((p) => p.id !== id);
  //   setProducts(filteredProduct);
  // };

  // const incrementHandler = (val) => {
  //   const index = products.findIndex((item) => item.id === val);
  //   // console.log(index);

  //   const product = { ...products[index] };
  //   product.quantity++;

  //   const copyProducts = [...products];
  //   copyProducts[index] = product;

  //   setProducts(copyProducts);
  // };

  // const changeHandler = (event, id) => {
  //   // console.log(event.target.value, id);
  //   const index = products.findIndex((item) => item.id === id);
  //   // console.log(index);

  //   const product = { ...products[index] };
  //   product.title = event.target.value;

  //   const copyItems = [...products];
  //   copyItems[index] = product;

  //   setProducts(copyItems);
  // };

  // const decrementHandler = (id) => {
  //   // console.log(id);
  //   const index = products.findIndex((item) => item.id === id);
  //   console.log(index);

  //   const product = { ...products[index] };
  //   if (product.quantity <= 1) {
  //     const removeProduct = products.filter((p) => p.id !== id);
  //     setProducts(removeProduct);
  //   } else {
  //     const copyItems = [...products];
  //     product.quantity--;
  //     copyItems[index] = product;
  //     setProducts(copyItems);
  //   }
  // };

  // return { changeHandler, decrementHandler, removeHandler, incrementHandler };
};
