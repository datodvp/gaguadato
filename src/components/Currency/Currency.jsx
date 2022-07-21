import React, { Component } from 'react';
import * as Styled from './Currency.styled';

export default class Currency extends Component {
  changeCurrentCurrencyIndex = (currencyIndex) => {
    this.props.changeCurrentCurrencyIndex(currencyIndex);

    // close the currency popup
    this.props.currencyToggle();
  };

  render() {
    return (
      <Styled.Container>
        <Styled.CurrencyWrapper>
          {this.props.currencies.map((item, currencyIndex) => {
            return (
              <Styled.SingleCurrency
                key={currencyIndex}
                onClick={() => {
                  this.changeCurrentCurrencyIndex(currencyIndex);
                }}
              >
                {item.symbol}
                {item.label}
              </Styled.SingleCurrency>
            );
          })}
        </Styled.CurrencyWrapper>
      </Styled.Container>
    );
  }
}
