import React, { Component } from "react"
import styled from "styled-components"
import Category from "../commonElements/category/category"
import Link from "../commonElements/link/link"

const Card = styled.div`
  min-width: 166px;
  height: 166px;
  border-radius: 5px;
  margin: 19px 14px 0px 0px;
  padding: 16px 10px;
`
const Title = styled.p`
  font-size: 22px;
  font-weight: 800;
  margin-bottom: 4px;
`
const Speaker = styled.p`
  font-size: 18px;
  font-weight: 500;
  color: var(--dark-indigo);
  margin-bottom: 0px;
`
const Date = styled.p`
  font-size: 13px;
  font-weight: 800;
  color: var(--dark-indigo);
  margin-bottom: 8px;
`
const LinkR = styled.p`
  font-size: 17px;
  font-weight: bold;
  color: var(--dark-indigo);
  margin: auto;
  text-align: center;
`

const Recording = props => (
  <Card className={props.class}>
    <Title className={props.classT}>{props.title}</Title>
    <Speaker>{props.speaker}</Speaker>
    <Date>{props.date}</Date>
    <LinkR>Entrar ></LinkR>
  </Card>
)

class recordings extends Component {
  render() {
    return (
      <div className="recordings">
        <Category name="GRABACIONES" class="category-basic-color"></Category>
        <div className="cards-recordings">
          <Recording
            class="background-card-basic"
            classT="lighter-green"
            title="Test Driven 
          Development"
            speaker="Sonia Ruiz"
            date="2 marzo"
          ></Recording>
          <Recording
            class="background-card-green"
            classT="pale-grey"
            title="Test Driven 
          Development"
            speaker="Sonia Ruiz"
            date="4 marzo"
          ></Recording>
          <Recording
            class="background-card-basic"
            classT="lighter-green"
            title="Desarrollo con ReactJS"
            speaker="Jorge Aldao"
            date="12 marzo"
          ></Recording>
          <Recording
            class="background-card-basic"
            classT="lighter-green"
            title="Test Driven 
          Development"
            speaker="Sonia Ruiz"
            date="2 abril"
          ></Recording>
         
        </div>
        <a>
            <Link p="Descubrir  +" class="link"></Link>
          </a>
      </div>
    )
  }
}

export default recordings
