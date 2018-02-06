import React, { Component } from 'react';
import './style.css';


class Payment extends Component {

  render() {
    const {isOpen, onConfirmed} = this.props;
    return (
      <div className = {isOpen ? "payment payment--open" : "payment"}>
        <ul className = "payment__list">

        </ul>
        <button
          className = "payment__submit"
          onClick={onConfirmed.bind(this, "value")}
        >
          check
        </button>
      </div>
    );
  }
}

export default Payment;
