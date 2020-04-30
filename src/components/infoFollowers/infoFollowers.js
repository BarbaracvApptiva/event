import React, { Component } from "react"
import styled from "styled-components"
import Close from "../../images/close.svg"
import { Tab, Tabs, TabList, TabPanel } from "react-tabs"
import User1 from "../../images/user1-followers.svg"
import User2 from "../../images/user2-followers.svg"
import User3 from "../../images/user3-followers.svg"
import User4 from "../../images/user4-followers.svg"
import User5 from "../../images/user5-followers.svg"
import User6 from "../../images/user6-followers.svg"
import User7 from "../../images/user7-followers.svg"

const CloseButton = styled.img`
  width: 31px;
  height: 31px;
  position: absolute;
  right: 16px;
  top: 16px;
  cursor: pointer;
`
const Title = styled.p`
  height: 31px;
  font-size: 27px;
  font-weight: 800;
  color: var(--soft-green);
  padding: 35px 0 37px 47px;
`



const Img = styled.img`
  width: 50.6px;
  height: 50.6px;
  margin-bottom: 0;
`
const Name = styled.p`
  font-size: 17px;
  font-weight: bold;
  color: var(--blueberry);
`

const Job = styled.p`
  font-size: 17px;
  font-weight: bold;
  color: #b0ade8;
`
const Button1 = styled.button`
  width: 95px;
  height: 27px;
  border-radius: 27.5px;
  background-color: var(--soft-green);
  text-align: center;
  font-size: 16px;
  font-weight: 900;
  color: var(--pale-grey);
  border: none;
`
const Button2 = styled.button`
  width: 69px;
  height: 27px;
  border-radius: 27.5px;
  background-color: var(--blueberry);
  text-align: center;
  font-size: 16px;
  font-weight: 900;
  color: var(--pale-grey);
  border: none;
`
const User = props => (
  <div className="user">
    <Img src={props.img}></Img>
    <div className="user-name">
      <Name>{props.name}</Name>
      <Job>{props.job}</Job>
    </div>
    <Button1>Conectar</Button1>
    <Button2>Visitar</Button2>
  </div>
)

class infoFollowers extends Component {
  render() {
    return (
      <div className="info-followers">
        <div className="header">
          <CloseButton src={Close} onClick={this.props.handleModalClose}></CloseButton>
          <Title>Seguidores</Title>
        </div>
        <Tabs>
          <TabList>
            <Tab>Todos</Tab>
            <Tab>Contactos</Tab>
          </TabList>

          <TabPanel>
            <User img={User1} name="Sonia Ruiz" job="Project Manager"></User>
            <User img={User2} name="Lorena García Cano" job="FullStack Developer"></User>
            <User img={User3} name="Fernando Ruiz García" job="Project Manager"></User>
            <User img={User4} name="Raul Pérez" job="UX/UI Designer"></User>
            <User img={User5} name="Cele Díaz Tristán" job="Project Manager"></User>
            <User img={User6} name="Claudia De La Cruz" job="CTO"></User>
            <User img={User7} name="Joaquín Ruiz Lite" job="CTO / FullStack Developer"></User>

          </TabPanel>
          <TabPanel>
            <User img={User2} name="Lorena García Cano" job="FullStack Developer"></User>
            <User img={User1} name="Sonia Ruiz" job="Project Manager"></User>
            <User img={User4} name="Raul Pérez" job="UX/UI Designer"></User>
            <User img={User3} name="Fernando Ruiz García" job="Project Manager"></User>
            <User img={User6} name="Claudia De La Cruz" job="CTO"></User>
            <User img={User5} name="Cele Díaz Tristán" job="Project Manager"></User>
            <User img={User7} name="Joaquín Ruiz Lite" job="CTO / FullStack Developer"></User>

          </TabPanel>
        </Tabs>
      </div>
    )
  }
}

export default infoFollowers
