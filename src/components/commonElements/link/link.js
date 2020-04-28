import React, { Component } from 'react';
import styled from "styled-components";


const Link= styled.p`
  font-size: 15px;
  font-weight: bold;
  color: var(--dark-indigo);
`

class link extends Component {
    render() {
        return (
            <div className={this.props.class}>
                <Link>{this.props.p}</Link>
            </div>
        );
    }
}

export default link;