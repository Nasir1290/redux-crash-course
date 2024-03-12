import React from "react";

export default function Count({ count, onIncrement, onDecrement }) {
  return (
    <div className="bg-purple-400 w-min p-4 rounded-lg m-5 text-white text-lg flex flex-col items-center justify-center gap-2 font-bold">
      <div>
        <h1>Count:{count}</h1>
      </div>
      <div className=" flex gap-2">
        <button
          onClick={onIncrement}
          className="text-white bg-green-500 p-3 rounded-md border"
        >
          Increment
        </button>
        <button
          onClick={onDecrement}
          className="text-white bg-red-500 p-3 rounded-md border"
        >
          Decrement
        </button>
      </div>
    </div>
  );
}
