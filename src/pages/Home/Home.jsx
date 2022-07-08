import React, { Component } from 'react';
import * as Styled from './Home.styled';
import { getData } from '../../graphql/client';
import { customProductsQuery } from '../../graphql/queries';
import AddToBasket from '../../assets/icons/AddToBasket.svg';

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
      currentCategory: '',
    };
  }
  componentDidMount() {
    this.getCategoryName();
  }

  componentDidUpdate() {
    this.getCategoryName();
  }

  getCategoryName = () => {
    // check if chategory has changed after component update and update state of currentCategory
    if (
      this.props.categories.length !== 0 &&
      this.state.currentCategory !==
        this.props.categories[this.props.currentCategoryIndex].name
    ) {
      this.setState(
        {
          currentCategory:
            this.props.categories[this.props.currentCategoryIndex].name,
        },
        () => {
          // fetch new products after category has changed
          this.getProducts(this.state.currentCategory);
        }
      );
    }
  };

  getProducts = async (category) => {
    let products = await getData(customProductsQuery(category));
    this.setState({
      products: products.category.products,
    });
  };

  render() {
    if (
      this.props.categories.length === 0 ||
      this.state.products.length === 0 ||
      this.state.currentCategory === false
    ) {
      return <h1>Loading Data...</h1>;
    }
    return (
      <Styled.Container>
        <Styled.CategoryName>{this.state.currentCategory}</Styled.CategoryName>
        <Styled.ProductsWrapper>
          {this.state.products.map((product) => {
            return (
              <Styled.ProductContainer key={product.id}>
                <Styled.LinkStyled to={`product/${product.id}`}>
                  <Styled.AddToBasketIcon
                    src={AddToBasket}
                  ></Styled.AddToBasketIcon>
                  <Styled.ImageContainer>
                    <Styled.Img src={product.gallery[0]}></Styled.Img>
                  </Styled.ImageContainer>
                  <Styled.AttributesContainer>
                    <Styled.Brand>{product.brand}</Styled.Brand>{' '}
                    <Styled.Name>{product.name}</Styled.Name>
                    <Styled.Price>
                      {
                        product.prices[this.props.currentCurrencyIndex].currency
                          .symbol
                      }
                      {product.prices[this.props.currentCurrencyIndex].amount}
                    </Styled.Price>
                  </Styled.AttributesContainer>
                </Styled.LinkStyled>
              </Styled.ProductContainer>
            );
          })}
        </Styled.ProductsWrapper>
      </Styled.Container>
    );
  }
}
