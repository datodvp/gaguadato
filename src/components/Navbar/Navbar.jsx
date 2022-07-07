import React, { Component } from 'react';
import styled from 'styled-components';
import OutsideAlerter from '../OutsideAlerter/OutsideAlerter';
import Logo from '../../assets/icons/Logo.svg';
import DownArrow from '../../assets/icons/DownArrow.svg';
import UpArrow from '../../assets/icons/UpArrow.svg';
import MiniCartIcon from '../../assets/icons/MiniCart.svg';
import MiniCart from '../MiniCart/MiniCart';
import Currency from '../Currency/Currency';

const Container = styled.div`
  /* position: relative; */
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Left = styled.div`
  margin-left: 100px;
  display: flex;
`;

const Category = styled.div`
  text-transform: uppercase;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 28px;
  padding-bottom: 32px;
  border-bottom: ${(props) =>
    props.id === props.currentCategoryIndex && '2px solid #5ece7b;'};
  color: ${(props) => props.id === props.currentCategoryIndex && '#5ece7b'};
  cursor: pointer;
`;

const Center = styled.div`
  position: absolute;
  left: 50%;
`;

const LogoImg = styled.img``;

const Right = styled.div`
  margin-right: 100px;
  display: flex;
`;

const CurrencyContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  cursor: pointer;
`;
const CurrencySymbol = styled.div`
  font-size: 18px;
  line-height: 28.8px;
  margin-right: 10px;
`;
const Arrow = styled.img`
  width: 6px;
  height: 3px;
  margin-right: 22px;
  margin-top: 4px;
`;
const MiniCartLogoContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;
const MiniCartLogo = styled.img``;

export default class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      miniCartOpen: false,
      currencyOpen: false,
    };
  }

  miniCartClick = () => {
    // open and close minicart and its overlay
    this.setState({
      miniCartOpen: !this.state.miniCartOpen,
    });
  };

  currencyClick = () => {
    // open and clsoe currency and its overlay
    this.setState({
      currencyOpen: !this.state.currencyOpen,
    });
  };

  changeCurrentCategoryIndex = (categoryIndex) => {
    this.props.changeCurrentCategoryIndex(categoryIndex);
  };

  render() {
    return (
      <>
        <Container>
          <Left>
            {this.props.categories.map((item, categoryIndex) => {
              return (
                <Category
                  key={categoryIndex}
                  id={categoryIndex}
                  currentCategoryIndex={this.props.currentCategoryIndex}
                  onClick={() => {
                    this.changeCurrentCategoryIndex(categoryIndex);
                  }}
                >
                  {item.name}
                </Category>
              );
            })}
          </Left>
          <Center>
            <LogoImg src={Logo}></LogoImg>
          </Center>
          <Right>
            <OutsideAlerter
              currencyOpen={this.state.currencyOpen}
              currencyClick={this.currencyClick}
            >
              <CurrencyContainer onClick={this.currencyClick}>
                <CurrencySymbol>$</CurrencySymbol>
                <Arrow
                  src={this.state.currencyOpen ? UpArrow : DownArrow}
                ></Arrow>
              </CurrencyContainer>
              {this.state.currencyOpen && <Currency></Currency>}
            </OutsideAlerter>
            <OutsideAlerter
              miniCartOpen={this.state.miniCartOpen}
              miniCartClick={this.miniCartClick}
            >
              <MiniCartLogoContainer onClick={this.miniCartClick}>
                <MiniCartLogo src={MiniCartIcon}></MiniCartLogo>
              </MiniCartLogoContainer>
              {this.state.miniCartOpen && (
                <MiniCart miniCartClick={this.miniCartClick}></MiniCart>
              )}
            </OutsideAlerter>
          </Right>
        </Container>
      </>
    );
  }
}