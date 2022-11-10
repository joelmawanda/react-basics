import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
  decrementByAmount,
} from "../Redux/counterSlice";

export function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const amount = 100;

  return (
    <div className="container">
      <button
        aria-label="Increment value"
        onClick={() => dispatch(increment())}
      >
        Increment
      </button>
      <span>{count}</span>
      <button
        aria-label="Decrement value"
        onClick={() => dispatch(decrement())}
      >
        Decrement
      </button>
      <button
        aria-label="Increment by value"
        onClick={() => dispatch(incrementByAmount(amount))}
      >
        Increment By
      </button>
      <button
        aria-label="Decrement by value"
        onClick={() => dispatch(decrementByAmount(amount))}
      >
        Decrement By
      </button>
    </div>
  );
}
