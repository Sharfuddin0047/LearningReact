import {createRoot} from "react-dom/client";
import App from "./App";

//React way
createRoot(document.getElementById("root")).render(<App></App>);


//JS Way
// const div = document.getElementById("root");
// const h1 = document.createElement("h1");
// h1.textContent="Hello React";
// div.append(h1);

