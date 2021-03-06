import React from "react";
import { useState, useContext, useReducer } from "react";

const initialState = 0;
// const initialState = {
//   firstCounter: 0,
//   secondCounter: 0,
// };

const reducer = (state, action) => {
  // switch (action.type) {
  //   case "add":
  //     // return state +1
  //     return { ...state, firstCounter: state.firstCounter + action.value };
  //   // case "add5":
  //   //   return { ...state, firstCounter: state.firstCounter + action.value };
  //   case "decrement":
  //     return { ...state, firstCounter: state.firstCounter - action.value };
  //   case "add2":
  //     return { ...state, secondCounter: state.secondCounter + action.value };
  //   // case "add10":
  //   //   return { ...state, secondCounter: state.secondCounter + action.value };
  //   case "decrement5":
  //     return { ...state, secondCounter: state.secondCounter - action.value };
  //   case "reset":
  //     return initialState;
  //   default:
  //     return state;
  // }

  //multiple useReducer
  switch (action.type) {
    case "add":
      return state + action.value;
    case "decrement":
      return state - action.value;
    case "reset":
      return initialState;
    default:
      return state;
  }
};

export const CountReducer = () => {
  const [count, dispatch] = useReducer(reducer, initialState);
  const [countTwo, dispatchTwo] = useReducer(reducer, initialState);
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
    // <div>
    //   <h2>count is : {count}</h2>
    //   <button onClick={() => dispatch("addOne")}>add one</button>
    //   <button onClick={() => dispatch("addFive")}>add five</button>
    //   <button onClick={() => dispatch("decrement")}>minus one</button>
    // </div>
    <div>
      <div>
        <h2>count 1 is : {count}</h2>
        <button onClick={() => dispatch({ type: "add", value: 1 })}>
          add one
        </button>
        <button onClick={() => dispatch({ type: "add", value: 5 })}>
          add five
        </button>
        <button onClick={() => dispatch({ type: "decrement", value: 1 })}>
          minus one
        </button>
        <button onClick={() => dispatch({ type: "reset" })}>reset</button>
      </div>
      <div>
        <h2>count 2 is : {countTwo}</h2>
        <button onClick={() => dispatchTwo({ type: "add", value: 2 })}>
          add two
        </button>
        <button onClick={() => dispatchTwo({ type: "add", value: 10 })}>
          add ten
        </button>
        <button onClick={() => dispatchTwo({ type: "decrement", value: 5 })}>
          minus five
        </button>
      </div>
    </div>
  );
};
