import React, { Component } from 'react';
import { withRouter } from 'react-router';

class Product extends Component {
  constructor(props) {
    super(props);

    this.productId = props.match.params.id;
  }

  render() {
    return <div>Product</div>;
  }
}

export default withRouter(Product);
