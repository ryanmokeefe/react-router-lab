import React, {Component} from 'react';


class Stocks extends Component {


    componentDidMount() {
            this.setState({
                stocks: this.props.stocks
            })
    }

    render () {

        let stocks = this.props.stocks.map((stock, index) => {
            return (
            <div className="stockBox" key={index}>
              <a href={stock.symbol}>
                <div> {stock.symbol} </div>
                <h3>{stock.name} </h3>
                <p>{stock.open}</p>
              </a>
            </div>
        )})
        return (
            <div>
                <div>stock list</div>
                {stocks}
            </div>
        )
    }


}

export default Stocks
