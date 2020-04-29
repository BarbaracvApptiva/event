import React, { Component } from "react"
import styled from "styled-components"
import Category from "../commonElements/category/category"
import DescriptionEvent from "../commonElements/descriptionEvent/descriptionEvent"
import Followers from "../commonElements/followers/followers"
import Link2 from "../commonElements/link/link"
import ReactModal2 from 'react-modal'
import ReactModal from 'react-modal'
import { Link } from 'gatsby'
import InfoConference from "../infoConference/infoConference"


const DataLeft = styled.div`
  width: 256.5px;
  height: 196px;
  border-right: solid 1px var(--blueberry);
`

const DataRight = styled.div`
  width: 414.5px;
  height: 196px;
  padding-left: 46.5px;
`

class conferencia extends Component {


  constructor(props) {
    super(props)
    this.state = {
      isModalOpen: false,
    }
  }
  handleModalOpen = event => {
    this.setState({ isModalOpen: true })
  }

  handleModalClose = event => {
    this.setState({ isModalOpen: false })
  }



  render() {
    return (
      <div className="conference">
         <Followers></Followers>
        <Category name="CONFERENCIA" class="category-basic-color"></Category>
        <div className="data-conference">
       
          <DataLeft></DataLeft>
          <DataRight>
            <DescriptionEvent
              account="en 00:15 min"
              time="09:45 – 10:30"
              classTime="dark-indigo"
              title="The Art of Front-end
              Architecture"
              classTit="lighter-green"
              speaker="Sonia Ruiz"
              classSp="dark-indigo"
              info="+ info"
              classInfo="boring-green border-bottom-green"
            ></DescriptionEvent>
            
          </DataRight>
          <a>
              <Link2
              p="Entrar  >"
              class="link"
              ></Link2>
            </a>
        </div>


        <Link to=" " onClick={this.handleModalOpen}
        className="info">
        + info
          </Link>


          <ReactModal2
          closeTimeoutMS={200}
          isOpen={this.state.isModalOpen}
          onRequestClose={this.handleModalClose}
          
          
        >
         <InfoConference>
         </InfoConference>
        </ReactModal2>


      </div>
    )
  }
}

export default conferencia
