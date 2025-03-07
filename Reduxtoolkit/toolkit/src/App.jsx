import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./counterSlice";

const App = () => {
    const myval = useSelector(state => state.mycounter.count); // Ensure key matches store.js
    const dispatch = useDispatch();

    return (
        <>
            <h1>Welcome To Counter Program!</h1>
            <button onClick={() => dispatch(increment())}> Increment </button>
            <h1>{myval}</h1>
            <button onClick={() => dispatch(decrement())}> Decrement </button>
        </>
    );
};

export default App;
