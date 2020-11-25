import React from 'react';

class CurrenciesFooter extends React.Component{
    render(){
        const totalIncreaseSum = Math.round((this.props.totalSumNow - this.props.totalSumIn) * 100)  / 100;
        const totalIncreasePercent = Math.round(totalIncreaseSum * 100 / this.props.totalSumIn / 100 * 10000) / 100;
        const totalIncreaseOutSum = this.props.totalSumOut - this.props.totalSumIn;
        const totalDeposit = 832.17;
        const totalDepositDiff = Math.round((this.props.totalSumNow - totalDeposit) * 100) / 100;
        const totalDepositDiffPercent = Math.round(totalDepositDiff * 100 / totalDeposit / 100 * 10000) / 100;
        return <table className="table table-bordered table-currencies"><tfoot>
            <tr>
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
                <td className="col-sum-out"></td>
                <td className="col-increase-out-percent"></td>
            </tr>
            <tr>
                <td className="col-name">Депозит повністю:</td>
                <td className="col-sum"></td>
                <td className="col-price-in"></td>
                <td className="col-sum-in">{totalDeposit + '$'}</td>
                <td className="col-price-now"></td>
                <td className="col-sum-now">{this.props.totalSumNow + '$'}</td>
                <td className={'col-increase-now ' +  (totalDepositDiff >= 0 ? 'colorPlus' : 'colorMinus')}>{totalDepositDiff + '$'}</td>
                <td className={'col-increase-now-percent ' +  (totalDepositDiffPercent >= 0 ? 'colorPlus' : 'colorMinus')}>{totalDepositDiffPercent + '%'}</td>
                <td className="col-price-max"></td>
                <td className="col-price-out"></td>
                <td className="col-sum-out"></td>
                <td className="col-increase-out-percent"></td>
            </tr>
        </tfoot></table>
    }
}

export default CurrenciesFooter;
