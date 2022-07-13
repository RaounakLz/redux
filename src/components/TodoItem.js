import { Button } from 'bootstrap'
import React from 'react'
import { useDispatch } from 'react-redux/es/hooks/useDispatch'
import { doneTask, removeTask } from '../redux/TodoSlice/TodoSlice'
import EditTask from './EditTask'

const TodoItem = ({todo}) => {
    const dispatch = useDispatch()
  return (
    <div className={`todo-item ${todo.isDone ?  "done" : "undone" } `}>
        <div className='text'>
         <h2>{todo.title} </h2>
        <p>{todo.discription} </p>
        </div>

        <button onClick={()=>dispatch(doneTask({id : todo.id}))}>
        {todo.isDone ? "done": "undone"}</button>
        {/* <span onClick={()=>dispatch(doneTask({id: todo.id}))}>
        {todo.idDone?"Done": "Not Done"} </span>
         {/* <EditTask id={todo.id} /> */}

        <button onClick={()=>dispatch(removeTask({id: todo.id}))}>Remove</button>  
    </div>
  )
}

export default TodoItem