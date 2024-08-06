import React, { useDebugValue, useState, userState } from "react";

const Counter = () => {
  //intilise the counter with default 0
  const [counter, SetCounter] = useState(0);
  // console.log(SetCounter);

  //Function for increment
  const incrementCounter = () => {
    SetCounter(counter + 1);
  };

  //function for decrement
  const decrementCounter = () => {
    SetCounter(counter - 1);
  };

  //function for reset
  const resetCounter = () => {
    SetCounter(0);
  };
  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h1>Counter: {counter}</h1>
      <button onClick={incrementCounter} style={{ margin: "10px" }}>
        Increment
      </button>
      <button onClick={decrementCounter} style={{ margin: "10px" }}>
        Decrement
      </button>
      <button onClick={resetCounter} style={{ margin: "10px" }}>
        Reset
      </button>
    </div>
  );
};

export default Counter;
