import React, { useState } from 'react'
import { useDispatch } from 'react-redux/es/hooks/useDispatch';
import {addTask} from "../redux/TodoSlice/TodoSlice";
const AddTodo = () => {
    const dispatch= useDispatch();
    const [task, setTask] = useState({
        id:'' ,
        title: "",
        description:"",
        isDone: false,
    }
    )
    return (
    <div className='add-task'>
        <input type='text' placeholder='enter task title'
         onChange={(e)=>setTask({...task,title:e.target.value})}/>
        <input type='text' placeholder='enter task description'
        onChange={(e)=>setTask({...task,description:e.target.value})}/>
        <button
        onClick={()=>dispatch(addTask(task))}>Add new task</button>

    </div>
  )
}

export default AddTodo