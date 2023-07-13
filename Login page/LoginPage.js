import React, { useState } from "react"


export const LoginPage = (props) =>{

    const[email,setEmail] = useState('')
    const[pass,setPass] = useState('')

    const HandelSubmit =(e)=>
    {
        e.preventDefault();                         //if we don't declare e.preventDefault() then the page will get reloaded
        console.log(email);

    }

    return(
        <div className="auth-form-container">
            <h2>Login</h2>
            <form className="login-form" onSubmit={HandelSubmit}>
                <label htmlform="email">Email</label>
                <input type="email" placeholder="youremail@gmail.com" id="email" name="email" onChange={(e)=> setEmail(e.target.value)} value={email}/>
                <label htmlform="password">Password</label>
                <input type="password" placeholder="*******" id="password" name="password" onChange={(e)=> setPass(e.target.value)} value={pass}/>
                <button type="submit">Login</button>
            </form>
            <button className="Link-btn" onClick={()=> props.onFormSwitch('register')}>Don't have an account? Register Here</button>
        </div>
        
    )
}