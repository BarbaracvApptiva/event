import React, { Component } from 'react';
import styled from "styled-components"


const Balloon = styled.div`
  width: auto;
  height: 45px;
  border-radius: 22.5px;
  background-color: var(--pale-grey);
  display: flex;
  text-overflow: ellipsis;
      overflow: hidden;
      margin-bottom: 9px;
`

const Data = styled.div`
display: flex;
flex-direction: column;
`

const Name = styled.p`
  font-size: 12px;
  font-weight: bold;
  color: var(--blueberry);
  margin-bottom: 0;
  
`
const Message = styled.p`
  font-size: 12px;
  font-weight: bold;
  color: var(--perrywinkle);
  margin-bottom: 0;
  margin-top: -9px;
`
const Image = styled.img`
  width: 24.8px;
  height: 24.8px;
  margin: auto 8px auto 10px;
`

class conversation extends Component {
    render() {
        return (
            <div>
                <Balloon>  
                        <Image src={this.props.img}></Image>
                        <Data>
                            <Name>{this.props.name}</Name>
                            <Message>{this.props.message}</Message>
                        </Data>
                    
                </Balloon>
            </div>
        );
    }
}

export default conversation;