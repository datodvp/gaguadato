import React, { Component } from 'react';
import OutsideAlerter from '../OutsideAlerter/OutsideAlerter';
import Logo from '../../assets/icons/Logo.svg';
import DownArrow from '../../assets/icons/DownArrow.svg';
import UpArrow from '../../assets/icons/UpArrow.svg';
import MiniCartIcon from '../../assets/icons/MiniCart.svg';
import MiniCart from '../MiniCart/MiniCart';
import Currency from '../Currency/Currency';
import * as Styled from './Navbar.styled';

export default class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      miniCartOpen: false,
      currencyOpen: false,
    };
  }

  miniCartToggle = () => {
    // open and close minicart and its overlay
    this.setState({
      miniCartOpen: !this.state.miniCartOpen,
    });
  };

  currencyToggle = () => {
    // open and clsoe currency and its overlay
    this.setState({
      currencyOpen: !this.state.currencyOpen,
    });
  };

  changeCurrentCategoryIndex = (categoryIndex) => {
    this.props.changeCurrentCategoryIndex(categoryIndex);
  };

  calculateQuantity = () => {
    let quantity = 0;
    Array.from(this.props.productsInBasket).forEach((item) => {
      quantity += item.amount;
    });

    return quantity;
  };

  render() {
    if (
      this.props.categories.length === 0 ||
      this.props.currencies.length === 0
    ) {
      return <h1>Loading Data...</h1>;
    }

    return (
      <>
        <Styled.Container>
          {/* left side of navigation bar  */}
          <Styled.Left>
            {this.props.categories.map((item, categoryIndex) => {
              return (
                <Styled.LinkStyled to='/' key={categoryIndex}>
                  <Styled.Category
                    id={categoryIndex}
                    currentCategoryIndex={this.props.currentCategoryIndex}
                    onClick={() => {
                      this.changeCurrentCategoryIndex(categoryIndex);
                    }}
                  >
                    {item.name}
                  </Styled.Category>
                </Styled.LinkStyled>
              );
            })}
          </Styled.Left>
          {/* center of navigation bar */}
          <Styled.Center>
            <Styled.LogoImg src={Logo}></Styled.LogoImg>
          </Styled.Center>
          {/* right side of navigation bar */}
          <Styled.Right>
            {/* this component gets outside click of itself and its childs */}
            <OutsideAlerter
              currencyOpen={this.state.currencyOpen}
              currencyToggle={this.currencyToggle}
            >
              <Styled.CurrencyContainer onClick={this.currencyToggle}>
                <Styled.CurrencySymbol>
                  {
                    this.props.currencies[this.props.currentCurrencyIndex]
                      .symbol
                  }
                </Styled.CurrencySymbol>
                <Styled.Arrow
                  src={this.state.currencyOpen ? UpArrow : DownArrow}
                ></Styled.Arrow>
              </Styled.CurrencyContainer>
              {this.state.currencyOpen && (
                <Currency
                  currencies={this.props.currencies}
                  changeCurrentCurrencyIndex={
                    this.props.changeCurrentCurrencyIndex
                  }
                  currencyToggle={this.currencyToggle}
                ></Currency>
              )}
            </OutsideAlerter>

            <OutsideAlerter
              miniCartOpen={this.state.miniCartOpen}
              miniCartToggle={this.miniCartToggle}
            >
              <Styled.MiniCartLogoContainer onClick={this.miniCartToggle}>
                <Styled.MiniCartLogo src={MiniCartIcon}></Styled.MiniCartLogo>
                {this.props.productsInBasket.length !== 0 && (
                  <Styled.CartCircle>
                    {this.calculateQuantity()}
                  </Styled.CartCircle>
                )}
              </Styled.MiniCartLogoContainer>
              {this.state.miniCartOpen && (
                <MiniCart
                  miniCartToggle={this.miniCartToggle}
                  productsInBasket={this.props.productsInBasket}
                  currentCurrencyIndex={this.props.currentCurrencyIndex}
                  changeItemAmount={this.props.changeItemAmount}
                ></MiniCart>
              )}
            </OutsideAlerter>
          </Styled.Right>
        </Styled.Container>
      </>
    );
  }
}
