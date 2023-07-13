import React from 'react'
import todo from './todo.png'
import "./ToDoListYT2.css"

const ToDoListYT2 = () => {
  return (
    <>
      <div className='main-div'>
        <div className='child-div'>
            <figure>
                <img src={todo} alt="todo logo" />
                <figcaption><h1>Add Your List Here!</h1></figcaption>
            </figure>
            <div className='addItems'>
                <input type='text' placeholder='Add Items...' id=''  />
{/*                <FontAwesomeIcon icon="fa-light fa-pen-to-square" /> */}
            </div> 
            <div className='showItems'>
                <div className='eachItem'>
                    <h3>Apple</h3>
                    <i class="fa fa-user"></i>
                </div>
            </div>

        </div>
      </div>
    </>
  )
}

export default ToDoListYT2