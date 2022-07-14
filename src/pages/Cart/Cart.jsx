import React, { Component } from 'react';
import * as Styled from './Cart.styled';
import LeftSwap from '../../assets/icons/LeftSwap.svg';
import RightSwap from '../../assets/icons/RightSwap.svg';

export default class Cart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      photosListOfProducts: [],
    };
  }

  componentDidMount() {
    // setting default photos for products in cart
    this.setState({
      photosListOfProducts: this.props.productsInBasket.map(
        (product, index) => {
          return {
            id: product.productData.id,
            chosenAttributes: product.chosenAttributes,
            currentIndexOfPhoto: 0,
            photosList: product.productData.gallery.map((photo) => {
              return photo;
            }),
          };
        }
      ),
    });
  }

  productPhoto = (product) => {
    // clone photosListOfProducts state\
    let returnValue = 0;
    const clonedphotosListOfProducts = structuredClone(
      this.state.photosListOfProducts
    );
    // iterate over cloned array and set up photos indexes
    clonedphotosListOfProducts.every((photoInfo) => {
      if (
        photoInfo.id === product.productData.id &&
        JSON.stringify(photoInfo.chosenAttributes) ===
          JSON.stringify(product.chosenAttributes)
      ) {
        returnValue = photoInfo.currentIndexOfPhoto;
        return false;
      }
      return true;
    });

    return returnValue;
  };

  swapPhoto = (parameter, product) => {
    // clone photosListOfProducts state\
    const clonedphotosListOfProducts = structuredClone(
      this.state.photosListOfProducts
    );
    // iterate over cloned array and set up photos indexes
    clonedphotosListOfProducts.every((photoInfo) => {
      if (
        photoInfo.id === product.productData.id &&
        JSON.stringify(photoInfo.chosenAttributes) ===
          JSON.stringify(product.chosenAttributes)
      ) {
        if (parameter === 'right') {
          if (photoInfo.photosList.length - 1 > photoInfo.currentIndexOfPhoto) {
            photoInfo.currentIndexOfPhoto += 1;
            return false;
          } else {
            photoInfo.currentIndexOfPhoto = 0;
          }
        }
        if (parameter === 'left') {
          if (0 < photoInfo.currentIndexOfPhoto) {
            photoInfo.currentIndexOfPhoto -= 1;
            return false;
          } else {
            photoInfo.currentIndexOfPhoto = photoInfo.photosList.length - 1;
          }
        }
      }
      return true;
    });
    this.setState({
      photosListOfProducts: clonedphotosListOfProducts,
    });
  };

  render() {
    return (
      <Styled.Container>
        <Styled.PageName>cart</Styled.PageName>
        <Styled.ProductsWrapper>
          <Styled.DesignLine></Styled.DesignLine>
          {this.props.productsInBasket.map((product) => {
            let { productData } = product;
            return (
              <div key={productData.id}>
                <Styled.ProductContainer>
                  <Styled.Left>
                    <Styled.ProductBrand>
                      {productData.brand}
                    </Styled.ProductBrand>
                    <Styled.ProductName>{productData.name}</Styled.ProductName>
                    <Styled.ProductPrice>
                      {
                        productData.prices[this.props.currentCurrencyIndex]
                          .currency.symbol
                      }
                      {
                        productData.prices[this.props.currentCurrencyIndex]
                          .amount
                      }
                    </Styled.ProductPrice>
                    {productData.attributes.map((attr) => {
                      if (attr.type === 'text') {
                        return (
                          <Styled.AttributeContainer key={attr.id}>
                            <Styled.AttributeName>
                              {attr.name}:
                            </Styled.AttributeName>
                            <Styled.AttributeBoxesContainer>
                              {attr.items.map((item) => {
                                return (
                                  <Styled.AttributeTextBox key={item.id}>
                                    {item.displayValue}
                                  </Styled.AttributeTextBox>
                                );
                              })}
                            </Styled.AttributeBoxesContainer>
                          </Styled.AttributeContainer>
                        );
                      } else {
                        return (
                          <Styled.AttributeContainer key={attr.id}>
                            <Styled.AttributeName>
                              {attr.name}:
                            </Styled.AttributeName>
                            <Styled.AttributeBoxesContainer>
                              {attr.items.map((item) => {
                                return (
                                  <Styled.AttributeColorBox
                                    key={item.id}
                                    color={item.value}
                                  ></Styled.AttributeColorBox>
                                );
                              })}
                            </Styled.AttributeBoxesContainer>
                          </Styled.AttributeContainer>
                        );
                      }
                    })}
                  </Styled.Left>
                  <Styled.Right>
                    <Styled.AmountChangerContainer>
                      <Styled.PlusButton>+</Styled.PlusButton>
                      <Styled.AmountNumber>
                        {product.amount}
                      </Styled.AmountNumber>
                      <Styled.MinusButton>-</Styled.MinusButton>
                    </Styled.AmountChangerContainer>
                    <Styled.PhotoContainer>
                      <Styled.Photo
                        src={
                          product.productData.gallery[
                            this.productPhoto(product)
                          ]
                        }
                      ></Styled.Photo>
                      {productData.gallery.length > 1 && (
                        <Styled.SwappersContainer>
                          <Styled.LeftSwapIcon
                            src={LeftSwap}
                            onClick={() => {
                              this.swapPhoto('left', product);
                            }}
                          ></Styled.LeftSwapIcon>
                          <Styled.RightSwapIcon
                            src={RightSwap}
                            onClick={() => {
                              this.swapPhoto('right', product);
                            }}
                          ></Styled.RightSwapIcon>
                        </Styled.SwappersContainer>
                      )}
                    </Styled.PhotoContainer>
                  </Styled.Right>
                </Styled.ProductContainer>
                <Styled.DesignLine></Styled.DesignLine>
              </div>
            );
          })}
        </Styled.ProductsWrapper>
      </Styled.Container>
    );
  }
}
