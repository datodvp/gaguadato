import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  z-index: 1;
  /* overflow: hidden; */
`;
const Overlay = styled.div`
  position: absolute;
  width: 100%;
  left: 0;
  top: 80px;
  height: calc(100% - 80px);
  background: rgba(57, 55, 72, 0.22);
`;

const MiniCartWrapper = styled.div`
  position: absolute;
  height: fit-content;
  width: 325px;
  height: 300px;
  background-color: white;
  margin-right: -30px;
  margin-top: 54px;
`;

export default class MiniCart extends Component {
  render() {
    return (
      <Container>
        <Overlay onClick={this.props.miniCartToggle}></Overlay>
        <MiniCartWrapper>MiniCart</MiniCartWrapper>
      </Container>
    );
  }
}
