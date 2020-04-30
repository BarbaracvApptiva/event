import React, { Component } from 'react';
import styled from "styled-components";
import Close from "../../images/close.svg";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';





const CloseButton = styled.img`
  width: 31px;
  height: 31px;
  position: absolute;
  right: 16px;
  top: 16px;
`
const Title = styled.p`
height: 31px;
font-size: 27px;
font-weight: 800;
color: var(--soft-green);
padding: 35px 0 37px 47px;
`

const User = styled.div`
height: 90px;
border-bottom: solid 1px #979797;
`


 


class infoFollowers extends Component {
    render() {
        return (
            <div>
               <CloseButton
               src={Close}></CloseButton>
<Title>Seguidores</Title>
<Tabs>
    <TabList>
      <Tab>Title 1</Tab>
      <Tab>Title 2</Tab>
    </TabList>
 
    <TabPanel>
      <User></User>
      <User></User>
      <User></User>
      <User></User>
      <User></User>
      <User></User>
      <User></User>
      <User></User>
    </TabPanel>
    <TabPanel>
      <h2>Any content 2</h2>
    </TabPanel>
  </Tabs>
            </div>
        );
    }
}

export default infoFollowers;