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

  changeItemAmount = (parameter, product) => {
    this.props.changeItemAmount(parameter, product);
  };

  changeAttribute = (product, attributeId, newItemId, productIndex) => {
    let itemsDidStack = this.checkItemStacking(
      product,
      attributeId,
      newItemId,
      productIndex
    );

    if (itemsDidStack === false) {
      let clonedProductsInBasket = structuredClone(this.props.productsInBasket);
      clonedProductsInBasket.forEach((item) => {
        if (
          JSON.stringify(item.chosenAttributes) ===
            JSON.stringify(product.chosenAttributes) &&
          item.productData.id === product.productData.id
        ) {
          item.chosenAttributes = item.chosenAttributes.map((attr) => {
            if (attr.attributeId === attributeId && attr.itemId !== newItemId) {
              console.log(attr);
              attr.itemId = newItemId;
            }
            return attr;
          });
        }
      });
      this.props.changeAttribute(clonedProductsInBasket);
    }
  };

  checkItemStacking = (product, attributeId, newItemId, productIndex) => {
    let itemsDidStack = false;
    let clonedProductsInBasket = structuredClone(this.props.productsInBasket);
    let clonedProduct = structuredClone(product);
    clonedProduct.chosenAttributes.forEach((attr, attrIndex) => {
      if (attr.attributeId === attributeId && attr.itemId !== newItemId) {
        clonedProduct.chosenAttributes[attrIndex].itemId = newItemId;

        // check if same product with same attributes exists in basket and if it does add it to previous item
        clonedProductsInBasket.forEach((item) => {
          if (
            JSON.stringify(item.chosenAttributes) ===
              JSON.stringify(clonedProduct.chosenAttributes) &&
            item.productData.id === clonedProduct.productData.id
          ) {
            item.amount += clonedProduct.amount;
            clonedProductsInBasket.splice(productIndex, 1);
            itemsDidStack = true;
          }
        });
      }
    });

    this.props.removeProductFromBasket(clonedProductsInBasket);

    return itemsDidStack;
  };

  render() {
    return (
      <Styled.Container>
        <Styled.PageName>cart</Styled.PageName>
        <Styled.ProductsWrapper>
          <Styled.DesignLine></Styled.DesignLine>
          {this.props.productsInBasket.map((product, productIndex) => {
            let { productData } = product;
            return (
              <div
                key={productData.id + JSON.stringify(product.chosenAttributes)}
              >
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
                                  <Styled.AttributeTextBox
                                    key={item.id}
                                    itemId={item.id}
                                    currentAttributes={product.chosenAttributes.find(
                                      (obj) =>
                                        obj.attributeId === attr.id &&
                                        obj.itemId === item.id
                                    )}
                                    onClick={() => {
                                      this.changeAttribute(
                                        product,
                                        attr.id,
                                        item.id,
                                        productIndex
                                      );
                                    }}
                                  >
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
                                  >
                                    <Styled.AttributeColorBoxAfter
                                      id={item.id}
                                      currentAttributes={product.chosenAttributes.find(
                                        (obj) =>
                                          obj.attributeId === attr.id &&
                                          obj.itemId === item.id
                                      )}
                                      onClick={() => {
                                        this.changeAttribute(
                                          product,
                                          attr.id,
                                          item.id,
                                          productIndex
                                        );
                                      }}
                                    ></Styled.AttributeColorBoxAfter>
                                  </Styled.AttributeColorBox>
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
