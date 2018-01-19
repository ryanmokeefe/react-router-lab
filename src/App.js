import React, { Component } from 'react';
import './App.css';
import Stocks from './Stocks.js'
import About from './About'
import {Route, Link, Redirect, Switch} from 'react-router-dom'


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
          <Switch>
            <Route path='/stocks' render={
              () => (
                <Stocks />
              )
            } />
            <Route path='/about' render={
              () => (
                <About />
              )
            } />
          </Switch>
          </main>



        </div>
    );
  }
}

export default App;
