import React from "react";
import { useState, useContext } from "react";

export const CounterContext = React.createContext();
export const CounterContextDispatcher = React.createContext();

export const ContextProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  return (
    <CounterContext.Provider value={count}>
      <CounterContextDispatcher.Provider value={setCount}>
        {children}
      </CounterContextDispatcher.Provider>
    </CounterContext.Provider>
  );
};

export const useCount = () => useContext(CounterContext);
export const useCountAction = () => {
  const setCount = useContext(CounterContextDispatcher);

  const addOne = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const addFive = () => {
    setCount((prevCount) => prevCount + 5);
  };

  const decrement = () => {
    setCount((prevCount) => prevCount - 1);
  };
  return { addOne, addFive, decrement };
};
