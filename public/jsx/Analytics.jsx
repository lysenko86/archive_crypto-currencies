import React from 'react';
import $ from 'jquery';
import analytics from './analytics.js';

class Analytics extends React.Component{
    constructor(props){
        super(props);
        this.state = {}
    }
    render(){
        let totalSumAdd = 0;
        analytics.map(value => totalSumAdd += value.add);
        const lastCapital = analytics[analytics.length - 1].capitalEndMonth;
        let totalGrowthUSD = lastCapital - totalSumAdd;
        totalGrowthUSD = Math.round(totalGrowthUSD * 100) / 100;
        let totalGrowthPercent = lastCapital * 100 / totalSumAdd / 100 - 1;
        totalGrowthPercent = Math.round(totalGrowthPercent * 10000) / 100;
        totalSumAdd = Math.round(totalSumAdd * 100) / 100;
        return (<div className="page-analytics">
            <table className="table table-bordered table-hover table-analytics">
                <thead><tr>
                    <th className="col-month">Дата</th>
                    <th className="col-sum">Вклав</th>
                    <th className="col-sum">Капітал1</th>
                    <th className="col-sum">Капітал2</th>
                    <th className="col-sum">Ріст USD</th>
                    <th className="col-sum">Ріст %</th>
                </tr></thead>
                <tbody>
                    {analytics.map((value, index)=>{
                        let capitalDiffUSD = value.capitalEndMonth - value.capitalBeginMonth;
                        capitalDiffUSD = Math.round(capitalDiffUSD * 100) / 100;
                        let capitalDiffPercent = value.capitalEndMonth * 100 / value.capitalBeginMonth / 100 - 1;
                        capitalDiffPercent = Math.round(capitalDiffPercent * 10000) / 100;
                        return <tr key={'order_' + index}>
                            <td className="col-month">{value.month}</td>
                            <td className="col-sum">{value.add}$</td>
                            <td className="col-sum">{value.capitalBeginMonth}$</td>
                            <td className="col-sum">{value.capitalEndMonth}$</td>
                            <td className={'col-sum ' + (capitalDiffUSD >= 0 ? 'colorPlus' : 'colorMinus')}>{capitalDiffUSD}$</td>
                            <td className={'col-sum ' + (capitalDiffPercent >= 0 ? 'colorPlus' : 'colorMinus')}>{capitalDiffPercent}%</td>
                        </tr>
                    })}
                </tbody>
                <tfoot><tr>
                    <td className="col-month"></td>
                    <td className="col-sum">{totalSumAdd}$</td>
                    <td className="col-sum"></td>
                    <td className="col-sum"></td>
                    <td className={'col-sum ' + (totalGrowthUSD >= 0 ? 'colorPlus' : 'colorMinus')}>{Math.round(totalGrowthUSD)}$</td>
                    <td className={'col-sum ' + (totalGrowthPercent >= 0 ? 'colorPlus' : 'colorMinus')}>{Math.round(totalGrowthPercent)}%</td>
                </tr></tfoot>
            </table>
        </div>)
    }
}

export default Analytics;
