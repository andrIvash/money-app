import React, { Component } from 'react';
import './style.css';
import Wallet from '../Wallet';

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="logo">
          <img src="" alt="logo" className="logo__img"/>
        </div>
        <Wallet/>
      </div>
    );
  }
}

export default App;
