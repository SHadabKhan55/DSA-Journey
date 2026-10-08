// import React, { useState } from "react";

// function Todo() {
//   const [todos, setTodos] = useState([]);
//   const [text, setText] = useState("");
//   const [editId, setEditId] = useState(null);

//   // Add / Update
//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (text.trim() === "") {
//       alert("Please enter a task");
//       return;
//     }

//     if (editId === null) {
//       // ADD
//       const newTodo = {
//         id: Date.now(),
//         text: text,
//       };

//       setTodos([...todos, newTodo]);
//     } else {
//       // UPDATE
//       setTodos(
//         todos.map((todo) =>
//           todo.id === editId
//             ? { ...todo, text: text }
//             : todo
//         )
//       );

//       setEditId(null);
//     }

//     setText("");
//   };

//   // Edit
//   const editTodo = (todo) => {
//     setText(todo.text);
//     setEditId(todo.id);
//   };

//   // Delete
//   const deleteTodo = (id) => {
//     setTodos(todos.filter((todo) => todo.id !== id));
//   };

//   return (
//     <div>
//       <h1>Todo List</h1>

//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Enter task"
//           value={text}
//           onChange={(e) => setText(e.target.value)}
//         />

//         <button type="submit">
//           {editId === null ? "Add Todo" : "Update Todo"}
//         </button>
//       </form>

//       <ul>
//         {todos.map((todo) => (
//           <li key={todo.id}>
//             {todo.text}

//             <button onClick={() => editTodo(todo)}>
//               Edit
//             </button>

//             <button onClick={() => deleteTodo(todo.id)}>
//               Delete
//             </button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default Todo;

import React, { useState } from 'react'

const TodoList = () => {
    const [task,setTask] = useState([])
    const [text,setText] = useState("")
    const [editId,setEditId] = useState(null)

    function handleSubmit(e) {
        e.preventDefault()
        if(text.trim() === "")
        {
            alert("please enter text")
            return
        }
        if(editId){
            setTask(task.map(t => 
                t.id === editId
                ? {...t,text}
                : t
            ))
            setEditId(null)
        }else{

            setTask([
                ...task,
                {
                    id: task.length > 0 ? task[task.length -1].id +1 : 1,
                    text
                }
            ])
            setText("")
        }
    }
    function handleDelete(id) {
        setTask(task.filter(t => t.id !== id))
    }
    function handleEdit(task) {
        setText(task.text)
        setEditId(task.id)
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                name="text"
                placeholder="Enter text"
                value={text}
                onChange={e => setText(e.target.value)}
                />
            <button>{editId === null ? "Add" : "Update"}</button>
        </form>
        <hr />
        <ul>
            {task.map(t => (
                <li>
                    {t.text}
                    <button onClick={() => handleDelete(t.id)}>
                        remove
                    </button>
                    <button onClick={() => handleEdit(t)}>
                        Edit
                    </button>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default TodoList