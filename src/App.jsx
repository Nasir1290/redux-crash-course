import React, { useState } from "react";
import Count from "./components/Count";

const initialCounters = [
  { id: 1, value: 0 },
  { id: 2, value: 0 },
];
const App = () => {
  const [counters, setCounters] = useState(initialCounters);

  const handleIncrement = (counterId) => {
    const updatedCounters = counters.map((counter) => {
      if (counter.id === counterId) {
        return { ...counter, value: counter.value + 1 };
      }
      return counter;
    });

    setCounters(updatedCounters);
  };


  const totalCount = counters.reduce(
    (total, current) => total + current.value,
    0
  );

  
  const handleDecrement = (counterId) => {
    const updatedCounters = counters.map((counter) => {
      if (counter.id === counterId) {
        return counter.value>=1? { ...counter, value: counter.value - 1 }:totalCount{...counter,value:0};
      }
      return counter;
    });

    setCounters(updatedCounters);
  };


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
