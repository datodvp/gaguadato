import React, { Component } from 'react';
import * as Styled from './MiniCart.styled';

export default class MiniCart extends Component {
  calculateQuantity = () => {
    let amountOfItem = 0;
    this.props.productsInBasket.forEach((product) => {
      amountOfItem += product.amount;
    });
    return amountOfItem;
  };

  changeItemAmount = (parameter, product) => {
    this.props.changeItemAmount(parameter, product);
  };

  calculateTotalPrice = () => {
    let totalPrice = 0;
    this.props.productsInBasket.forEach((product) => {
      totalPrice +=
        product.productData.prices[this.props.currentCurrencyIndex].amount *
        product.amount;
    });
    let currencySymbol =
      this.props.productsInBasket[0].productData.prices[
        this.props.currentCurrencyIndex
      ].currency.symbol;
    return currencySymbol + totalPrice.toFixed(2);
  };

  render() {
    return (
      <Styled.Container>
        <Styled.Overlay onClick={this.props.miniCartToggle}></Styled.Overlay>
        <Styled.MiniCartWrapper>
          <Styled.ItemsContainer>
            <Styled.HeaderContainer>
              <Styled.Name>My Bag</Styled.Name>
              <Styled.ItemsAmount>
                , {this.calculateQuantity()} items
              </Styled.ItemsAmount>
            </Styled.HeaderContainer>
            <Styled.ItemContainer>
              <div>
                {this.props.productsInBasket.map((product) => {
                  let { productData } = product;
                  return (
                    <Styled.FlexDiv key={product.uuid}>
                      <div>
                        <Styled.ItemNameContainer>
                          <Styled.ItemBrand>
                            {productData.brand}
                          </Styled.ItemBrand>
                          <Styled.ItemName>{productData.name}</Styled.ItemName>
                        </Styled.ItemNameContainer>
                        <Styled.ItemPrice>
                          {
                            productData.prices[this.props.currentCurrencyIndex]
                              .currency.symbol
                          }
                          {
                            productData.prices[this.props.currentCurrencyIndex]
                              .amount
                          }
                        </Styled.ItemPrice>
                        <Styled.AttributesContainer>
                          {productData.attributes.map((attribute) => {
                            if (attribute.type === 'text') {
                              return (
                                <div key={attribute.id}>
                                  <Styled.AttributeName>
                                    {attribute.name}:
                                  </Styled.AttributeName>
                                  <Styled.AttributeBoxesContainer>
                                    {attribute.items.map((item) => {
                                      return (
                                        <Styled.AttributeTextBox
                                          key={item.id}
                                          id={item.id}
                                          currentAttributes={product.chosenAttributes.find(
                                            (obj) =>
                                              obj.itemId === item.id &&
                                              obj.attributeId === attribute.id
                                          )}
                                        >
                                          {item.value}
                                        </Styled.AttributeTextBox>
                                      );
                                    })}
                                  </Styled.AttributeBoxesContainer>
                                </div>
                              );
                            } else {
                              return (
                                <div key={attribute.id}>
                                  <Styled.AttributeName>
                                    {attribute.name}:
                                  </Styled.AttributeName>
                                  <Styled.AttributeBoxesContainer>
                                    {attribute.items.map((item) => {
                                      return (
                                        <Styled.AttributeColorBox
                                          key={item.id}
                                          value={item.value}
                                        >
                                          <Styled.AttributeColorBoxAfter
                                            id={item.id}
                                            currentAttributes={product.chosenAttributes.find(
                                              (obj) =>
                                                obj.itemId === item.id &&
                                                obj.attributeId === attribute.id
                                            )}
                                          ></Styled.AttributeColorBoxAfter>
                                        </Styled.AttributeColorBox>
                                      );
                                    })}
                                  </Styled.AttributeBoxesContainer>
                                </div>
                              );
                            }
                          })}
                        </Styled.AttributesContainer>
                      </div>
                      <Styled.ChangeAmountContainer>
                        <Styled.PlusButton
                          onClick={() => {
                            this.changeItemAmount('add', product);
                          }}
                        >
                          +
                        </Styled.PlusButton>
                        <Styled.AmountNumber>
                          {product.amount}
                        </Styled.AmountNumber>
                        <Styled.MinusButton
                          onClick={() => {
                            this.changeItemAmount('substract', product);
                          }}
                        >
                          -
                        </Styled.MinusButton>
                      </Styled.ChangeAmountContainer>
                      <Styled.ImageContainer>
                        <Styled.Image
                          src={productData.gallery[0]}
                        ></Styled.Image>
                      </Styled.ImageContainer>
                    </Styled.FlexDiv>
                  );
                })}
              </div>
            </Styled.ItemContainer>
            <Styled.TotalContainer>
              <Styled.TotalText>Total:</Styled.TotalText>
              <Styled.TotalPrice>
                {this.calculateTotalPrice()}
              </Styled.TotalPrice>
            </Styled.TotalContainer>
            <Styled.ButtonsContainer>
              <Styled.LinkStyled to='/cart' onClick={this.props.miniCartToggle}>
                <Styled.VievBagButton>VIEW BAG</Styled.VievBagButton>
              </Styled.LinkStyled>
              <Styled.CheckOutButton>CHECK OUT</Styled.CheckOutButton>
            </Styled.ButtonsContainer>
          </Styled.ItemsContainer>
        </Styled.MiniCartWrapper>
      </Styled.Container>
    );
  }
}
