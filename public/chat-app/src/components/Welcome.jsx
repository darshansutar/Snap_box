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

export default Welcome