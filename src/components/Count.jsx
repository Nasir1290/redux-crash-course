import React from "react";

export default function Count() {
  return (
    <div>
      <div className=" bg-slate-400 w-min p-4 rounded-lg m-5 text-white text-lg flex items-center justify-center flex-col font-bold">
        <h1>Count:0</h1>
        <button className="text-white bg-black p-3 rounded-md border">
          Increment
        </button>
      </div>
      <div className=" bg-purple-400 w-min p-4 rounded-lg m-5 text-white text-lg flex items-center justify-center flex-col font-bold">
        <h1>Count:0</h1>
        <button className="text-white bg-red-500 p-3 rounded-md border">
          Decrement
        </button>
      </div>
    </div>
  );
}
