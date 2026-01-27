import { useEffect, useRef, useState } from "react";

const LifeCycleInFBC = () => {
  const [count, setCount] = useState(0);
  const initialRender = useRef(true);

  useEffect(() => {
    console.log("Render");
  });

  useEffect(() => {
    console.log("Component Mounted");

    let intervalId = setInterval(() => {
      console.log("API CALLED");
    }, 2000);

    return () => {
      console.log("Component Unmounted");
      clearInterval(intervalId);
    };
  }, []);

  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false;
      return;
    }
    console.log("Component Updated");
  }, [count]);
  return (
    <div>
      <h2>LIfeCycleInFBC</h2>
      <button onClick={() => setCount(count + 1)}>increment</button>
    </div>
  );
};

export default LifeCycleInFBC;
