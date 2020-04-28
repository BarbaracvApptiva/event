import React, { Component } from 'react';
import styled from "styled-components"
import FollowerImg from "../../../images/follower.svg"
import Eye from "../../../images/eye.svg"

const Follower = styled.div`
position: absolute;
top: 8.3px;
right: 36px;
`

const FollowersAvatar = styled.img`
  width: 45px;
  height: 45px;
`
const FollowersNumber = styled.div`
width: 56px;
  height: 25px;
  border-radius: 5px;
  border: solid 1px var(--light-bright-green);
  background-color: #ffffff;
  position: absolute;
    top: 28px;
    left: 26px;
img{
    position: relative;
    top: -45px;
    left: 34px;
}
  p{
    font-size: 14px;
    font-weight: bold;
    /* text-align: center; */
    margin-left: 5px;
    margin-top: -2px;
    color: #1a1a1a;
  }
`

class  followers extends Component {
    render() {
        return (
            <div>
                <Follower>
                    <FollowersAvatar
                    src= {FollowerImg}
                    ></FollowersAvatar>
                    <FollowersNumber>
                        <p>836</p>
                        <img src={Eye}></img>
                    </FollowersNumber>
                </Follower>
            </div>
        );
    }
}

export default  followers;