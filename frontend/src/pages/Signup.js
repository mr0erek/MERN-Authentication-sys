import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import { handleError, handleSuccess } from '../utils';
function Signup() {
    
    const [signupInfo, setSignupInfo] = useState({
        name: '',
        email: '',
        password: '' 
    }) // created for storing temporary creds base.
    
/* name and value are already defined into input, name="value"; */
    const navigate = useNavigate(); //a function
    const handleChange = (e) => {
        const { name, value } = e.target
        // console.log(name, value);
        const copySignupInfo = { ...signupInfo }; //here we copied the parameter and its value by adding it into another variable/function
        copySignupInfo[name] = value //
        // console.log(copySignupInfo)
        setSignupInfo(copySignupInfo);
    } //its a function 

     // console.log('SignupInfo -> ', signupInfo)
    const handleSignup = async (e) => { //its an api call
        e.preventDefault();
        const {name, email, password} = signupInfo;
        if(!name || !email || !password) {
            return handleError('All Fields are required to signup!')
        }
        try {
            const url = "https://mern-authentication-sys-backend.onrender.com/auth/signup";
            const response = await fetch(url,{
                method: "POST",
                headers: {
                    "Content-Type": 'application/json'
                },
                body: JSON.stringify(signupInfo) 
            });
            const result = await response.json();
            const { success, message, error } = result
            if(success){
                handleSuccess(message);
                setTimeout(()=>{
                    navigate('/login')
                }, 1000) // in ms (milisecond)
            } else if(error){
                const details = error?.details[0].message; //error -> somewhere in details catch '0' catch it's message.
                handleError(details);
            } else if(!success){
                handleError(message)
            }
            // console.log(result);
        } catch (err) {
            handleError(err);
        }
    }
    return (
        <div class="container">
            <h1>Signup</h1>
            <form onSubmit={handleSignup}>
              <div>
                <label htmlFor='name'>Name</label>
                <input
                    onChange={handleChange}
                    type='text'
                    name='name'
                    autoFocus
                    placeholder="Enter your name..."
                    value={signupInfo.name}
                /> 
              </div>
              <div>
                <label htmlFor='email'>Email</label>
                <input
                    onChange={handleChange}
                    type='email'
                    name='email'
                    placeholder="Enter your email..."
                    value={signupInfo.email}
                /> 
              </div>
              <div>
                <label htmlFor='password'>Password</label>
                <input
                    onChange={handleChange}
                    type='password'
                    name='password'
                    placeholder="Enter your password..."
                    value={signupInfo.password}
                /> 
              </div>
              <button>- Create an account -</button>
              <span>Already have an account? {"\t\t"}
                 <Link to="/login">Login</Link>
              </span> { /* If user already signed up then give it a place*/ }
            </form>
            <ToastContainer />
        </div>
    )
}

export default Signup
