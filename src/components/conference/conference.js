import React, { Component } from "react"
import styled from "styled-components"
import Category from "../commonElements/category/category"
import DescriptionEvent from "../commonElements/descriptionEvent/descriptionEvent"
import Followers from "../commonElements/followers/followers"
import Link2 from "../commonElements/link/link"
import { Link } from 'gatsby'

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
            <Link2 p="Entrar  >" class="link"></Link2>
          </a>
        </div>
        <Link
  to="/infoConference/"
  state={{
    modal: true
  }}
>
  Login
</Link>
      </div>
    )
  }
}

export default conferencia
