import React from "react";
import useCounter from "./useCounter";

const CounterComponent = () => {
  const { count, increment, decrement, reset } = useCounter(5, 2);
  console.log("count", count);

  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default CounterComponent;
