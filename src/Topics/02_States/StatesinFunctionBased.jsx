import { useState } from "react";

const StatesinFunctionBased = () => {
    let[count, setCount] = useState(0);

    function incre() {
        setCount((prev) => prev+1);
        setCount((prev) => prev+1);
        setCount((prev) => prev+1);
    }

    function decre() {
        setCount((prev) => prev >0?prev-1:0);
    }
    function reset() {
        setCount(0);
    }
    return (
        <div>
            <h1>Learn States in function based</h1>
            <h2>Counter: {count}</h2>
            <button onClick={incre}>increment</button>
            <button onClick={decre}>Decrement</button>
            <button onClick={() => setCount(0)}>reset</button>
        </div>
    )
};

export default StatesinFunctionBased;