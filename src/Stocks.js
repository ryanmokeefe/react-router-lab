import React, {Component} from 'react'
import stocks from '../data/stock-data.json'


class Stocks extends Component {
    constructor(props){
        super(props)
        this.state = {
            stocks,
            name: '',
            symbol: '',
            open: ''
        }
    }

    render() {
        let stocks = this.props.stocks.map((stock, index) => {
            return (
            <div key={index}>
                <img src={stock.img} alt={stock.name} />
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
