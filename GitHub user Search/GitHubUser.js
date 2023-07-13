import React from 'react'
import { useState } from 'react'

const API_URL = "https://api.github.com";

async function fetchResults(query) {
    try {
        const response = await fetch(`${API_URL}/search/users?q=${query}`);
        const json = await response.json();
        return json.items || [];
    } catch(event) {
        throw new Error(event);
    }
}

export const GitHubUser = () => {
    const[query,setQuery] = useState('');
    const[result,setResult] = useState([]);
    
    function onSearchChange(event) {
        setQuery(event.target.value);
    }

    function onSearchSubmit(event) {
        event.preventDefault();
//        const results = await fetchResults(query);
//        setResult(results);
    }

    return (
        <div>
            <p align="Center"><h1>Project 3:GitHub User Search</h1></p>
        </div>
    )
}

export default GitHubUser