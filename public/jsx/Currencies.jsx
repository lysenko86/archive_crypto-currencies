import React from 'react';
import CurrenciesHead from './CurrenciesHead.jsx';
import CurrencyRow from './CurrencyRow.jsx';
import deposit from './deposit.jsx';
import $ from 'jquery';

class Currencies extends React.Component{
    constructor(props){
        super(props);
        this.handleChangeFooter = this.handleChangeFooter.bind(this);
        this.state = {
            currencies: [],
            totalSumIn: 0,
            totalSumNow: 0,
            totalSumMax: 0
        };
    }
    handleChangeFooter(row){
        /*let totalSumOut = 0;
        $(this).closest('tbody').find('tr').each(function(){
            const outSum = $(this).find('td.col-sum-out').text().replace('$', '');
            totalSumOut += parseFloat(outSum);
        });
        totalSumOut = roundPrice(totalSumOut);
        const totalInSum = $('.table-currencies tfoot td.col-sum-in').text().replace('$', '');
        const totalIncreaseSum = totalSumOut - totalInSum;
        const totalPercentOut = totalSumOut === 0 ? 0 : Math.round(totalIncreaseSum * 100 / totalInSum / 100 * 10000) / 100;
        $('.table-currencies tfoot td.col-sum-out').text(totalSumOut + '$');
        $('.table-currencies tfoot td.col-increase-out-percent').text(totalPercentOut + '%');*/
    }
    render(){
        if (!this.state.currencies.BTC_USD){
            const thisLink = this;
            $.get('https://api.exmo.com/v1/ticker/', {}, function(data){
                thisLink.setState({currencies: data});
            });
        }
        return (<div className="page-currencies">
            <CurrenciesHead />
            <div className="table-currencies-container">
                <table className="table table-bordered table-hover table-currencies"><tbody>
                    {!this.state.currencies.BTC_USD ? false : deposit.map((value, index)=>{
                        value.exmo = this.state.currencies[value.key];
                        return <CurrencyRow key={index} currency={value} changeFooter={this.handleChangeFooter}/>
                    })}
                </tbody></table>
            </div>
            <table className="table table-bordered table-currencies"><tfoot></tfoot></table>
        </div>)
    }
}

export default Currencies;
