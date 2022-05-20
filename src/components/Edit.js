// import React from "react";
// import { TodoContext } from "./context/TodoContext";
// const Edit = ({ setTodos,editTodo, setEditTodo }) => {
//     const {setEditable } = TodoContext();

    

//     const okButton = (todoId) => {
//         setTodos([
//             { id: todoId, content: editTodo },
//             ...todos.filter((item) => item.id !== todoId)
//         ]);
        
//         setEditable(false);
//     };
//     return (
//         <div>
//             <input
//                 value={editTodo}
//                 onChange={(e) => setEditTodo(e.target.value)}
//             />
//             <button onClick={() => setEditable(false)}>iptal</button>
//             <button onClick={() => okButton(todo.id)}>tamam</button>
//         </div>
//     );
// };

// export default Edit;
