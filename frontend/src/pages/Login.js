import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import { handleError, handleSuccess } from '../utils';
function Login() {
    
    const [loginInfo, setLoginInfo] = useState({
        email: '',
        password: '' 
    }) // created for storing temporary creds base.
    
/* name and value are already defined into input, name="value"; */
    const navigate = useNavigate(); //a function
    const handleChange = (e) => {
        const { name, value } = e.target
        // console.log(name, value);
        const copyLoginInfo = { ...loginInfo }; //here we copied the parameter and its value by adding it into another variable/function
        copyLoginInfo[name] = value //
        // console.log(copySignupInfo)
        setLoginInfo(copyLoginInfo);
    } //its a function 

     // console.log('SignupInfo -> ', signupInfo)
    const handleLogin = async (e) => { //its an api call
        e.preventDefault();
        const {email, password} = loginInfo;
        if(!email || !password) {
            return handleError('All Fields are required for signin!')
        }
        try {
            const url = "https://mern-authentication-sys-backend.onrender.com/auth/login";
            // console.log(JSON.stringify(loginInfo))
            const response = await fetch(url,{
                method: "POST",
                headers: {
                    "Content-Type": 'application/json'
                },
                body: JSON.stringify(loginInfo) 
            });
            const result = await response.json();
            const { success, jwtToken, name, message, error } = result
            if(success){
                handleSuccess(message);
                localStorage.setItem('token', jwtToken);    //creating cookie as storinging it into local storage
                localStorage.setItem('loggedInUser', name);
                setTimeout(()=>{
                    navigate('/home')
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
            <h1>Login</h1>
            <form onSubmit={handleLogin}>
{/*              <div>
                <label htmlFor='name'>Name</label>
                <input
                    onChange={handleChange}
                    type='text'
                    name='name'
                    placeholder="Enter your name..."
                    value={signupInfo.name}
                /> 
              </div>
*/}              <div>
                <label htmlFor='email'>Email</label>
                <input
                    autoFocus
                    onChange={handleChange}
                    type='email'
                    name='email'
                    placeholder="Enter your email..."
                    value={loginInfo.email}
                /> 
              </div>
              <div>
                <label htmlFor='password'>Password</label>
                <input
                    onChange={handleChange}
                    type='password'
                    name='password'
                    placeholder="Enter your password..."
                    value={loginInfo.password}
                /> 
              </div>
              <button> - Login - </button>
              <span>Create a New account - {"\t\t"}
                 <Link to="/signup">Signup</Link>
              </span> { /* If user already signed up then give it a place*/ }
            </form>
            <ToastContainer />
        </div>
    )
}

export default Login
