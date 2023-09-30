import React, { useState } from 'react'
import styled from 'styled-components'
import Picker from 'emoji-picker-react'
import { IoMdSend } from "react-icons/io";
import { BsEmojiSmileFill } from "react-icons/bs";

const ChatInput = ({ handleSendMsg }) => {
    const [showEmojiPicker, setShowEmojiPicker] = useState(false);
    const [msg, setMsg] = useState("");

    const handleEmojiPickerHideShow = () => {
        setShowEmojiPicker(!showEmojiPicker);
    }

    const handleEmojiClick = (event) => {
        let message = msg;
        message += event.emoji;
        setMsg(message);
        // setShowEmojiPicker(false);
    }

    const sendChat = (event) => {
        event.preventDefault();
        if (msg.length > 0) {
            handleSendMsg(msg);
            setMsg('');
        }
    }

    return (
        <Container>
            <div className="button-container">
                <div className="emoji">
                    <BsEmojiSmileFill onClick={handleEmojiPickerHideShow} />
                    {
                        showEmojiPicker && <Picker onEmojiClick={handleEmojiClick} />
                    }
                </div>
            </div>
            <form className='input-container' onSubmit={(e) => sendChat(e)}>
                <input
                    type="text"
                    placeholder="type your message here"
                    onChange={(e) => setMsg(e.target.value)}
                    value={msg}
                />            <button type="submit">
                    <IoMdSend />
                </button>
            </form>
        </Container>
    )
}

const Container = styled.div`
display: grid;
grid-template-columns: 5% 95%;
align-items: center;
background-color: transparent;
padding: 0 1rem;
margin-top: -1.5rem;

@media screen and (min-width: 720px) and (max-width: 1080px) {
    padding: 0 2rem;
    gap: 1rem;
  }
.button-container{
    display: flex;
    align-items: center;
    color: white;
    gap: 1rem;
    margin-bottom: 1.5rem;
   
    @media screen and (min-width: 720px) and (max-width: 1080px) {
        margin-bottom: 0.1rem;
       
  }
    .emoji {
        position: relative;
        svg{
            font-size: 2rem;
            color: #0077ff;
            cursor: pointer;
            transition: 0.4s ease-in-out;
        &:hover{
            transform: scale(1.08);
        }
        }
        .EmojiPickerReact{
            position: absolute;
            top: -500px;
            background-color: white;
            box-shadow: 0 0 10px #0077ff;
            border-color: #0077ff;
            .epr-body::-webkit-scrollbar{
                background-color: white;
                width: 5px;
                &-thumb{
                    background-color: #0077ff;
                }
            }
            .epr-categories{
                button{
                    filter: contrast(0);
                }
            }
            .epr-search{
                background-color: transparent;
                border-color: #0077ff ;
            }
            .epr-emoji-category-label{
                background-color: white;
                color: black;
            }
            
        }
    }
}
.input-container{
    width: 100%;
    border-radius: 2rem;
    display: flex;
    align-content: center;
    gap: 3rem;
    margin-bottom: 2rem;
    
    background-color: #ecf9ff;
    @media screen and (min-width: 720px) and (max-width: 1080px) {
        margin-bottom: 0.5rem;
  }
    input{
        width: 90%;
        /* height: 60%; */
        background-color: transparent;
        color: black;
        border: none;
        padding: 0.8rem;
        font-size: 1.2rem;
        &::selection{
            background-color: #9a86f3;
        }
        &:focus{
            outline: none;
        }
    }
    button{
        padding: 0.3rem 2rem;
        border-radius: 2rem;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color:  #0077ff;
        border: none;
        @media screen and (min-width: 720px) and (max-width: 1080px) {
        padding: 0.3rem 1rem;
        svg {
          font-size: 1rem;
        }
      }
        svg{
            font-size: 2rem;
            color: white;
        }
    }
}
`;

export default ChatInput