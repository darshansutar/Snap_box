import React from 'react'
import { FacebookAuthProvider, GithubAuthProvider, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import axios from "axios";
import { firebaseLoginRoute } from '../utils/APIRoutes'
import { firebaseAuth } from '../utils/firebaseConfig';
import { useNavigate } from 'react-router-dom'
import { BsFacebook, BsGithub, BsGoogle } from 'react-icons/bs'

import styled from 'styled-components'

function SocialLoginButtons() {
    const navigate = useNavigate();
    const providers = {
        google: new GoogleAuthProvider(),
        facebook: new FacebookAuthProvider(),
        github: new GithubAuthProvider(),
      }
     
    const firebaseLogin = async (loginType) => {
        
       
        try {
          const provider = providers[loginType];
          const userData = await signInWithPopup(firebaseAuth,provider);
          console.log(userData);
          const email = userData.user.email;
          console.log(email,loginType);
          const {data} = await axios.post(firebaseLoginRoute,{email});
          
          if(data.status){
            localStorage.setItem('chat-app-user', JSON.stringify(data.user));
            navigate("/");
          } else {
            navigate("/setusername")
          }
        } catch (err) {
          console.log(err)
        }
      }
    return (
        <Container>
            <button type='button' onClick={()=>firebaseLogin("google")}>
                <BsGoogle/>
            </button>
            <button type='button' onClick={
          () =>
          // firebaseLogin("facebook")
          alert("Will be available shortly...")
          }>
                <BsFacebook/>
            </button>
            <button type='button' onClick={()=>firebaseLogin("github")}>
                <BsGithub/>
            </button>
        </Container>
    )
}

const Container = styled.div`
   display: flex;
  width: 100%;
  justify-content: center;
  gap: 1rem;
  background-color: transparent;
  button {
    background-color: #0077ff;
     border: none;
    font-size: 1.5rem;
    padding: 0.8rem;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-weight: bold;
    cursor: pointer;
    border-radius: 50%;
    box-shadow: 0 0 20px rgba(0, 119, 255, 0.1);
    transition: 0.5s ease-in-out;
    &:hover {
      background-color: #0053b2;
    }
  }
`;

export default SocialLoginButtons
