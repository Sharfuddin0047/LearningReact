import { useContext } from "react";
import { contextObject } from "./MyContext";

const ChildComp2 = () => {
    let val=useContext(contextObject);
    console.log(val)
    return (
        <div>
            <h1>Child 2 Component {val}</h1>
        </div>
    );
};

export default ChildComp2;