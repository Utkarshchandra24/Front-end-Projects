//Not working (9.5.2023) 
//cannot type on text-box 


import React, { useState } from 'react'

const initialState = [
    {
        id: 1,
        todotask: "To learn HTML",
        completed: true
    },
    {
        id: 2,
        todotask: "To learn CSS",
        completed: false
    },
    {
        id: 3,
        todotask: "To learn JavaScript",
        completed: false
    }
];


const ToDoList2 = () => {
    
    const[todos,setTodos] = useState(initialState);
    const[todotask,setTodotask] = useState('');
    const[editId,setEditId] = useState('');

    const handelInput =(event)=>{
        console.log(event.target.value)
        setTodotask(event.taget.value)
    }

    const deleteTask =(id)=>{
        let remainingTodos = todos.filter((item)=>item.id !== id)
        setTodos(remainingTodos);
    }

    const handelSubmit =(event)=>{
        event.preventDefault();
        console.log(todotask);

        if(editId)
        {
            let UpdateTodos = todos.filter((item,index)=>{
                if(item.id == editId)
                {
                    return {
                        ...item,
                        todotask: todotask
                    }
                }
                return item;
            })
            console.log(UpdateTodos);
            setTodotask(UpdateTodos);
            setEditId(null);
            setTodos('');
        }
        else
        {
            let addTodo = {
                id: todos.length + 1,
                todotask: todotask,
                completed: false
            }
            let newtodos = [...todos,addTodo];
            setTodos(newtodos);
            setTodotask('');
        }

    }

    const handelCheckBoxes=(event)=>{
        let updatedTodos = todos.map((item,index)=>{
            if(index == event.target.value)
            {
                return {
                    ...item,
                    completed:event.target.value
                }
            }
           return item;
        })
        setTodos(updatedTodos);
    }

    const EditTasks=(id,todotask)=>{
        setTodotask(todotask);
        setEditId(id);

        let editTodos = todos.map((item,index)=>{
            if(index == id.target.value)
            {
                return {
                    ...item,
                    todotask: todotask
                }
            }
            return item;
        })
        setTodos(editTodos);
    }

    return (
        <div className='main-Block'>
            <div className='sub-Block-1'>
                <p align="Center"><h1>To-Do List</h1>
                <form onSubmit={handelSubmit}>
                    <div className='formgroup'>
                        <label><b>Add To-Do task</b></label>
                        <div className='addtext'>
                            <input type="text" name='todotask' value={todotask} onChange={handelInput} className='formcontrol' /> 
                        </div>
                        <div className='formbutton'>
                            <input type='submit' value={editId ? "Update" : "Add"} className='button'/>
                        </div>
                    </div>
                </form></p>
            </div>
            <div className='sub-Block-2'>
                <h2>Tasks To-Do</h2>
                {
                    todos.length>0 ? <div>
                        {
                            todos.map((item,index)=> <p key={index}>
                                <label><input type='checkbox' onChange={handelCheckBoxes} defaultChecked={item.completed} value={item.id} />  
                                {item.completed ? <del>{item.todotask}</del> : item.todotask}   
                                </label>
                                <button onClick={()=>EditTasks(item.todotask)}>Edit</button>
                                <button>Delete</button>
                            </p>)
                        }
                    </div> : <p>Sorry! No data Found</p>
                }
            </div>
        </div>
    )
}

export default ToDoList2