import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { handleSuccess, handleError } from '../utils'
import { ToastContainer } from 'react-toastify';

function Home() {
    const [loggedInUser, setLoggedInUser] = useState('');
    const [products, setProducts] = useState('');
    const navigate = useNavigate();
    
    useEffect(() => {
        setLoggedInUser(localStorage.getItem('loggedInUser'))
    },[]);

    const handleLogout = (e) => {
       localStorage.removeItem('token');
       localStorage.removeItem('loggedInUser');
       handleSuccess('User Loggedout')
       setTimeout(()=>{
        navigate('/login');
       }, 1000)
   }

   const fetchProducts = async () => {
    try
    {
        const url = 'https://mern-authentication-sys-backend.onrender.com/products';
        const headers = {
            headers : {
                'Authorization': localStorage.getItem('token')
            }
        }
        const response = await fetch(url, headers);
        //console.log(response)
        const result = await response.json();
        // console.log(result);
        setProducts(result);
    } catch (err) {
        handleError(err)
    }
   }
   useEffect(() => {
    fetchProducts()
   }, [])
        return (
            <div>
                <h1>{loggedInUser}</h1>
                <button onClick={handleLogout}>- LogOut -</button>
                <div>{
                    products && products?.map((item, index)=>(
                        <ul key={index}>
                        <span>
                        {item.name} : {item.price} 
                        </span>
                        </ul>
                    ))
                }
                </div>
                <ToastContainer />
            </div>
        ) 
}

export default Home
