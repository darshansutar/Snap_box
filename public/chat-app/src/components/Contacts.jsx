import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Logo from '../asset/logo.svg'

const Contacts = ({ contacts, currentUser, changeChat }) => {
    const [currentUserName, setCurrentUserName] = useState(undefined);
    const [currentUserImage, setCurrentUserImage] = useState(undefined);
    const [currentSelected, setCurrentSelected] = useState(undefined);
    
    useEffect(() => {
        if (currentUser) {
            setCurrentUserImage(currentUser.avatarImage);
            setCurrentUserName(currentUser.username);
        }
    }, [currentUser]);
    const changeCurrentChat = (index, contact) => {
        setCurrentSelected(index);
        changeChat(contact);
    }
    return (
        <>
            {
                currentUserImage && currentUserName && (
                    <Container>
                        <div className="brand">
                            <img src={Logo} alt="logo" />
                            <h3>Snap Box</h3>
                        </div>
                        <div className="contacts">
                            {
                                contacts.map((contact, index) => {
                                    return (
                                        <div className={`contact ${index === currentSelected ? "selected" : ""}`}
                                            key={index}
                                            onClick={()=> changeCurrentChat(index,contact)}>
                                            <div className="avatar">
                                                <img src={`data:image/svg+xml;base64,${contact.avatarImage}`} alt="avatar" />
                                            </div>
                                            <div className="username">
                                                <h3>{contact.username}</h3>
                                            </div>
                                        </div>
                                    );
                                })

                            }
                            
                        </div>

                        <div className="current-user">
                            <div className="avatar">
                                <img src={`data:image/svg+xml;base64,${currentUserImage}`} alt="avatar" />
                            </div>
                            <div className="username">
                                <h2>{currentUserName}</h2>
                            </div>
                        </div>
                    </Container>
                )
            }
        </>
    )
}

const Container = styled.div`
display: grid;
grid-template-rows: 10% 75% 15%;
overflow: hidden;
background-color: #ecf9ff;
margin:0.9rem;
padding: 0.8rem;
border-radius: 0.7rem;
    ${'' /* box-shadow: 0 10px 35px rgba(0, 119, 255, 0.2); */}

.brand{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.3rem;

    img{
        height: 2rem;
        background-color: white;
        border-radius: 50%;
    }
    h3{
        color: black;
        text-transform: uppercase;
    }
}
.contacts{
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: auto;
    gap: 0.8rem;
    &::-webkit-scrollbar {
        width: 0.2rem;
        &-thumb{
            background-color:white;
            width: 0.1rem;
            border-radius: 1rem;
        }
    }

    .contact{
        background-color: white;
        min-height: 5rem;
        width: 90%;
        cursor: pointer;
        border-radius: 0.2rem;
        padding: 0.4rem;
        color: black;
        gap: 1rem;
        align-items: center;
        box-shadow: 0 0 35px rgba(0, 119, 255, 0.1);
        border-radius: 1rem;
        display: flex;
        transition: 0.3s ease-in-out;
        &:hover{
           
            transform: scale(1.05);
        }
        .avatar{
            img{
                height: 3rem;
            }
        }
        .username{
            h3{
                color: black;
            }
        }
    }
    .selected{
        background-color: #0077ff;
        
        
    }
}
.current-user{
    ${'' /* background-color: #0077ff; */}
    border-radius: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    margin: 0.1rem;
    box-shadow: 0 0 35px rgba(0, 119, 255, 0.2);
    gap: 1rem;
    transition: 0.3s ease-in-out;
    &:hover{
           
           transform: scale(1.05);
       }
    .avatar{
        img{
            height: 4rem;
            max-inline-size: 100%;
        }
    }
    .username{
        h2{
            color: black;
        }
    }
    @media screen and  (min-width: 720px) and (max-width : 1080px) {
        gap: 0.5rem;
        padding:0.5rem;
        .username{
            h2{
                font-size: 1rem;
            }
        }
      }
}
`;

export default Contacts