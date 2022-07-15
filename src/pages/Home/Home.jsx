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

  setDefaultAttributesValues = () => {
    let copiedProductData = structuredClone(this.state.productData);

    let productAttributes = copiedProductData.attributes.map((attribute) => {
      return {
        attributeId: attribute.id,
        itemId: attribute.items[0].id,
      };
    });
    this.setState({
      currentAttributes: productAttributes,
    });
  };

  addProductInBasket = (chosenProductId) => {
    // firstly, set default attributes for product

    // clone productsData from state
    let productsList = structuredClone(this.state.products);

    let productData = productsList.find(
      (product) => product.id === chosenProductId
    );
    // create attributes object

    let productAttributes = productData.attributes.map((attribute) => {
      return {
        attributeId: attribute.id,
        itemId: attribute.items[0].id,
      };
    });
    // create product object for basket
    let productForBasket = {
      chosenAttributes: productAttributes,
      amount: 1,
      productData: productData,
      uuid: crypto.randomUUID(),
    };

    this.props.addProductInBasket(productForBasket);
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
                {product.inStock && (
                  <Styled.AddToBasketIcon
                    src={AddToBasket}
                    onClick={() => {
                      this.addProductInBasket(product.id);
                    }}
                  ></Styled.AddToBasketIcon>
                )}
                <Styled.LinkStyled to={`product/${product.id}`}>
                  <Styled.ImageContainer>
                    <Styled.Img src={product.gallery[0]}></Styled.Img>
                    {!product.inStock && (
                      <Styled.OutOfStock>OUT OF STOCK</Styled.OutOfStock>
                    )}
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
