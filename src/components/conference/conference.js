import React, { Component } from "react"
import styled from "styled-components"
import Category from "../commonElements/category/category"
import DescriptionEvent from "../commonElements/descriptionEvent/descriptionEvent"
import Followers from "../commonElements/followers/followers"
import Link2 from "../commonElements/link/link"
import ReactModal2 from "react-modal"
import ReactModal from "react-modal"
import { Link } from "gatsby"
import InfoConference from "../infoConference/infoConference"
import InfoFollowers from "../infoFollowers/infoFollowers"

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
      isModalOpen2: false,
      isModalOpen: false
    }
  }
  handleModalOpen = event => {
    this.setState({ isModalOpen: true })
  }

  handleModalOpen2 = event => {
    this.setState({ isModalOpen2: true })
  }
  handleModalClose = event => {
    this.setState({ isModalOpen: false })
    this.setState({ isModalOpen2: false })
  }

  render() {
    return (
      <div className="conference">
        <Link to=" " onClick={this.handleModalOpen2}>
          <Followers></Followers>
        </Link>

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
            <Link2 p="Entrar  >" class="link"></Link2>
          </a>
        </div>

        <Link to=" " onClick={this.handleModalOpen} className="info">
          + info
        </Link>

        <ReactModal
          className="modal-followers"
          closeTimeoutMS={200}
          isOpen={this.state.isModalOpen2}
          onRequestClose={this.handleModalClose}
        >
          <InfoFollowers handleModalClose={this.handleModalClose} />
        </ReactModal>

        <ReactModal2
          className="modal-conference"
          closeTimeoutMS={200}
          isOpen={this.state.isModalOpen}
          onRequestClose={this.handleModalClose}
        >
          <InfoConference handleModalClose={this.handleModalClose} />
        </ReactModal2>
      </div>
    )
  }
}

export default conferencia
