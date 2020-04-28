import React, { Component } from "react"
import styled from "styled-components"
import Category from "../commonElements/category/category"
import DescriptionEvent from "../commonElements/descriptionEvent/descriptionEvent"
import Followers from "../commonElements/followers/followers"
import Link from "../commonElements/link/link"
import Illustration from "../../images/ilustracion-workshop.svg"



const Image = styled.img`
  width: auto;
  height: 113px;
  margin-top: 5px;
  position: absolute;
    right: 0;
    top: 161px;
`

class workshop extends Component {
  render() {
    return (
      <div className="workshop">
        <Followers></Followers>
        <Category name="WORKSHOP" class="category-green-color"></Category>
        <DescriptionEvent
          class="margin-description"
          account="en 01:25 min"
          time="10:30 – 12:30"
          classTime="lighter-green"
          title="Consumo de APIs 
              con Android"
          classTit="dark-slate-blue"
          speaker="José Dimas"
          classSp="lighter-green"
          info="+ info"
          classInfo="pale-grey border-bottom-purpple"
        ></DescriptionEvent>
        <Image 
        src={Illustration}></Image>
            <a>
              <Link 
              p="Entrar  >"
              class="link  margin-link"
              ></Link>
            </a>
      </div>
    )
  }
}

export default workshop
