import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
`;
/**
 * Component that alerts if you click outside of it
 */
export default class OutsideAlerter extends Component {
  constructor(props) {
    super(props);

    this.wrapperRef = React.createRef();
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  /**
   * Alert if clicked on outside of element
   */
  handleClickOutside(event) {
    if (this.wrapperRef && !this.wrapperRef.current.contains(event.target)) {
      if (this.props.currencyOpen) {
        this.props.currencyToggle();
      }
      if (this.props.miniCartOpen) {
        this.props.miniCartToggle();
      }
    }
  }

  render() {
    return <Container ref={this.wrapperRef}>{this.props.children}</Container>;
  }
}
