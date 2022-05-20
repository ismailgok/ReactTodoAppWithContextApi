import { createContext, useContext, useState } from "react";

export const FormContext = createContext();

export const FormContextProvider = ({ children }) => {
    const [todos, setTodos] = useState([]);
    return (
        <FormContext.Provider value={{todos, setTodos}}>
            {children}
        </FormContext.Provider>
    );
};

export const TodoContext = () => useContext(FormContext)
