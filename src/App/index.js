import React, { Component } from 'react';

import logo from 'images/logo.png'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div class="container">
          <header class="page-header">
            <img src={logo} className="image-logo" alt="logo" />
            <h1 className="text-header color-title">Welcome to buskit.tv</h1>
          </header>
          <p className="text-body color-body" style={{textAlign: 'center'}}>
          This site is currently under maintenance. Please stand by for something awesome.
          </p>
        </div>
      </div>
    );
  }
}

export default App;
