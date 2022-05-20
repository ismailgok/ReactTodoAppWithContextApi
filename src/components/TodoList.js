import React from "react";
import { TodoContext } from "./context/TodoContext";
import Todo from "./Todo";

const TodoList = () => {
    const { todos } = TodoContext();
    return (
        <div>
            {todos && todos.map((todo) => <Todo key={todo.id} todo={todo} />)}
        </div>
    );
};

export default TodoList;
