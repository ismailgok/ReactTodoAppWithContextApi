import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { FormContextProvider } from "./components/context/TodoContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <FormContextProvider>
            <App />
        </FormContextProvider>
    </React.StrictMode>
);
