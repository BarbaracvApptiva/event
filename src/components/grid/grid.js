import React, { Component } from "react"
// import StackGrid from "react-stack-grid";
import styled from "styled-components"

const Grid = styled.div`
  display: grid;
  width:1368px;
margin:auto;
  grid-template-columns: 672px 324px 324px;
  column-gap: 24px;
  margin-top: 211px;
  
`
const Column1 = styled.div`
  display: flex;
  flex-direction: column;
  width: 672px;
`
const Column2 = styled.div`
  display: flex;
  flex-direction: column;
  width: 324px;
`
const BoxA1 = styled.div`
  width: 672px;
  height: 275px;
  background: yellow;
  margin-bottom: 24px;
`
const BoxA2 = styled.div`
  width: 672px;
  height: 161px;
  background: green;
  margin-bottom: 24px;
`
const BoxB1 = styled.div`
  width: 324px;
  height: 184px;
  background: orangered;
  margin-bottom: 24px;
`
const BoxB2 = styled.div`
  width: 324px;
  height: 185px;
  background: blanchedalmond;
  margin-bottom: 24px;
`
const BoxB3 = styled.div`
  width: 324px;
  height: 343px;
  background: orange;
  margin-bottom: 24px;
`

const BoxC1 = styled.div`
  width: 324px;
  height: 572px;
  background: greenyellow;
  margin-bottom: 24px;
`
const BoxC2 = styled.div`
  width: 324px;
  height: 161px;
  background: yellowgreen;
  margin-bottom: 24px;
`



class grid extends Component {
  render() {
    return (
  
        <Grid>
          <Column1>
            <BoxA1></BoxA1>
            <BoxA1></BoxA1>
            <BoxA2></BoxA2>
          </Column1>
          <Column2>
          <BoxB1></BoxB1>
          <BoxB2></BoxB2>
          <BoxB3></BoxB3>
          </Column2>
          <Column2>
          <BoxC1></BoxC1>
          <BoxC2></BoxC2>
          </Column2>


        </Grid>

    )
  }
}

export default grid
