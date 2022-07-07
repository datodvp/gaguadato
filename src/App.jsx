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
      currentCurrencyIndex: 0,
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
    this.setState({
      currentCurrencyIndex: currencyIndex,
    });
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
            />
            <Switch>
              <Route exact path='/'>
                <Home />
              </Route>
              <Route path='/product/:id'>
                <Product />
              </Route>
              <Route path='/cart'>
                <Cart />
              </Route>
            </Switch>
          </Router>
        </Styled.Container>
      </>
    );
  }
}
