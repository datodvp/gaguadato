import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import * as Styled from './App.styled';
import { getData } from './graphql/client';
import { categoriesQuery } from './graphql/queries';
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
    };
  }

  componentDidMount() {
    this.getCategories();
  }

  getCategories = async () => {
    let categoriesData = await getData(categoriesQuery);

    this.setState({
      categories: categoriesData.categories,
    });
  };

  changeCurrentCategoryIndex = (index) => {
    this.setState({
      currentCategoryIndex: index,
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
