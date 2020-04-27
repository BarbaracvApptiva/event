import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { Component } from "react"
import styled from "styled-components"
import Logotype from "../../images/logo.svg"
import Bell from "../../images/bell.svg"
import Calendar from "../../images/calendar.svg"
import Speaker from "../../images/speaker.svg"
import Message from "../../images/message.svg"
import Contacts from "../../images/contacts.svg"
import Handshake from "../../images/handshake.svg"
import Search from "../../images/search.svg"
import Notific from "../../images/notification.svg"
import Chats from "../../images/chats.svg"
import Avatar from "../../images/avatar.svg"

const Header = styled.header`
  width: 1368px;
  height: 176px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* background-image: linear-gradient(130deg, #3c34c2 11%, #7c74d7 87%); */
  justify-content: left;
  margin: 0px auto;
`

const Logo = styled.img`
  width: 339px;
  height: 94px;
  margin-top: 28px;
`

const Notification = styled.div`
  height: 50%;
  display: flex;
  justify-content: space-between;
  padding-left: 42px;
  padding-top: 25px;
  padding-right: 39px;
`
const IconSearch = styled.img`
  width: 20px;
  height: 20px;
  object-fit: contain;
  margin: auto;
`
const IconNotifications = styled.img`
  margin-right: 31.3px;
`
const IconAvatar = styled.img`
  width: 39px;
  height: 39px;
`

const Nav = styled.nav``
const Ul = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
  justify-content: space-between;
  padding-left: 20px;
  padding-right: 20px;
  padding-right: 34px;
`
const Li = styled.li`
  display: flex;
  align-items: center;
  height: 47px;
  margin-top: 14px;
  width: 165px;
`
const Icon = styled.img`
  margin: auto;
  margin-left: 26px;
  margin-right: 17px;
`
const Text = styled.p`
  font-size: 15px;
  font-weight: 600;
  text-align: center;
  color: var(--pale-grey);
`

const Options = props => (
  <Li>
    <Icon src={props.icon} />
    <Text>{props.p}</Text>
  </Li>
)

class header extends Component {
  render() {
    return (
      <div className="width-header">
      <Header>
        
          <Logo src={Logotype} />
          <div className="section-nav">
            <Notification>
              <form class="search-container">
                <input
                  id="search-box"
                  type="text"
                  class="search-box"
                  name="q"
                />
                <label for="search-box">
                  <IconSearch
                    className="glyphicon glyphicon-search search-icon"
                    src={Search}
                  ></IconSearch>
                </label>
                <input type="submit" id="search-submit" />
              </form>
              <div className="alerts">
                <IconNotifications src={Notific}></IconNotifications>
                <IconNotifications src={Chats}></IconNotifications>
                <p>Hi, Bar</p>
                <IconAvatar src={Avatar}></IconAvatar>
              </div>
            </Notification>
            <Nav>
              <Ul>
                <Options icon={Bell} p="Recepción" />
                <Options icon={Calendar} p="Agenda" />
                <Options icon={Speaker} p="Ponentes" />
                <Options icon={Message} p="Blog" />
                <Options icon={Contacts} p="Contacto" />
                <Options icon={Handshake} p="Patrocinadores" />
              </Ul>
            </Nav>
          </div>
        
      </Header>
      </div>
    )
  }
}

export default header
