import React, { Component } from 'react';
import styled from "styled-components"

const Accountant = styled.div`
  width: 171px;
  height: 41px;
  border-radius: 20.5px;
  background-color: var(--blueberry);
  font-size: 22px;
  font-weight: 900;
  color: var(--pale-grey);
  margin-bottom: 11px;
  text-align: center;
  padding-top:6px;
`
const Time = styled.p`
  font-size: 17px;
  font-weight: bold;
  margin-bottom: 9px;
`
const Title = styled.p`
  font-size: 27px;
  font-weight: 800;
  margin-bottom: 6px;
`
const Speaker = styled.p`
  font-size: 19px;
  font-weight: 500;
  margin-bottom: 5px;
`


class descriptionEvent extends Component {
    render() {
        return (
            <div className={this.props.class}>
                <Accountant
                >{this.props.account}</Accountant>
                <Time
                className={this.props.classTime}
                >{this.props.time}</Time>
                <Title
                className={this.props.classTit}
                >{this.props.title}</Title>
                <Speaker
                className={this.props.classSp}
                >{this.props.speaker}</Speaker>
            
                
            </div>
        );
    }
}

export default descriptionEvent;