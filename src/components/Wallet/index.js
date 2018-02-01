import React, { Component } from 'react';
import './style.css';

import Payment from '../Payment';

class Wallet extends Component {

  state = {
    total: 0,
    isOpen: false
  };

  render() {
    const {total} = this.state;
    return (
      <div className = "wallet">
        <div className = "wallet__top">
          <button
            className = "wallet__decrement"
            onClick = {this.onDecrement}
          >-
          </button>
          <div className = "wallet__summ">
            {total}
          </div>
          <button
            className = "wallet__increment"
            onClick = {this.onIncrement}
          >+
          </button>
        </div>
        <div className = {this.state.isOpen ? "wallet__payment wallet__payment--open" : "wallet__payment"}>
          <Payment onSubmit = {this.onTransaction}/>
        </div>
        <ul className = "transactions wallet__list">
          <li className = "transactions__item">

          </li>
        </ul>
      </div>
    )
  };

  onIncrement = () => {
    this.setState({
      total: this.state.total + 1,
      isOpen: !this.state.isOpen
    });
  };

  onDecrement = () => {
    this.setState({
      total: this.state.total - 1,
      isOpen: !this.state.isOpen
    });
  };

  onTransaction = (val) => {
    console.log(val);
    this.setState({
      isOpen: !this.state.isOpen
    });
  };
}

export default Wallet;