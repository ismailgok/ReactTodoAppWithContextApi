import React, { useState } from "react";
import { TodoContext } from "./context/TodoContext";
// import Edit from "./Edit";

const Todo = ({ todo }) => {
    const { setTodos, todos } = TodoContext();
    const [editTodo, setEditTodo] = useState("");
    const [editable, setEditable] = useState(false);

    const removeTodo = () => {
        setTodos([...todos.filter((item) => item.id !== todo.id)]);
    };

    const handleEdit = (todoId) => {
        const edit = todos.find((item) => todoId === item.id).content;
        setEditTodo(edit);
        setEditable(true);
    };

    const saveEdit = (todoId) => {
        // 1.
        // const index = todos.findIndex((item) => item.id === todoId);
        // console.log(index, todos[index]);
        // todos[index].content = editTodo;

        // 2.
        const saveTodo = todos.map((todoItem) => {
            if (todoItem.id === todoId) {
                return {
                    ...todoItem,
                    content: editTodo,
                };
            }
            return todoItem;
        });

        setTodos(saveTodo);

        // 3.
        // setTodos(prevState => {
        //     prevState[index].content = editTodo
        //     return [...prevState]
        // })

        setEditable(false);
        console.log(todos);
    };

    return (
        <div>
            <div>
                {editable ? (
                    <div>
                        <input
                            value={editTodo}
                            onChange={(e) => setEditTodo(e.target.value)}
                        />
                        <button onClick={() => setEditable(false)}>
                            iptal
                        </button>
                        <button onClick={() => saveEdit(todo.id)}>
                            kaydet
                        </button>
                        {/* <Edit setEditable={setEditable} /> */}
                    </div>
                ) : (
                    todo.content
                )}
                {editable === false ? (
                    <div>
                        <button
                            onClick={() => removeTodo(todo.id)}
                            style={{ marginLeft: "5px" }}
                        >
                            sil
                        </button>
                        <button
                            onClick={() => handleEdit(todo.id)}
                            style={{ marginRight: "5px" }}
                        >
                            düzenle
                        </button>
                    </div>
                ) : (
                    ""
                )}
            </div>
            <br />
        </div>
    );
};

export default Todo;
