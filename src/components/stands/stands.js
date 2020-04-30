import React, { Component } from "react"
import styled from "styled-components"
import Category from "../commonElements/category/category"
import Link from "../commonElements/link/link"
import Logotype1 from "../../images/logo1.png"
import Logotype2 from "../../images/logo2.png"
import Logotype3 from "../../images/logo3.png"
import Logotype4 from "../../images/logo4.png"


const Logotype = styled.img`
  height: fit-content;
`

class stands extends Component {
  render() {
    return (
      <div className="stands">
        <Category name="stands" class="category-basic-color"></Category>
        <div className="logotypes">
            <Logotype src={Logotype1}></Logotype>
            <Logotype src={Logotype2}></Logotype>
            <Logotype src={Logotype3}></Logotype>
            <Logotype src={Logotype4}></Logotype>
        </div>
        <a>
          <Link p="Ver todos  >" class="link"></Link>
        </a>
      </div>
    )
  }
}

export default stands
