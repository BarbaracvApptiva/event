import React, { Component } from "react"
import styled from "styled-components"
import Category from "../commonElements/category/category"
import Chat from "../commonElements/chat/chat"
import Conversation from "../commonElements/conversation/conversation"
import Link from "../commonElements/link/link"
import Followers from "../commonElements/followers/followers"
import Illustration from "../../images/ilustracion-community.svg"
import User1 from "../../images/user1.svg"
import User2 from "../../images/user2.svg"

const Title = styled.p`
  font-size: 32px;
  font-weight: 800;
  color: var(--blueberry);
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  margin-top: 46px;
`

const Image = styled.img`
  width: auto;
  height: 157px;
  margin-top: 10px;
  margin: auto;
`

class community extends Component {
  render() {
    return (
      <div className="community">
          <Followers></Followers>
        <Category name="CAFETERÍA" class="category-basic-color"></Category>

        <Title>
          Opina, crea, <br></br> contacta
        </Title>
        <Image src={Illustration}></Image>
        <Chat></Chat>
        <Conversation
          img={User1}
          name="Sonia Ruiz"
          message="Muy interesante bfds…"
        ></Conversation>
        <Conversation
          img={User2}
          name="Sonia Ruiz"
          message="Muy interesante vfd vdsvsdvdsvd lorem ipsum tatata md estrivd lsetgie "
        ></Conversation>
        <a>
          <Link p="Entrar >" class="link"></Link>
        </a>

      </div>
    )
  }
}

export default community
