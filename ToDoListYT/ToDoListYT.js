//ToDo List Technical Thappa (YT)
import React from 'react';
import { useState } from 'react';
import ToDoListYTitemval from './ToDoListYTitemval';

import './ToDoListYTS.css'


const ToDoListYT = () => {
    const [inputList,setInputList] = useState("Learn HTML");                                          //useState is a Hook you can pass the initial state
    const [items,setItems] = useState([]);                                                            //we are creating an array so that whatever is written inside the text box gets stored in an array on clicking the button


    const itemEvent=(event)=>{
        setInputList(event.target.value);                                                           //Whatever you type on the text box it will reflect at List simultaneously

    };

    const listOfItems =(event)=>{
        setItems((oldItems)=>{
            return [...oldItems,inputList];
        });
        setInputList("")                                        //This will remove the text which was written inside the textbox after clicking "Add a Task" button 
    };

    const deleteItems =(id)=>{
        console.log("Deleted");
        setItems((oldItems)=>{
            return oldItems.filter((arrElem,index)=>{
                return index !== id;                            //The id that matches the index number gets deleted and the one's which does not match gets added in the array
            })
        })
    }

    return (
        <div className='main_div'>
            <div className='center_div'>
                <br />
                <h1> ToDo List</h1>
                <br />
                <input type='text' placeholder='Add a Task' value={inputList} onChange={itemEvent} />
                <button onClick={listOfItems}>+</button>

                    {/* <li>{inputList}</li>   */}
                <ol>
                    {
                         items.map((itemval,index)=>{
                            return <ToDoListYTitemval key={index} id={index} text={itemval} onSelect={deleteItems}/>
                        })
                    }
                   
                </ol>
            </div>
        </div>
    )
}

export default ToDoListYT