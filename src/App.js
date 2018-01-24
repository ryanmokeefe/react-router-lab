import React, { Component } from 'react';
import './App.css';
import Stocks from './Stocks.js'
import About from './About.js'
import StockDetail from './StockDetail'
import {Route, Link} from 'react-router-dom'

class App extends Component {
  render() {
    return (
        <div>
          <nav>
            <h1>Stock Trades</h1>
            <Link to="/stocks"> Home </Link>
            <Link to="/about">About </Link>
          </nav>
          <main>
          <div>
            <Route path='/stocks' component={
              () => (
                <Stocks />
              )
            } />
            <Route path='/about' component={
              () => (
                <About />
              )
            } />
            <Route path='/stocks/:symbol' component={
              () => (
                <StockDetail />
              )
            } />
          </div>
          </main>



        </div>
    );
  }
}

export default App;
