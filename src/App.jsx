import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import * as Styled from './App.styled';
import { getData } from './graphql/client';
import { categoriesQuery, currenciesQuery } from './graphql/queries';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Product from './pages/Product/Product';
import Cart from './pages/Cart/Cart';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: [],
      currentCategoryIndex: 0,
      currencies: [],
      currentCurrencyIndex: localStorage.getItem('currentCurrencyIndex') || 0,
      productsInBasket:
        JSON.parse(localStorage.getItem('productsInBasket')) || [],
    };
  }

  componentDidMount() {
    this.getCategories();
    this.getCurrencies();
  }

  getCurrencies = async () => {
    let currenciesData = await getData(currenciesQuery);
    let { currencies } = currenciesData;

    this.setState({
      currencies: currencies,
    });
  };

  changeCurrentCurrencyIndex = (currencyIndex) => {
    this.setState(
      {
        currentCurrencyIndex: currencyIndex,
      },
      () => {
        // save currency in local storage
        localStorage.setItem(
          'currentCurrencyIndex',
          this.state.currentCurrencyIndex
        );
      }
    );
  };

  getCategories = async () => {
    let categoriesData = await getData(categoriesQuery);
    let { categories } = categoriesData;

    this.setState({
      categories: categories,
    });
  };

  changeCurrentCategoryIndex = (CategoryIndex) => {
    this.setState({
      currentCategoryIndex: CategoryIndex,
    });
  };

  removeProductFromBasket = (newProductsData) => {
    this.setState(
      {
        productsInBasket: newProductsData,
      },
      () => {
        //save data in local storage
        localStorage.setItem(
          'productsInBasket',
          JSON.stringify(this.state.productsInBasket)
        );
      }
    );
  };

  addProductInBasket = (newProduct) => {
    //check if same exact product exists and if it does stack it on previous product else add it as new item

    // let item = this.
    // clone productsInBasket state to change it

    const clonedProductsInBasket = structuredClone(this.state.productsInBasket);

    let dataChanged = false;

    clonedProductsInBasket.every((productInBasket) => {
      // if product attributes and product id are same then change product data and set it on state
      if (
        productInBasket.productData.id === newProduct.productData.id &&
        JSON.stringify(productInBasket.chosenAttributes) ===
          JSON.stringify(newProduct.chosenAttributes)
      ) {
        productInBasket.amount += 1;
        this.setState(
          {
            productsInBasket: clonedProductsInBasket,
          },
          () => {
            //save data in local storage
            localStorage.setItem(
              'productsInBasket',
              JSON.stringify(this.state.productsInBasket)
            );
          }
        );
        dataChanged = true;
        return false;
      }
      return true;
    });
    // if product is different from other products after checking in basket then add it as new product
    if (dataChanged === false) {
      this.setState(
        {
          productsInBasket: [...this.state.productsInBasket, newProduct],
        },
        () => {
          // save data in local storage
          localStorage.setItem(
            'productsInBasket',
            JSON.stringify(this.state.productsInBasket)
          );
        }
      );
    }
  };

  changeItemAmount = (parameter, product) => {
    const clonedProductsInBasket = structuredClone(this.state.productsInBasket);

    clonedProductsInBasket.every((productInBasket, index) => {
      // if product attributes and product id are same then change product data and set it on state
      if (
        productInBasket.productData.id === product.productData.id &&
        JSON.stringify(productInBasket.chosenAttributes) ===
          JSON.stringify(product.chosenAttributes)
      ) {
        if (parameter === 'add') {
          productInBasket.amount += 1;
        } else if (parameter === 'substract') {
          if (productInBasket.amount === 1) {
            clonedProductsInBasket.splice(index, 1);
          }
          productInBasket.amount -= 1;
        }

        this.setState(
          {
            productsInBasket: clonedProductsInBasket,
          },
          () => {
            //save data in local storage
            localStorage.setItem(
              'productsInBasket',
              JSON.stringify(this.state.productsInBasket)
            );
          }
        );
        return false;
      }
      return true;
    });
  };

  changeAttribute = (newProductsInBasket) => {
    this.setState({
      productsInBasket: newProductsInBasket,
    });
  };

  render() {
    return (
      <>
        <Styled.Global />
        <Styled.Container>
          <Router>
            <Navbar
              categories={this.state.categories}
              currentCategoryIndex={this.state.currentCategoryIndex}
              changeCurrentCategoryIndex={this.changeCurrentCategoryIndex}
              currencies={this.state.currencies}
              currentCurrencyIndex={this.state.currentCurrencyIndex}
              changeCurrentCurrencyIndex={this.changeCurrentCurrencyIndex}
              productsInBasket={this.state.productsInBasket}
              changeItemAmount={this.changeItemAmount}
            />
            <Switch>
              <Route exact path='/'>
                <Home
                  categories={this.state.categories}
                  currentCategoryIndex={this.state.currentCategoryIndex}
                  currentCurrencyIndex={this.state.currentCurrencyIndex}
                  addProductInBasket={this.addProductInBasket}
                />
              </Route>
              <Route path='/product/:id'>
                <Product
                  productsInBasket={this.state.productsInBasket}
                  addProductInBasket={this.addProductInBasket}
                  currentCurrencyIndex={this.state.currentCurrencyIndex}
                />
              </Route>
              <Route path='/cart'>
                <Cart
                  productsInBasket={this.state.productsInBasket}
                  currentCurrencyIndex={this.state.currentCurrencyIndex}
                  changeItemAmount={this.changeItemAmount}
                  removeProductFromBasket={this.removeProductFromBasket}
                  changeAttribute={this.changeAttribute}
                />
              </Route>
            </Switch>
          </Router>
        </Styled.Container>
      </>
    );
  }
}
