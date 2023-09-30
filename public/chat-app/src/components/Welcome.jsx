import React from 'react'
import styled from "styled-components";
import Robot from '../asset/Namaste2.gif';

const Welcome = ({currentUser}) => {
  return (
    <Container>
        <img src={Robot} alt="Robot" />
        <h1>Namaste, <span>{currentUser.username}</span></h1>
        {/* <h1>Namaste, <span>{currentUser.email}</span></h1> */}
        <h3>Please select a chat to Start Messaging.</h3>
    </Container>

    
  )
}

const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
color: white;
img{
    height: 30rem;
}
span{
    color: #0077ff;
}
h1{
    color:black;
}
h3{
    color:black;
}

`;

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

export default Welcome