import React, { Component } from "react"
import styled from "styled-components"

const Category = styled.div`
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  
`

class category extends Component {
  render() {
    return <Category 
    className={this.props.class}>
    {this.props.name}
    </Category>
  }
}

export default category
