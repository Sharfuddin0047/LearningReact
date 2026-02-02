import { useReducer } from "react";
import { reducerfunc, initialState } from "./reducerfunc";

const Reducer = () => {
  const [state, dispatch] = useReducer(reducerfunc, initialState);
  return (
    <div>
      <h1 className="text- center text-4xl">Learn Reducer {state}</h1>
      <button className="bg-gray-300 m-3 " onClick={() => dispatch("incre")}>
        increment
      </button>
      <button className="bg-gray-300 m-3 " onClick={() => dispatch("decre")}>
        decrement
      </button>
      <button className="bg-gray-300 m-3 " onClick={() => dispatch("reset")}>
        reset
      </button>
    </div>
  );
};

export default Reducer;
