import React, { useState } from 'react'
import './style.css'

export const Todo = () => {
    const [todo, setTodo] = useState([])
    const [inputVal, setInputVal] = useState("")
    const[inputSave,setInputSave]= useState("")
    const [edit,setEdit]= useState('')
    const handleTodo = () => {
        let task = inputVal.trim()
        if (!task) { alert("Please enter a task"); return; }
        setTodo([...todo, task])
        setInputVal("")
    }
    
    const handleDelete = (id)=>{
        // const newTodo = todo.filter((_, index) => index !== id);
// const newTodo = todo.slice(id + 1).concat(todo.slice(0, id));
        const newTodo = todo.filter((task,i)=> i !== id)
        setTodo(newTodo);
    }
const handleSave = (task,id)=>{
    console.log(inputSave);
    
    const newTodo = todo.map((t,i)=> i === id ? inputSave : t )
    setTodo(newTodo);
    setEdit('');
}

    return (
        <div className='todo_container'>
            <div className="todo">
                <h1>Todo App</h1>
                <input type="text" className="task" placeholder='Enter a task..' value={inputVal} onChange={(e) => setInputVal(e.target.value)} />
                <button className='btn' onClick={handleTodo}>Add Task</button>
                {/*-------------listing data------------*/}
                <div className="list-todo">
                    {todo && todo.length > 0 ? todo.map((task, i) => (
                        <div key={i} className='list'>
                            <li>
                                <p>{edit === task ?  <input value={inputSave} onChange={(e)=>setInputSave(e.target.value)}/>:task}</p>
                                <div className="btn_list">
                                    {edit === task ? <button className='btn-save' onClick={()=>handleSave(task,i)}>Save</button>:<button className='btn-edit' onClick={()=>{setEdit(task);setInputSave(task)}}>Edit</button>}
                                    {/* <button className='btn-edit' onClick={()=>setEdit(task)}>{edit ? 'Save':'Edit'}</button> */}
                                    <button className='btn-delete' onClick={()=>handleDelete(i)}>delete</button>

                                </div>
                            </li>

                        </div>
                    )) : ''}
                </div>
            </div>
        </div>
    )
}
