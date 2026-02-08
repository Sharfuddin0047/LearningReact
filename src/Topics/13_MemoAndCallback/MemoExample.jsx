import { useState, useMemo, useCallback } from "react";
import MemoChild from "./MemoChild";

const MemoExample = () => {
  const [add, setAdd] = useState(0);
  const [minus, setMinus] = useState(100);

  //   function multiply() {
  //     return add * 2;
  //   }

  let memorizedValue = useMemo(() => {
    console.log("Multiply");
    return add * 2;
  }, [add]);

  const display = useCallback(() => {
    console.log("Hii");
  }, []);
  return (
    <div>
      <h1>Memo Example</h1>

      <p>Multiplication: {memorizedValue}</p>
      <p>Addition : {add}</p>
      <button onClick={() => setAdd(add + 1)}>Increment</button>

      <p>Subtraction : {minus}</p>
      <button onClick={() => setMinus(minus - 1)}>Decrement</button>

      <MemoChild display={display} />
    </div>
  );
};

export default MemoExample;
