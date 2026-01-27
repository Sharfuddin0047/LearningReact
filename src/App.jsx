import { useState } from "react";
import ClassBasedComponent from "./Topics/01_TypesOfComponent/ClassBasedComponent";
import FunctionBasedComponent from "./Topics/01_TypesOfComponent/FunctionBasedComponent";
import Dropdown from "./Topics/02_States/Dropdown";
import StatesInClassBased from "./Topics/02_States/StatesInClassBased";
import StatesinFunctionBased from "./Topics/02_States/StatesinFunctionBased";
import PropsParent from "./Topics/03_props/PropsParent";
import DrillingParent from "./Topics/04_PropsDrilling/DrillingParent";
import MyContext from "./Topics/05.1_context-revision/MyContext";
import ParentComp from "./Topics/05.1_context-revision/ParentComp";
import Context from "./Topics/05_context/Context";
import Parent1 from "./Topics/05_context/Parent1";
import UserLists from "./Topics/06_Lists/UserLists";
import LifeCycleInCBC from "./Topics/07_LifeCycle/LifeCycleInCBC";
import LifeCycleInFBC from "./Topics/07_LifeCycle/LifeCycleInFBC";

function App() {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => setToggle(!toggle);
  return (
    <div>
      {/* <FunctionBasedComponent /> */}
      {/* <ClassBasedComponent /> */}
      {/* <StatesinFunctionBased /> */}
      {/* <StatesInClassBased/> */}
      {/* <Dropdown/> */}
      {/* <PropsParent /> */}
      {/* <DrillingParent /> */}
      {/* <Context>
                <Parent1 />
            </Context> */}
      {/* <MyContext>
                <ParentComp />
            </MyContext> */}
      {/* <UserLists /> */}
      <button onClick={handleToggle}>toggle me</button>
      {/* {toggle && <LifeCycleInCBC />} */}
      {toggle && <LifeCycleInFBC />}
    </div>
  );
}
export default App;
