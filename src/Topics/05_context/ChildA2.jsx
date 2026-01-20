import { useContext } from "react";
import { myContextStore } from "./Context";

const ChildA2 = () => {
    let {isLoggedIn, setIsLoggedIn} = useContext(myContextStore)
    return (
        <div>
            <h1>ChildA2 component</h1>
            <button onClick={() => setIsLoggedIn(!isLoggedIn)}>{isLoggedIn ? "Log out": "Log in"}</button>
        </div>
    );
};

export default ChildA2;