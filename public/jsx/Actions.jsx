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
        this.setState({
            ...this.state,
            totalSumUAH: totalSumUAH,
            totalSumUSD: totalSumUSD
        });
        return (<div className="page-orders">
            <table className="table table-bordered table-hover table-orders">
                <thead><tr>
                    <th className="col-date">Дата</th>
                    <th className="col-sum">UAH</th>
                    <th className="col-sum">USD</th>
                </tr></thead>
                <tbody>
                </tbody>
                <tfoot><tr>
                </tr></tfoot>
            </table>
        </div>)
    }
}

export default Actions;
