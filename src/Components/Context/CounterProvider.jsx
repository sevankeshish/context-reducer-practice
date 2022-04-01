import React from "react";
import { useState } from "react";

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
