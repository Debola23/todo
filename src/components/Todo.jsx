import React, {useState} from 'react'
import style from "./Todo.module.css"

export const Todo = () => {
    const [tasks, setTasks] = useState([])
    const [newTask, setNewTask] = useState("")

    function handleInputChange(event){
        setNewTask(event.target.value)
    }

    function addTask(){

      if(newTask.trim() !==""){
        setTasks(t =>[...t, newTask])
        setNewTask("")
      }
     
    }

    function deleteTask(index){
          const updatedTasks = tasks.filter((_, i) => i !==index)
          setTasks(updatedTasks)
    }
    

    function moveTaskUp(index){
      if(index > 0){
        const updatedTasks = [...tasks];
        [updatedTasks[index], updatedTasks[index - 1]] =
        [updatedTasks[index - 1], updatedTasks[index]];
        setTasks(updatedTasks);
      }
    }

    function moveTaskDown(index){
      if(index < tasks.length - 1){
        const updatedTasks = [...tasks];
        [updatedTasks[index], updatedTasks[index + 1]] =
        [updatedTasks[index + 1], updatedTasks[index]];
        setTasks(updatedTasks);
      }
    }
  return (
    <div className={style.Todo}>
        <h1>Todo List</h1>
        <div className={style.input}>
          <input type="text" placeholder='Enter a new task.....'className={style.ibox} value={newTask} onChange={handleInputChange}/>
          <button className={style.add} onClick={addTask}>
              <span className={style.plus}>+</span>
          </button>
        </div>
        <ol>{tasks.map((task, index) =>
            <li key={index}>
              <span className={style.text}>{task}</span>
                <button className={style.delete} id={style.delete} onClick={ () => deleteTask(index)}>-</button>
                <button className={style.moveUp} onClick={ () => moveTaskUp(index)}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-up-short" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5"/>
                  </svg>
                </button>
                <button className={style.moveDown} onClick={ () => moveTaskDown(index)}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-down-short" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4"/>
                  </svg>
                </button>
            </li>
          )}
        </ol>
    </div>
  )
}
