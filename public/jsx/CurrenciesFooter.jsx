import React from 'react';

class CurrenciesFooter extends React.Component{
    render(){
        const totalIncreaseSum = this.props.totalSumNow - this.props.totalSumIn;
        const totalIncreasePercent = Math.round(totalIncreaseSum * 100 / this.props.totalSumIn / 100 * 10000) / 100;
        const totalIncreaseOutSum = this.props.totalSumOut - this.props.totalSumIn;
        const totalIncreaseOutPercent = Math.round(totalIncreaseOutSum * 100 / this.props.totalSumIn / 100 * 10000) / 100;
        return <table className="table table-bordered table-currencies"><tfoot><tr>
            <td className="col-name">Загалом:</td>
            <td className="col-sum"></td>
            <td className="col-price-in"></td>
            <td className="col-sum-in">{this.props.totalSumIn + '$'}</td>
            <td className="col-price-now"></td>
            <td className="col-sum-now">{this.props.totalSumNow + '$'}</td>
            <td className={'col-increase-now ' +  (totalIncreaseSum >= 0 ? 'colorPlus' : 'colorMinus')}>{totalIncreaseSum + '$'}</td>
            <td className={'col-increase-now-percent ' +  (totalIncreasePercent >= 0 ? 'colorPlus' : 'colorMinus')}>{totalIncreasePercent + '%'}</td>
            <td className="col-price-max">{this.props.totalSumMax + '$'}</td>
            <td className="col-price-out"></td>
            <td className="col-sum-out">{this.props.totalSumOut + '$'}</td>
            <td className="col-increase-out-percent">{totalIncreaseOutPercent + '%'}</td>
            <td className="col-scrollbar"></td>
        </tr></tfoot></table>
    }
}

export default CurrenciesFooter;
