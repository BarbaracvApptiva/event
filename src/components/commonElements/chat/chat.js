import React, { Component } from 'react';
import styled from "styled-components"
import Message from "../../../images/message-chat.svg"


const Chat = styled.div`
  width: 100%;
  height: auto;
  margin: auto;
  margin-top: 16.5px;
  padding-top: 16.5px;
  border-top: solid 1px var(--blueberry);
  display: flex;
`

const Data = styled.div`
width: 100%;
  display: flex;
  justify-content: space-between;
`

const Direct = styled.p`
  width: 100px;
  height: 18px;
  font-family: Raleway;
  font-size: 12px;
  font-weight: 900;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: var(--blueberry);
`

const Messenges = styled.div`
  width: 56px;
  height: 25px;
  border-radius: 5px;
  border: solid 1px var(--light-bright-green);
  background-color: #ffffff;

  img{
    position: relative;
    top: -45px;
    left: 34px;
}
  p{
    font-size: 14px;
    font-weight: bold;
    /* text-align: center; */
    margin-left: 5px;
    margin-top: -2px;
    color: #1a1a1a;
  }
`

class chat extends Component {
    render() {
        return (
            <div>
               <Chat>
                   <Data>
                <Direct>Directo</Direct>
                <Messenges>
                <p>273</p>
                <img src={Message}></img>
                </Messenges>
                </Data>
               </Chat>
            </div>
        );
    }
}

export default chat;