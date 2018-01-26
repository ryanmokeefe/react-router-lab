import React, {Component} from 'react';



class StockDetail extends Component {
    constructor (props) {
        super(props)
        this.state = {
            stocks: this.props.stocks
        }
    }


    render () {
        let stock = this.props.stocks.find((e)=> { return e.symbol === this.props.match.params.symbol })


        return (
            <div>
                <p>hello world</p>
                <h2>{stock.name}</h2> 
                <h3>{stock.symbol}</h3>
                <p>{stock.lastPrice}</p>
                <p>{stock.change}</p>
                <p>{stock.high}</p>
                <p>{stock.low}</p>
                <p>{stock.open}</p>

            </div>
        )
    }

}

export default StockDetail
