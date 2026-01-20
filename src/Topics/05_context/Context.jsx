import { createContext, useState } from "react";

export const myContextStore = createContext();

const Context = (props) => {
    console.log(props);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    let data1 = 10;
    let data2 = "hello World";

    return (
        <myContextStore.Provider value={{data1, data2, isLoggedIn, setIsLoggedIn}}>
            {props.children}
        </myContextStore.Provider>
    );
};

export default Context;