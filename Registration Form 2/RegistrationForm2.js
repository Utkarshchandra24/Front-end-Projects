import React from 'react'

import "./RegistrationForm2.css"

import facebook from "./Facebook.png"
import instagram from "./Instagram.png"
import twitter from "./Twitter.png"
import linkedIn from "./LinkedIN.png"

const RegistrationForm2 = () => {
  return (
    <div className='main-div'>
        <div className='sub-div'>
            <div className='left-div'>
                <div className='left-div-top'>
                    <h1>Welcome Back!</h1>
                </div>
                <div className='left-div-mid'>
                    {/* <span>To stay connected with us please</span><br />
                    <span>Login with your personal info</span><br /> */}
                    <span className='left-div-mid-span1'>To stay connected with us please</span><br />
                    <span className='left-div-mid-span2'>Login with your personal info</span><br />
                </div>
                <div className='left-div-bottom'>
                    <button className='btn-signin'>SIGN IN</button>
                </div>
            </div>
            <div className='right-div'>
                <h1 className='right-div-h1'>Create Account</h1>
                <div className='social-media'>
                    <img src={facebook} className='facebook' />
                    <img src={instagram} className='instagram' />
                    <img src={twitter} className='twitter' />
                    <img src={linkedIn} className='linkedin' />
                </div>
                <br />
                <span>or use your email for Registration</span>
                <div className='user-info'>
                    <input type='text' placeholder='Name' className='user-info-data' /><br />
                    <input type='text' placeholder='Email' className='user-info-data' /><br />
                    <input type='password' placeholder='Password' className='user-info-data' />
                </div>
                {" "}
                <div className='user-info-btn-signup'>
                    <button className='btn-signup'>SIGN UP</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default RegistrationForm2