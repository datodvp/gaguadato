import React, { Component } from 'react';
import { withRouter } from 'react-router';
import styled from 'styled-components';
import LeftSwap from '../../assets/icons/LeftSwap.svg';
import RightSwap from '../../assets/icons/RightSwap.svg';

const Container = styled.div`
  /* width: 100%; */
  /* background-color: lightgreen; */
  margin-left: 100px;
  margin-right: 100px;
  margin-top: 80px;
`;

const PageName = styled.div`
  margin-bottom: 55px;
  font-weight: 700;
  font-size: 32px;
  text-transform: uppercase;
`;

const DesignLine = styled.div`
  width: 1240px;
  height: 1px;
  left: 100px;
  top: 255px;

  background: #e5e5e5;
`;

const ProductsWrapper = styled.div`
  height: fit-content;
  padding-bottom: 16px;
  /* background-color: lightgreen; */
`;

const ProductContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Left = styled.div``;

const ProductBrand = styled.div`
  font-weight: 600;
  font-size: 30px;
  margin-bottom: 20px;
`;

const ProductName = styled.div`
  font-size: 30px;
  font-weight: 400;
  margin-bottom: 20px;
`;

const ProcutPrice = styled.div`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 20px;
`;

const AttributeContainer = styled.div``;

const AttributeName = styled.div`
  font-size: 18px;
  font-weight: 700;
  text-transform: uppercase;
  margin-bottom: 7px;
`;

const AttributeBoxesContainer = styled.div`
  display: flex;
  margin-bottom: 16px;
`;

const AttributeTextBox = styled.div`
  border: 1px solid rgba(29, 31, 34, 1);
  width: 63px;
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 8px;
`;

const AttributeColorBox = styled.div`
  width: 32px;
  height: 32px;
  background-color: teal;
  margin-right: 8px;
`;

const Right = styled.div`
  display: flex;
`;

const AmountChangerContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const PlusButton = styled.div`
  width: 45px;
  height: 45px;
  font-size: 60px;
  font-weight: 100;
  line-height: 45px;
  text-align: center;
  border: 1px solid rgba(29, 31, 34, 1);
  overflow: hidden;
  margin-top: 24px;
  cursor: pointer;
`;

const MinusButton = styled.div`
  width: 45px;
  height: 45px;
  font-size: 60px;
  font-weight: 100;
  line-height: 36px;
  text-align: center;
  border: 1px solid rgba(29, 31, 34, 1);
  overflow: hidden;
  margin-bottom: 24px;
  cursor: pointer;
`;

const AmountNumber = styled.div`
  font-size: 24px;
  font-weight: 500px;
  text-align: center;
`;

const PhotoContainer = styled.div`
  width: 200px;
  height: 288px;
  background-color: lightgreen;
  margin: auto;
  margin-left: 24px;
  position: relative;
`;

const SwappersContainer = styled.div`
  position: absolute;
  display: flex;
  justify-content: flex-end;
  right: 0;
  bottom: 16px;
`;
const LeftSwapIcon = styled.img`
  margin-right: 8px;
  cursor: pointer;
`;
const RightSwapIcon = styled.img`
  margin-right: 16px;
  cursor: pointer;
`;

class Product extends Component {
  constructor(props) {
    super(props);

    this.productId = props.match.params.id;
  }

  render() {
    return (
      <Container>
        <PageName>cart</PageName>
        <ProductsWrapper>
          <DesignLine></DesignLine>
          <ProductContainer>
            <Left>
              <ProductBrand>Apollo</ProductBrand>
              <ProductName>Running Short</ProductName>
              <ProcutPrice>$50.00</ProcutPrice>
              <AttributeContainer>
                <AttributeName>size:</AttributeName>
                <AttributeBoxesContainer>
                  <AttributeTextBox>XS</AttributeTextBox>
                  <AttributeTextBox>XS</AttributeTextBox>
                  <AttributeTextBox>XS</AttributeTextBox>
                  <AttributeTextBox>XS</AttributeTextBox>
                </AttributeBoxesContainer>
              </AttributeContainer>
              <AttributeContainer>
                <AttributeName>color:</AttributeName>
                <AttributeBoxesContainer>
                  <AttributeColorBox></AttributeColorBox>
                  <AttributeColorBox></AttributeColorBox>
                  <AttributeColorBox></AttributeColorBox>
                  <AttributeColorBox></AttributeColorBox>
                </AttributeBoxesContainer>
              </AttributeContainer>
            </Left>
            <Right>
              <AmountChangerContainer>
                <PlusButton>+</PlusButton>
                <AmountNumber>1</AmountNumber>
                <MinusButton>-</MinusButton>
              </AmountChangerContainer>
              <PhotoContainer>
                <SwappersContainer>
                  <LeftSwapIcon src={LeftSwap}></LeftSwapIcon>
                  <RightSwapIcon src={RightSwap}></RightSwapIcon>
                </SwappersContainer>
              </PhotoContainer>
            </Right>
          </ProductContainer>
          <DesignLine></DesignLine>
        </ProductsWrapper>
      </Container>
    );
  }
}

export default withRouter(Product);
