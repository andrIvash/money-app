import React, { Component } from 'react';
import './style.css';


class Payment extends Component {

  render() {
    return (
      <div className = "payment">
        <ul className = "payment__list">

        </ul>
        <button
          className = "payment__submit"
          onClick={this.onConfirm}
        >
          check
        </button>
      </div>
    );
  }

  onConfirm = () => {
    this.props.onSubmit("value")
  }

}

export default Payment;
