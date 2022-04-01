import { useContext } from "react";
import {
  CounterContext,
  CounterContextDispatcher,
  useCount,
  useCountAction,
} from "./CounterProvider";

export const CounterOne = () => {
  const { addOne, addFive, decrement } = useCountAction();
  // const count = useContext(CounterContext);
  // const setCount = useContext(CounterContextDispatcher);
  const count = useCount();
  // const setCount = useCountAction();
  return (
    <div>
      <h2>count is : {count}</h2>
      <button onClick={addOne}>add one</button>
      <button onClick={addFive}>add one</button>
      <button onClick={decrement}>minus one</button>
    </div>
  );
};
