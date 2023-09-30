import axios from 'axios'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { BiPowerOff } from "react-icons/bi";

const Logout = () => {
    const navigate = useNavigate();
    const handleClick = async () => {
        localStorage.clear();
        navigate("/login");
    }

  return (
    <Button onClick={handleClick}>
        <BiPowerOff/>
    </Button>
  )
}

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.7rem;
  border-radius: 50%;
  background-color: #0077ff;
  box-shadow: 0 0 20px rgba(0, 119, 255, 0.3);
  border: none;
  cursor: pointer;
  transition: 0.3s ease-in-out;
  &:hover{
           
           transform: scale(1.08);
       }
  
  svg {
    font-size: 1.5rem;
    color: #ebe7ff;
    
  }
`;
export default Logout