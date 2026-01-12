import {useState } from "react";
import './ToDoList.css'
function ToDo()
{
    const [tasks, setTasks] = useState([]);
    const [newTaks, setNewTask] = useState("");
    const handleInputChange = (event) =>{
        setNewTask(event.target.value);
// event → browser event object
// event.target → the <input>
// event.target.value → text inside input
// setNewTask(...) → store it in state
    }
    const AddTask = () =>{
        // when u click add task butoon 
        // newt = document
        if(newTaks.trim() !== "")
            {

                setTasks(tasks => [...tasks, newTaks])
                setNewTask("");
            }
    }
    const removeTask =(index) =>{
        const updated = tasks.filter((_, ind) => 
            ind !== index
        )
        setTasks(updated);
    }
    const taskUp = (index) =>{
        if(index >  0){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] = 
            [updatedTasks[index - 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }
    const taskDown = (index) =>{
        if(index <  tasks.length - 1){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] = 
            [updatedTasks[index + 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }
    return(<>
    <div className="todolist">
        <h1>To-Do-List</h1>
        <div>
            <input type="text" placeholder="enter a task..." 
                    value={newTaks} onChange={handleInputChange}>
            </input>
            <button className="add-button" onClick={AddTask}>Add Task
            </button>
        </div>
        <ol>
            {tasks.map((element, index) =>
                <li key={index}> <span 
                                        className="text">{element}
                                </span>
                                <button className="delete" onClick={() => removeTask(index)}>
                                    Delete
                                </button>
                                <button className="delete" onClick={() => taskUp(index)}>
                                    Up
                                </button>
                                <button className="delete" onClick={() => taskDown(index)}>
                                    Down
                                </button>
                </li>
            )}
            {/* <li></li> */}
        </ol>
    </div>
    </>);
}
export default ToDo
{/* {tasks.map((element, index) =>{
    return (
    <li key={index}> <span className="text">{element}</span></li>
)})} */}

// Flow:

// User adds task → setTasks

// Component re-renders

// useEffect runs because tasks changed

// Data saved

// 👉 This is the correct pattern