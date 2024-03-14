import React, { useState } from "react";
import Count from "./components/Count";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./features/counters/countersSlice";

const initialCounters = [
  { id: 1, value: 0 },
  { id: 2, value: 0 },
];
const App = () => {
  const dispatch = useDispatch();
  const counters = useSelector((state) => state.counters);
  const handleIncrement = (counterId) => {
    dispatch(increment(counterId));
  };

  const handleDecrement = (counterId) => {
    dispatch(decrement(counterId));
  };

  const totalCount = counters.reduce(
    (total, current) => total + current.value,
    0
  );

  return (
    <div className=" flex items-center justify-center">
      <div>
        {counters.map((counter) => (
          <Count
            key={counter.id}
            count={counter.value}
            onIncrement={() => handleIncrement(counter.id)}
            onDecrement={() => handleDecrement(counter.id)}
          />
        ))}
      </div>
      <div className=" p-8 bg-green-500 rounded-md text-3xl text-white font-bold">
        Total Count is :
        <span className=" text-red-500 bg-white px-2 py-1 rounded-sm">
          "&nbsp;{totalCount}&nbsp;"
        </span>
      </div>
    </div>
  );
};

export default App;
