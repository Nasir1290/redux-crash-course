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

  const handleDecrement = (counterId) => {
    const updatedCounters = counters.map((counter) => {
      if (counter.id === counterId) {
        return counter.value>=1? { ...counter, value: counter.value - 1 }:{...counter,value:0};
      }
      return counter;
    });

    setCounters(updatedCounters);
  };

  return (
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
  );
};

export default App;
