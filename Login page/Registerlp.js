import { useState } from "react"

export const Registerlp = (props) =>{

    const[email,setEmail] = useState('');
    const[pass,setPass] = useState('');
    const[name,setName] = useState('');

    const handelSubmit =(e)=>
    {
        e.preventDefault();
        console.log(email);
    }

    return (
        <div className="auth-form-container">
                <h2>Register</h2>
            <form className="register-form" onSubmit={handelSubmit}>
                <label>Full Name</label>
                <input type="text" value="name"  placeholder="full name"  id="name"/>
                <label form="email">Email</label>
                <input type="email" placeholder="youremail@gmail.com" id="email" name="email" onChange={(e)=> setEmail(e.target.value)} value={email}/>
                <label form="password">Password</label>
                <input type="password" placeholder="*******" id="password" name="password" onChange={(e)=> setPass(e.target.value)} value={pass}/>
                <button>Login</button>
            </form>
            <button className="Link-btn" onClick={()=> props.onFormSwitch('Login')}>Already have an account? Login Here</button>
        </div>
    )
}