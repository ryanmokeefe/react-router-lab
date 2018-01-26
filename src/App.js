import React, { Component } from 'react';
import './App.css';
import Stocks from './Stocks.js';
import About from './About.js';
import StockDetail from './StockDetail';
import {Route, Link} from 'react-router-dom';
import stockData from '../data/stock-data.json';


class App extends Component {
  constructor() {
    super()
    this.state = {
      stocks: []

    }
}

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
            <Route path="/stocks" component={
              () => (
                <Stocks stocks={stockData}/>
              )
            } />
            <Route path="/about" component={
              () => (
                <About />
              )
            } />
            <Route path="/:symbol" render={
              (props) => (
                <StockDetail {...props} stocks={stockData}/>
              )
            } />
          </div>
          </main>



        </div>
    );
  }
}

export default App;
