import { useContext } from "react";
import {
  CounterContext,
  CounterContextDispatcher,
  useCount,
  useCountAction,
} from "./CounterProvider";

export const CounterOne = () => {
  // const { addOne, addFive, decrement } = useCountAction();
  // const count = useContext(CounterContext);
  // const setCount = useContext(CounterContextDispatcher);
  const count = useCount();
  // const setCount = useCountAction();
  const dispatch = useCountAction();
  return (
    <div>
      <h2>count is : {count}</h2>
      <button onClick={() => dispatch({ type: "add", value: 1 })}>
        add one
      </button>
      <button onClick={() => dispatch({ type: "reset" })}>reset</button>
      <button onClick={() => dispatch({ type: "decrement", value: 1 })}>
        decrement
      </button>
    </div>
  );
};
