import React, { useReducer, createContext, useContext } from "react";
import "./App.css";

const initialState = {
  count: 0,
};

//define the reducer dunc to handle state transaction

const reducer = (state, action) => {
  if (action.type === "INCREMENT") {
    return {
      ...state,
      count: state.count + 1,
    };
  } else if (action.type === "DECREMENT") {
    return {
      ...state,
      count: state.count - 1,
    };
  } else {
    return state;
  }
};

const CounterContext = createContext();
const CounterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <CounterContext.Provider value={{ state, dispatch }}>
      {children}
    </CounterContext.Provider>
  );
};

const Counter = () => {
  const { state, dispatch } = useContext(CounterContext);
  return (
    <div className="counter-container">
      <h1> {state.count}</h1>
      <button
        className="button"
        onClick={() => dispatch({ type: "INCREMENT" })}
      >
        +
      </button>
      <button
        className="button"
        onClick={() => dispatch({ type: "DECREMENT" })}
      >
        -
      </button>
    </div>
  );
};

const Counter2 = () => {
  const { state, dispatch } = useContext(CounterContext);

  return (
    <>
      <h1>Counter 1 Component {state.count}</h1>
      <button onClick={() => dispatch({ type: "INCREMENT" })}></button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}></button>
    </>
  );
};

const App = () => {
  return (
    <div className="app-container">
      <h1 className="title">React Counter</h1>
      <p className="sub-description">
        A simple counter application using Context API AND REDUCER
      </p>
      <CounterProvider>
        <Counter2 />
        <Counter />
      </CounterProvider>
    </div>
  );
};

export default App;
