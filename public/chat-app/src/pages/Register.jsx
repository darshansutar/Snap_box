import React, {useState, useEffect} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import styled from 'styled-components';
import Logo from "../asset/logo.svg";
import {ToastContainer, toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from 'axios';
import { registerRoute } from '../utils/APIRoutes';
import SocialLoginButtons from '../components/SocialLoginButtons';
function Register() {
      const navigate = useNavigate()
     const [values, setValues] = useState({
        username: "",
        email: "",
        password:"",
        confirmPassword:"",
     }); 
     const toastOptions = {
        
            position: "bottom-right",
            autoClose: 8000,
            pauseOnHover: true,
            draggable: true,
            theme: 'light'
        
     }

     useEffect(()=>{
        if(localStorage.getItem('chat-app-user')){
                navigate('/')
        }
     },[])


    const handleSumbit = async (event) => {
        event.preventDefault();
       
        if(handleValidation()){
            const {password,  username, email} = values;
            const {data} = await axios.post(registerRoute, {
               username,
               email,
               password,
            });
            if(data.status===false){
                toast.error(data.msg, toastOptions);
            }

            if(data.status === true){
                localStorage.setItem('chat-app-user', JSON.stringify(data.user));
                navigate("/");
            }
           
        };
    };

    const handleValidation=()=>{
        const {password, confirmPassword, username, email} = values;
        if(password!== confirmPassword){
            toast.error("Password and confirm password should be same",toastOptions);
            return false;
        } else if (username.length<3){
            toast.error("Username should be greater than 3 characters",toastOptions);
            return false;
        } else if (password.length<8){
            toast.error("Password should be equal or greater than 8 characters ",toastOptions);
            return false;
        } else if(email===""){
            toast.error("email is required", toastOptions);
            return false;
        }
        return true;
    };

    const handleChange = (event) =>{
        setValues({ ...values,[event.target.name]:event.target.value});
}
    return (
        <>
        
            <FormContainer>
            
                <form onSubmit={(event) => handleSumbit(event)}>
                    <div className="brand">
                        <img src={Logo} alt="Logo" />
                        <h1>Snap Box</h1>
                    </div>
                    <input type="text" placeholder='Username' name='username' onChange={e => handleChange(e)} />

                    <input type="email" placeholder='Email' name='email' onChange={e => handleChange(e)} />

                    <input type="password" placeholder='Password' name='password' onChange={e => handleChange(e)} />

                    <input type="password" placeholder='Confirm Password' name='confirmPassword' onChange={e => handleChange(e)} />
                    <button className='btn' type='submit'>Create User</button>
                    <SocialLoginButtons/>
                    <span>Already have an Account ? <Link to="/login">
                        Login
                    </Link></span>
                </form>
            </FormContainer>

            <ToastContainer/>
        </>
    )
}

const FormContainer = styled.div`
height: 100vh;
width: 100vw;
display: flex;
flex-direction: column;
justify-content: center;
gap: 1rem;
align-items: center;
background-color: #ECF9FF;

.brand{
    display:flex;
    align-items: center;
    gap: 0.5rem;
    justify-content: center;
    img{
    height: 5rem;
    
}
h1{
    color: black;
    text-transform: uppercase;
}
}

form{
    display:flex;
    flex-direction: column;
    gap: 1.5rem;
    background-color: #fff;
    border-radius: 2rem;
    padding: 3rem 5rem;
    box-shadow: 0 15px 35px rgba(0, 119, 255, 0.09);
    input{
        background-color: transparent;
        padding: 1rem;
        border: 0.1rem solid #458bff;
        ${'' /* border: none; */}
        ${'' /* box-shadow: 0 15px 35px rgba(0, 119, 255, 0.05); */}
        border-radius: 0.8rem;
        color: black;
        width: 100%;
        font-size: 1rem;
        &: focus{
            background: rgba(0, 119, 255, 0.09);
            outline: none;
            border: 0.1rem solid #0053b2;
            transition: 0.5s ease-in-out;
        }
    }
    .btn{
        background-color: #0077ff;
        color: white;
        padding: 1rem 2rem;
        border: none;
        font-weight: bold;
        cursor: pointer;
        border-radius: 0.8rem;
        font-size: 1rem;
        text-transform: uppercase;
        transition: 0.5s ease-in-out;
        &:hover{
            background-color: #0053b2;
            transform: scale(1.03);
        }
    }

    span{
        text-transform: uppercase;
        color: rgb(0, 119, 255);
    }
    a{
        color: #0053b2;
        text-decoration: none;
        font-weight: bold;
    }

}







`;

export default Register
