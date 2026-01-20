import { useContext } from "react";
import ChildA1 from "./ChildA1";
import { myContextStore } from "./Context";

const Parent1 = () => {
    let {isLoggedIn} = useContext(myContextStore);

    return (
        <div>
            <h1>Parent Component</h1>
            {isLoggedIn && <h2>User Logged IN 👍 !!!</h2>}
            <ChildA1 />
        </div>
    );
};

export default Parent1;