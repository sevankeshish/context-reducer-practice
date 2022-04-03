import React from "react";
import { useState, useContext, useReducer } from "react";

export const CounterContext = React.createContext();
export const CounterContextDispatcher = React.createContext();

const initialState = 0;
const reducer = (state, action) => {
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

export const ContextProvider = ({ children }) => {
  // const [count, setCount] = useState(0);
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <CounterContext.Provider value={count}>
      <CounterContextDispatcher.Provider value={dispatch}>
        {children}
      </CounterContextDispatcher.Provider>
    </CounterContext.Provider>
  );
};

export const useCount = () => useContext(CounterContext);

export const useCountAction = () => {
  return useContext(CounterContextDispatcher);

  // const setCount = useContext(CounterContextDispatcher);
  // const addOne = () => {
  //   setCount((prevCount) => prevCount + 1);
  // };

  // const addFive = () => {
  //   setCount((prevCount) => prevCount + 5);
  // };

  // const decrement = () => {
  //   setCount((prevCount) => prevCount - 1);
  // };
  // return { addOne, addFive, decrement };
};
