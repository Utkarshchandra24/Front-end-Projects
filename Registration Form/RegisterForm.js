//https://www.geeksforgeeks.org/how-to-develop-user-registration-form-in-reactjs/

import React from 'react'
import { useState } from 'react'

import "./RegisterForm.css";

export const RegisterForm = () => {
  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [submitted,setSubmitted] = useState(false);
  const [error,setError] = useState(false);

  const handelName =(event)=>{
    setName(event.target.value);
    setSubmitted(false);
    console.log(event.target.value);
  };

  const handelEmail =(event)=>{
    setEmail(event.target.value);
    setSubmitted(false);
    console.log(event.target.value)
  };

  const handelPassword =(event)=>{
    setPassword(event.target.value);
    setSubmitted(false);
    console.log(event.target.value);
  };

  const handelSubmit =(event)=>{
    event.preventDefault();
    if(name == '' || email == '' || password == '')
    {
      setError(true);
    }
    else
    {
      setSubmitted(true);
      setError(false);
    }
  };

  const successMessage =()=>{
    return (
      <div className='success' style={{display: submitted ? '' : "none",}}>
        <h1>User {name} successfully Registered</h1>
      </div>
    )
  }

  const errorMessage =()=>{
    return (
      <div className='error' style={{display: error ? '' : 'none',}}>
        <h1>Please Enter all the fields</h1>
      </div>
    );
  };

  return (
    <div className='form'>
        <p align="Center"><h1>Project 3:Registration Form</h1></p>
        <div className='messages'>                                        {/* Calling the functions messages */}
          {errorMessage()}
          {successMessage()}
        </div>
        
        <form>              {/*Labels and inputs from form data */}
        <p align="Center"><label className='label'>Name</label>
          <input onChange={handelName} className='input' value={name} type='text'/>
          <br />
          <label className='label'>Email</label>
          <input onChange={handelEmail} className='input' value={email} type='text' />
          <br />
          <label className='label'>Password</label>
          <input onChange={handelPassword} className='input' value={password} type='password' />
          <br />
          <button onClick={handelSubmit} className='btn' type='submit'>Submit</button></p>
        </form>
    </div>
  )
}

export default RegisterForm