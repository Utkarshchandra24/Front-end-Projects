import React from 'react'
import { useState } from 'react'

import "./SearchFilter.css"

const SearchFilter = () => {

    const fruitList = ["Apple","Banana","Mango","Grapes","Peach","Papaaya","Watermelon","Pear","Jack Fruit"]

    const [filterList,setFilterList] = useState(fruitList)

    const handelSearch =(e)=>{
        if(e.target.value === "") {
            setFilterList(fruitList);
            return
        }

        const filteredVal = fruitList.filter((item)=>item.toLocaleLowerCase().indexOf(e.target.value.toLocaleLowerCase()) !== -1);
        setFilterList(filteredVal);
    }


    return (
        <div className='main-div'>
            <h1>Search Filter</h1>
            <div className='sub-div'>
                Search: <input type='text' name='query' onChange={handelSearch} /> 
            </div>
            {
                filterList && filterList.map((item,index) =>(
                    <div key={index}>{item}</div>
                ))
            }
        </div>
    )
}

export default SearchFilter