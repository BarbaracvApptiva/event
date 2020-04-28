import React, { Component } from "react"
import styled from "styled-components"
import Category from "../commonElements/category/category"
import Link from "../commonElements/link/link"
import Illustration from "../../images/ilustracion-press.svg"

const Image = styled.img`
  width: auto;
  height: 123px;
  margin-top: 10px;
`

const DataRight = styled.div`
  width: auto;
  height: 107px;
  margin-left: 24px;
  position: relative;
`
const Title = styled.p`
  font-size: 27px;
  font-weight: 800;
  margin-bottom: 6px;
  color: var(--lighter-green);
  margin-top:24px;
`
const Description = styled.p`
  font-size: 14px;
  font-weight: 500;
  color: var(--dark-indigo);
  line-height: normal;
`

class press extends Component {
  render() {
    return (
      <div>
        <Category name="SALA DE PRENSA" class="category-basic-color"></Category>
        <div className="press">
          <Image src={Illustration}></Image>
          <DataRight>
            <Title>Kit de prensa</Title>
            <Description>Comunicados, noticias, identidad</Description>
            <a>
              <Link 
              p="Adquirir  >"
              class="link"
              ></Link>
            </a>
          </DataRight>
        </div>
      </div>
    )
  }
}

export default press
