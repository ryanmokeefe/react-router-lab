import React, {Component} from 'react';
import stockData from '../data/stock-data.json';


class Stocks extends Component {
    constructor(props) {
        super(props)
        this.state = {
            stocks: [],
            name: '',
            symbol: '',
            open: ''
        }
    }

    componentDidMount() {
            this.setState({
                stocks: stockData
            })
    }

    render () {

        let stocks = this.state.stocks.map((stock, index) => {
            return (
            <div key={index}>
                <div> {stock.symbol} </div>
                <h3>{stock.name} </h3>
                <p>{stock.open}</p>

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
