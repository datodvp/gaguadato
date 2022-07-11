import React, { Component } from 'react';
import * as Styled from './Cart.styled';
import LeftSwap from '../../assets/icons/LeftSwap.svg';
import RightSwap from '../../assets/icons/RightSwap.svg';

export default class Cart extends Component {
  render() {
    return (
      <Styled.Container>
        <Styled.PageName>cart</Styled.PageName>
        <Styled.ProductsWrapper>
          <Styled.DesignLine></Styled.DesignLine>
          <Styled.ProductContainer>
            <Styled.Left>
              <Styled.ProductBrand>Apollo</Styled.ProductBrand>
              <Styled.ProductName>Running Short</Styled.ProductName>
              <Styled.ProcutPrice>$50.00</Styled.ProcutPrice>
              <Styled.AttributeContainer>
                <Styled.AttributeName>size:</Styled.AttributeName>
                <Styled.AttributeBoxesContainer>
                  <Styled.AttributeTextBox>XS</Styled.AttributeTextBox>
                  <Styled.AttributeTextBox>XS</Styled.AttributeTextBox>
                  <Styled.AttributeTextBox>XS</Styled.AttributeTextBox>
                  <Styled.AttributeTextBox>XS</Styled.AttributeTextBox>
                </Styled.AttributeBoxesContainer>
              </Styled.AttributeContainer>
              <Styled.AttributeContainer>
                <Styled.AttributeName>color:</Styled.AttributeName>
                <Styled.AttributeBoxesContainer>
                  <Styled.AttributeColorBox></Styled.AttributeColorBox>
                  <Styled.AttributeColorBox></Styled.AttributeColorBox>
                  <Styled.AttributeColorBox></Styled.AttributeColorBox>
                  <Styled.AttributeColorBox></Styled.AttributeColorBox>
                </Styled.AttributeBoxesContainer>
              </Styled.AttributeContainer>
            </Styled.Left>
            <Styled.Right>
              <Styled.AmountChangerContainer>
                <Styled.PlusButton>+</Styled.PlusButton>
                <Styled.AmountNumber>1</Styled.AmountNumber>
                <Styled.MinusButton>-</Styled.MinusButton>
              </Styled.AmountChangerContainer>
              <Styled.PhotoContainer>
                <Styled.SwappersContainer>
                  <Styled.LeftSwapIcon src={LeftSwap}></Styled.LeftSwapIcon>
                  <Styled.RightSwapIcon src={RightSwap}></Styled.RightSwapIcon>
                </Styled.SwappersContainer>
              </Styled.PhotoContainer>
            </Styled.Right>
          </Styled.ProductContainer>
          <Styled.DesignLine></Styled.DesignLine>
        </Styled.ProductsWrapper>
      </Styled.Container>
    );
  }
}
