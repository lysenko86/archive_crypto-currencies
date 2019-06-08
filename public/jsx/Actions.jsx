import React from 'react';
import $ from 'jquery';
import actions from './actions.js';

class Actions extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            totalSumUAH: 0,
            totalSumUSD: 0
        }
    }
    render(){
        let totalSumUAH = 0;
        let totalSumUSD = 0;
        actions.map((value)=>{
            totalSumUAH += value.UAH;
            totalSumUSD += value.USD;
        });
        return (<div className="page-actions">
            <table className="table table-bordered table-hover table-actions">
                <thead><tr>
                    <th className="col-date">Дата</th>
                    <th className="col-sum">UAH</th>
                    <th className="col-sum">USD</th>
                </tr></thead>
                <tbody>
                    {actions.map((value, index)=>{
                        return <tr key={'order_' + index}>
                            <td className="col-date">{value.date}</td>
                            <td className="col-sum">{value.UAH}</td>
                            <td className="col-sum">{value.USD}</td>
                        </tr>
                    })}
                </tbody>
                <tfoot><tr>
                    <td className="col-date"></td>
                    <td className={'col-sum ' + (totalSumUAH >= 0 ? 'colorPlus' : 'colorMinus')}>{Math.round(totalSumUAH)}</td>
                    <td className={'col-sum ' + (totalSumUSD >= 0 ? 'colorPlus' : 'colorMinus')}>{Math.round(totalSumUSD)}</td>
                </tr></tfoot>
            </table>
        </div>)
    }
}

export default Actions;
