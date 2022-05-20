import { useEffect, useState, useRef } from "react";
import { TodoContext } from "./components/context/TodoContext";
import TodoList from "./components/TodoList";

const App = () => {
    const { todos, setTodos } = TodoContext();
    const [todo, setTodo] = useState("");
    const ref = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!todo) return;
        setTodos((prevState) => [
            {
                id: Math.floor(Math.random() * 1000),
                content: todo,
            },
            ...prevState,
        ]);
    };

    useEffect(() => {
        setTodo("");
        ref.current.focus();
    }, [todos]);

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    value={todo}
                    ref={ref}
                    onChange={(e) => setTodo(e.target.value)}
                />
                <button className="ekle">Ekle</button>
            </form>
            <br />
            <div>
                <TodoList />
            </div>
        </div>
    );
};

export default App;
