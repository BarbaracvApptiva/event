import React, { Component } from "react"
import styled from "styled-components"
import Category from "../commonElements/category/category"
import Link from "../commonElements/link/link"
import Logotype from "../../images/logo.png"

const Logo = styled.img`
  width: 139px;
  height: 49px;
  margin-bottom: 15px;
`
const Ttile = styled.p`
  font-size: 22px;
  font-weight: 800;
  color: var(--blueberry);
  margin-bottom: 0;
`

class sponsor extends Component {
  render() {
    return (
      <div>
        <Category name="SPONSOR" class="category-green-color"></Category>
        <div className="sponsor">
            <Logo src={Logotype}></Logo>
            <Ttile>Busca y analiza tus datos en tiempo real.</Ttile>
            <a>
              <Link 
              p="Hablamos?  >"
              class="link"
              ></Link>
            </a>
        </div>
      </div>
    )
  }
}

export default sponsor
