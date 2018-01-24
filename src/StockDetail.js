import React, {Component} from 'react';



class StockDetail extends Component {
    render () {
        return (
            <div>
                <h2>{this.state.stock.name}</h2>
                <h3>{this.state.stock.symbol}</h3>
                <p>{this.state.stock.lastPrice}</p>
                <p>{this.state.stock.change}</p>
                <p>{this.state.stock.high}</p>
                <p>{this.state.stock.low}</p>
                <p>{this.state.stock.open}</p>



            </div>
        )
    }

}

export default StockDetail
