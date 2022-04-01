import React from "react";
import { useState, useContext, useReducer } from "react";

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "addOne":
      return state + 1;
    case "addFive":
      return state + 5;
    case "decrement":
      return state - 1;
    default:
      return state;
  }
};

export const CountReducer = () => {
  const [count, dispatch] = useReducer(reducer, initialState);
  //   const [count, setCount] = useState(0);
  //   const addOne = () => {
  //     setCount((prevCount) => prevCount + 1);
  //   };

  //   const addFive = () => {
  //     setCount((prevCount) => prevCount + 5);
  //   };

  //   const decrement = () => {
  //     setCount((prevCount) => prevCount - 1);
  //   };

  return (
    <div>
      <h2>count is : {count}</h2>
      <button onClick={() => dispatch("addOne")}>add one</button>
      <button onClick={() => dispatch("addFive")}>add five</button>
      <button onClick={() => dispatch("decrement")}>minus one</button>
    </div>
  );
};
