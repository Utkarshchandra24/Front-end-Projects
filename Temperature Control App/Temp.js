import React, { useState } from 'react'

import "./Temp.css"

const Temp = () => {

    const [counter,setCounter] = useState(30);


    const increment=()=>{
        setCounter(counter + 1)
    }

    const decrement=()=>{
        setCounter(counter - 1)
    }

    return (
        <div className='main-div'>
            <div className='sub-div1'>
                <span className='head'><strong>Temperature Control App</strong></span>
            </div>
            <br />
            <div className='sub-div2'>
                <h1>{counter}&deg;C</h1>
            </div>
            <div className='sub-div3'>
                <div className='sub-div3-left'>
                    <button className='btn1' onClick={increment}>+</button>
                </div>
                <div className='sub-div3-right'>
                    <button className='btn2' onClick={decrement}>-</button>
                </div>
            </div>
        </div>
    )
}

export default Temp