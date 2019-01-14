import React from 'react';
import ReactDOM from 'react-dom';

class CurrencyRow extends React.Component{
    constructor(props){
        super(props);
        this.handleChangePrice = this.handleChangePrice.bind(this);
        const currency = this.props.currency;
        const priceInSum = currency.priceIn * currency.sum;
        const priceNow = currency.priceNow ? currency.priceNow : (currency.exmo && currency.exmo.last_trade ? currency.exmo.last_trade : 'error');
        const priceNowSum = priceNow * currency.sum;
        const increaseSum = priceNowSum - priceInSum;
        const increasePercent = parseFloat(currency.sum) === 0 ? 0 : Math.round(increaseSum * 100 / priceInSum / 100 * 10000) / 100;
        this.state = {
            priceOut: priceNow,
            sum: currency.sum,
            priceNowSum: priceNowSum,
            increasePercent: increasePercent
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
    handleChangePrice(event){
        const currency = this.props.currency;
        const priceInSum = currency.priceIn * currency.sum;
        const priceNow = currency.priceNow ? currency.priceNow : (currency.exmo && currency.exmo.last_trade ? currency.exmo.last_trade : 'error');
        const priceNowSum = priceNow * currency.sum;
        const increaseSum = priceNowSum - priceInSum;
        const increasePercent = parseFloat(currency.sum) === 0 ? 0 : Math.round(increaseSum * 100 / priceInSum / 100 * 10000) / 100;
        this.setState({
            priceOut: event.target.value,
            priceNowSum: roundPrice(event.target.value * this.state.sum),
            increasePercent: parseFloat(this.state.sum) === 0 ? 0 : Math.round(increaseSum * 100 / priceInSum / 100 * 10000) / 100
        });


        const $tr = $(this).closest('tr');
        const currencySum = $tr.find('td.col-sum').text();
        const price = $(this).val();
        const totalSum = roundPrice(price * currencySum);
        const priceInSum = $tr.find('td.col-sum-in').text().replace('$', '');
        const increaseSum = totalSum - priceInSum;
        const totalPercent = parseFloat(currencySum) === 0 ? 0 : Math.round(increaseSum * 100 / priceInSum / 100 * 10000) / 100;
        $tr.find('td.col-sum-out').text(totalSum + '$');
        $tr.find('td.col-increase-out-percent').text(totalPercent + '%');




        this.props.changeFooter('GOOD 1000');
    }
    render(){
        const currency = this.props.currency;
        const currencyTitle = currency.title + ' (' + currency.key.split('_')[0] + ')';
        const priceInSum = currency.priceIn * currency.sum;
        const priceNow = currency.priceNow ? currency.priceNow : (currency.exmo && currency.exmo.last_trade ? currency.exmo.last_trade : 'error');
        const priceNowSum = priceNow * currency.sum;
        const increaseSum = priceNowSum - priceInSum;
        const increasePercent = parseFloat(currency.sum) === 0 ? 0 : Math.round(increaseSum * 100 / priceInSum / 100 * 10000) / 100;
        return <tr>
            <td className="col-name">{currencyTitle}</td>
            <td className="col-sum">{this.roundPrice(currency.sum)}</td>
            <td className="col-price-in">{this.roundPrice(currency.priceIn) + '$'}</td>
            <td className="col-sum-in">{this.roundPrice(priceInSum) + '$'}</td>
            <td className="col-price-now"><strong>{this.roundPrice(priceNow) + '$'}</strong></td>
            <td className="col-sum-now">{this.roundPrice(priceNowSum) + '$'}</td>
            <td className={'col-increase-now ' +  (increaseSum >= 0 ? 'colorPlus' : 'colorMinus')}>{this.roundPrice(increaseSum) + '$'}</td>
            <td className={'col-increase-now-percent ' +  (increasePercent >= 0 ? 'colorPlus' : 'colorMinus')}>{this.roundPrice(increasePercent) + '%'}</td>
            <td className="col-price-max">{this.roundPrice(currency.priceMax) + '$'}</td>
            <td className="col-price-out"><input type="text" className="priceOut" value={this.roundPrice(this.state.priceOut)} onChange={this.handleChangePrice} /> $</td>
            <td className="col-sum-out">{this.roundPrice(this.state.priceNowSum) + '$'}</td>
            <td className="col-increase-out-percent">{this.state.increasePercent + '%'}</td>
        </tr>
    }
}

export default CurrencyRow;
