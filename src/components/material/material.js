import React, { Component } from "react"
import styled from "styled-components"
import Category from "../commonElements/category/category"
import Link from "../commonElements/link/link"

const Title = styled.p`
  font-size: 27px;
  font-weight: 800;
  margin-bottom: 6px;
  color: var(--blueberry);
`

const Download = styled.div`
  width: 122px;
  height: 36px;
  border-radius: 20.5px;
  background-color: var(--soft-green);
  font-size: 19px;
  font-weight: 900;
  color: var(--pale-grey);
  text-align: center;
  padding-top:4px;
  margin-top: 13px;
`

class material extends Component {
  render() {
    return (
      <div className="material">
        <Category name="MATERIAL DE INTERÉS" class="category-basic-color"></Category>

        <Title>9+ Free React Templates</Title>
        <Download>Descargar</Download>
        <a>
          <Link p="Descubrir  +" class="link"></Link>
        </a>
      </div>
    )
  }
}

export default material
