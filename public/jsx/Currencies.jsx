import React from 'react';
import CurrenciesHeader from './CurrenciesHeader.jsx';
import CurrenciesRow from './CurrenciesRow.jsx';
import CurrenciesFooter from './CurrenciesFooter.jsx';
import deposit from './deposit.jsx';
import $ from 'jquery';

class Currencies extends React.Component{
    constructor(props){
        super(props);
        this.roundPrice = this.roundPrice.bind(this);
        this.handleChangeFooter = this.handleChangeFooter.bind(this);
        this.state = {
            currencies: {},
            totalSumIn: 0,
            totalSumNow: 0,
            totalSumMax: 0,
            totalSumOut: 0
        };
    }
    roundPrice(price){
        if (Math.abs(price) >= 1000){
            price = Math.round(price);
        } else if (Math.abs(price) >= 100){
            price = Math.round(price * 1000) / 1000;
        } else if (Math.abs(price) >= 1){
            price = Math.round(price * 100000) / 100000
        } else {
            price = Math.round(price * 100000000) / 100000000
        }
        return price;
    }
    handleChangeFooter(priceOut){
        let totalSumOut = 0;
        const rows = document.querySelectorAll('.table-currencies tbody tr');
        for (let i=0; i<rows.length; i++){
            const sum = rows[i].querySelector('td.col-sum').innerHTML;
            const price = rows[i].querySelector('input.priceOut').value;
            totalSumOut += price * sum;
        }
        this.setState({totalSumOut: this.roundPrice(totalSumOut)});
    }
    render(){
        if (!this.state.currencies.BTC_USD){
            const thisLink = this;
            $.get('https://api.exmo.com/v1/ticker/', {}, function(data){
                thisLink.setState({currencies: data});
                let totalSumIn = 0;
                let totalSumNow = 0;
                let totalSumMax = 0;
                deposit.map((value)=>{
                    const exmo = data[value.key];
                    totalSumIn += value.priceIn * value.sum;
                    totalSumNow += value.priceNow ? value.priceNow : (exmo && exmo.last_trade ? exmo.last_trade : 'error') * value.sum;
                    totalSumMax += value.priceMax * value.sum;
                });
                thisLink.setState({
                    totalSumIn: thisLink.roundPrice(totalSumIn),
                    totalSumNow: thisLink.roundPrice(totalSumNow),
                    totalSumMax: thisLink.roundPrice(totalSumMax),
                    totalSumOut: thisLink.roundPrice(totalSumNow)
                });
            });
        }
        return (<div className="page-currencies">
            <CurrenciesHeader />
            <div className="table-currencies-container">
                <table className="table table-bordered table-hover table-currencies"><tbody>
                    {!this.state.currencies.BTC_USD ? false : deposit.map((value, index)=>{
                        if (value.sum === 0){
                            return false;
                        }
                        value.exmo = this.state.currencies[value.key];
                        value.roundPrice = this.roundPrice;
                        return <CurrenciesRow key={'currency_' + index} currency={value} changeFooter={this.handleChangeFooter} />
                    })}
                </tbody></table>
            </div>
            <CurrenciesFooter totalSumIn={this.state.totalSumIn} totalSumNow={this.state.totalSumNow} totalSumMax={this.state.totalSumMax} totalSumOut={this.state.totalSumOut}/>
        </div>)
    }
}

export default Currencies;
