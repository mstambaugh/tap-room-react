import React from 'react';
import Keg from './Keg';
import PropTypes from 'prop-types';

class PintSales extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      onPintSale = false
    };
    this.handlePintSale = this.handlePintSale.bind(this);
  }
  
  handlePintSale() {
    event.preventDefault()
    var newPintsLeft = this.state.pintsLeft;
    newPintsLeft -= 1
    newPintsLeft.push();
    this.setState({ pintsLeft: newPintsLeft });
  }

  render() {
    if 
    return (
      pintsLeft
    );

  Keg.propTypes = {
    onPintSale: PropTypes.func
  };
