import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const CurrencyWrapper = styled.div`
  position: absolute;
  /* background-color: red; */
  height: 100px;
  /* margin-right: 105px;
  margin-top: -15px; */
  margin-top: 40px;
  box-shadow: 0px 4px 35px rgba(168, 172, 176, 0.19);
`;

export default class Currency extends Component {
  render() {
    return (
      <Container>
        <CurrencyWrapper>Currency</CurrencyWrapper>
      </Container>
    );
  }
}
