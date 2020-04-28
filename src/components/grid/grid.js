import React, { Component } from "react"
// import StackGrid from "react-stack-grid";
import styled from "styled-components"
import Conference from"../conference/conference"
import Sponsor from "../sponsor/sponsor"
import Press from "../press/press"
import Workshop from "../workshop/workshop"
import Stands from "../stands/stands"
import Material from "../material/material"
import Community from "../community/community"
import Recordings from "../recordings/recordings"


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
  background-color: #ffffff;
  margin-bottom: 24px;
  box-shadow: 2px 2px 8px 0 rgba(0, 0, 0, 0.05);
`
const BoxA2 = styled.div`
  width: 672px;
  height: 161px;
  background-color: #ffffff;
  margin-bottom: 24px;
  box-shadow: 2px 2px 8px 0 rgba(0, 0, 0, 0.05);
`
const BoxB1 = styled.div`
  width: 324px;
  height: 184px;
  margin-bottom: 24px;
  box-shadow: 2px 2px 8px 0 rgba(0, 0, 0, 0.05);
`
const BoxB2 = styled.div`
  width: 324px;
  height: 185px;
  background-color: #ffffff;
  margin-bottom: 24px;
  box-shadow: 2px 2px 8px 0 rgba(0, 0, 0, 0.05);
`
const BoxB3 = styled.div`
  width: 324px;
  height: 343px;
  margin-bottom: 24px;
  box-shadow: 2px 2px 8px 0 rgba(0, 0, 0, 0.05);
`

const BoxC1 = styled.div`
  width: 324px;
  height: 572px;
  background-color: #ffffff;
  margin-bottom: 24px;
  box-shadow: 2px 2px 8px 0 rgba(0, 0, 0, 0.05);
`
const BoxC2 = styled.div`
  width: 324px;
  height: 161px;
  background-color: #ffffff;
  margin-bottom: 24px;
  box-shadow: 2px 2px 8px 0 rgba(0, 0, 0, 0.05);
`



class grid extends Component {
  render() {
    return (
  
        <Grid>
          <Column1>
            <BoxA1 className="paddingBox"><Conference></Conference></BoxA1>
            <BoxA1 className="paddingBox"><Recordings></Recordings></BoxA1>
            <BoxA2 className="paddingBox"><Stands></Stands></BoxA2>
          </Column1>
          <Column2>
          <BoxB1 className="paddingBox background-green"><Sponsor></Sponsor></BoxB1>
          <BoxB2 className="paddingBox"><Press></Press></BoxB2>
          <BoxB3 className="paddingBox background-purpple"><Workshop></Workshop></BoxB3>
          </Column2>
          <Column2>
          <BoxC1 className="paddingBox"><Community></Community></BoxC1>
          <BoxC2 className="paddingBox"><Material></Material></BoxC2>
          </Column2>


        </Grid>

    )
  }
}

export default grid
