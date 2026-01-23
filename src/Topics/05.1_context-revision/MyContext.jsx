import { createContext } from "react";

export const contextObject = createContext();
const MyContext = (props) => {
    console.log(props);
    let data1="Hello";
    return (
        <contextObject.Provider value={data1}>
            {props.children}
        </contextObject.Provider>
    );
};

export default MyContext;