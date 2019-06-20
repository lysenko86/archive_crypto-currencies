import React from 'react';
import ReactDOM from 'react-dom';

class CurrenciesRow extends React.Component{
    constructor(props){
        super(props);
        this.handleChangePrice = this.handleChangePrice.bind(this);
        this.roundPrice = this.props.currency.roundPrice;
        const currency = this.props.currency;
        const priceInSum = currency.priceIn * currency.sum;
        const priceNow = currency.priceNow ? currency.priceNow : (currency.exmo && currency.exmo.last_trade ? currency.exmo.last_trade : 'error');
        const priceNowSum = priceNow * currency.sum;
        const increaseSum = priceNowSum - priceInSum;
        const increasePercent = parseFloat(currency.sum) === 0 ? 0 : Math.round(increaseSum * 100 / priceInSum / 100 * 10000) / 100;
        this.state = {
            title: currency.title + ' (' + currency.key.split('_')[0] + ')',
            sum: this.roundPrice(currency.sum),
            priceIn: this.roundPrice(currency.priceIn),
            priceInSum: this.roundPrice(priceInSum),
            priceNow: this.roundPrice(priceNow),
            priceNowSum: this.roundPrice(priceNowSum),
            increaseSum: this.roundPrice(increaseSum),
            increasePercent: increasePercent,
            priceMax: this.roundPrice(currency.priceMax),
            priceOut: this.roundPrice(priceNow),
            priceOutSum: this.roundPrice(priceNowSum),
            increaseOutPercent: increasePercent,
            top: currency.top
        };
    }
    handleChangePrice(event){
        const currency = this.props.currency;
        const priceInSum = currency.priceIn * currency.sum;
        const priceOut = event.target.value;
        const priceOutSum = priceOut * currency.sum;
        const increaseOutSum = priceOutSum - priceInSum;
        const increaseOutPercent = parseFloat(currency.sum) === 0 ? 0 : Math.round(increaseOutSum * 100 / priceInSum / 100 * 10000) / 100;
        this.setState({
            priceOut: priceOut,
            priceOutSum: this.roundPrice(priceOutSum),
            increaseOutPercent: increaseOutPercent
        });
        this.props.changeFooter(priceOut);
    }
    render(){
        return <React.Fragment>
            {this.props.topHeader ? <tr><td className="col-top" colSpan="12">TOP {this.state.top}</td></tr> : false}
            <tr>
                <td className="col-name">{this.state.title}</td>
                <td className="col-sum">{this.state.sum}</td>
                <td className="col-price-in">{this.state.priceIn + '$'}</td>
                <td className="col-sum-in">{this.state.priceInSum + '$'}</td>
                <td className="col-price-now"><strong>{this.state.priceNow + '$'}</strong></td>
                <td className="col-sum-now">{this.state.priceNowSum + '$'}</td>
                <td className={'col-increase-now ' + (this.state.increaseSum >= 0 ? 'colorPlus' : 'colorMinus')}>{this.state.increaseSum + '$'}</td>
                <td className={'col-increase-now-percent ' + (this.state.increasePercent >= 0 ? 'colorPlus' : 'colorMinus')}>{this.state.increasePercent + '%'}</td>
                <td className="col-price-max">{this.state.priceMax + '$'}</td>
                <td className="col-price-out"><input type="text" className="priceOut" value={this.state.priceOut} onChange={this.handleChangePrice} /> $</td>
                <td className="col-sum-out">{this.state.priceOutSum + '$'}</td>
                <td className="col-increase-out-percent">{this.state.increaseOutPercent + '%'}</td>
            </tr>
        </React.Fragment>
    }
}

export default CurrenciesRow;
