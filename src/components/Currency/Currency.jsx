import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const CurrencyWrapper = styled.div`
  position: absolute;
  height: fit-content;
  margin-top: 40px;
  margin-right: -20px;
  box-shadow: 0px 4px 35px rgba(168, 172, 176, 0.19);
`;

const SingleCurrency = styled.div`
  width: 100px;
  height: 45px;
  font-size: 18px;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    background: rgba(238, 238, 238, 1);
  }
`;

export default class Currency extends Component {
  changeCurrentCurrencyIndex = (currencyIndex) => {
    this.props.changeCurrentCurrencyIndex(currencyIndex);

    // close the currency popup
    this.props.currencyToggle();
  };

  render() {
    return (
      <Container>
        <CurrencyWrapper>
          {this.props.currencies.map((item, currencyIndex) => {
            return (
              <SingleCurrency
                key={currencyIndex}
                onClick={() => {
                  this.changeCurrentCurrencyIndex(currencyIndex);
                }}
              >
                {item.symbol}
                {item.label}
              </SingleCurrency>
            );
          })}
        </CurrencyWrapper>
      </Container>
    );
  }
}
