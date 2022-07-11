import React, { Component } from 'react';
import { withRouter } from 'react-router';
import * as Styled from './Product.styled';
import { getData } from '../../graphql/client';
import { customProductQuery } from '../../graphql/queries';
import parse from 'html-react-parser';

class Product extends Component {
  constructor(props) {
    super(props);

    this.productId = props.match.params.id;
    this.state = {
      productData: {},
      mainImage: '',
    };

    this.defaultMainImageIndex = 0;
  }

  componentDidMount() {
    // here get product data
    this.getProductData(this.productId);
  }

  getProductData = async (productId) => {
    let productData = await getData(customProductQuery(productId));
    this.setState(
      {
        productData: productData.product,
      },
      () => {
        // setting default main Image for product;
        this.setMainImage(
          this.state.productData.gallery[this.defaultMainImageIndex]
        );
      }
    );
  };

  setMainImage = (image) => {
    this.setState({
      mainImage: image,
    });
  };

  render() {
    if (Object.keys(this.state.productData).length === 0) {
      return <h1>Loading...</h1>;
    }
    return (
      <Styled.Container>
        <Styled.ImagesContainer>
          <Styled.MiniImagesContainer>
            {this.state.productData.gallery.map((image, index) => {
              return (
                <Styled.MiniImgContainer
                  key={index}
                  onMouseEnter={() => {
                    this.setMainImage(image);
                  }}
                >
                  <Styled.MiniImg src={image}></Styled.MiniImg>
                </Styled.MiniImgContainer>
              );
            })}
          </Styled.MiniImagesContainer>
          <Styled.MainImgContainer>
            <Styled.MainImg src={this.state.mainImage}></Styled.MainImg>
          </Styled.MainImgContainer>
        </Styled.ImagesContainer>
        <Styled.AttributesContainer>
          <Styled.ProductBrand>
            {this.state.productData.brand}
          </Styled.ProductBrand>
          <Styled.ProductName>{this.state.productData.name}</Styled.ProductName>
          {this.state.productData.attributes.map((attribute) => {
            if (attribute.type === 'text') {
              return (
                <div key={attribute.id}>
                  <Styled.AttributeName>{attribute.name}:</Styled.AttributeName>
                  <Styled.AttributeBoxesContainer>
                    {attribute.items.map((item) => {
                      return (
                        <Styled.AttributeTextBox key={item.id}>
                          {item.displayValue}
                        </Styled.AttributeTextBox>
                      );
                    })}
                  </Styled.AttributeBoxesContainer>
                </div>
              );
            } else {
              return (
                <div key={attribute.id}>
                  <Styled.AttributeName>{attribute.name}:</Styled.AttributeName>
                  <Styled.AttributeBoxesContainer>
                    {attribute.items.map((item) => {
                      return (
                        <Styled.AttributeColorBox
                          key={item.id}
                          color={item.value}
                        ></Styled.AttributeColorBox>
                      );
                    })}
                  </Styled.AttributeBoxesContainer>
                </div>
              );
            }
          })}
          <Styled.Price>PRICE:</Styled.Price>
          <Styled.PriceValue>$50</Styled.PriceValue>
          <Styled.AddToCartButton>Add To Cart</Styled.AddToCartButton>
          <Styled.Description>
            {parse(this.state.productData.description)}
          </Styled.Description>
        </Styled.AttributesContainer>
      </Styled.Container>
    );
  }
}

export default withRouter(Product);
