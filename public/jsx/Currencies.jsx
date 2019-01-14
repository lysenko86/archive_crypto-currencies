import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

class Currencies extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            deposit: [
                {key: 'LTC_USD', title: 'Litecoin', sum: 0.03657, priceIn: 60.69, priceMax: 352.616},
                {key: 'LTC_USD', title: 'Litecoin', sum: 0.05, priceIn: 66.2, priceMax: 352.616},
                {key: 'ZEC_USD', title: 'Zcash', sum: 0.03992, priceIn: 143.8788, priceMax: 731.37},
                {key: 'EOS_USD', title: 'EOS', sum: 3.992, priceIn: 6.633, priceMax: 20.474},
                {key: 'HBZ_USD', title: 'Helbiz', sum: 490.74, priceIn: 0.0038379, priceMax: 0.020609},
                {key: 'HBZ_USD', title: 'Helbiz', sum: 10000, priceIn: 0.0026, priceMax: 0.020609},
                {key: 'DXT_USD', title: 'Datawallet', sum: 870, priceIn: 0.0115, priceMax: 0.99813},
                {key: 'DXT_USD', title: 'Datawallet', sum: 515.254, priceIn: 0.0105, priceMax: 0.99813},
                {key: 'DXT_USD', title: 'Datawallet', sum: 481, priceIn: 0.01053, priceMax: 0.99813},
                {key: 'DXT_USD', title: 'Datawallet', sum: 2000, priceIn: 0.0093, priceMax: 0.99813},
                {key: 'OMG_USD', title: 'OmiseGO', sum: 1.426, priceIn: 4.18, priceMax: 25.3071},
                {key: 'OMG_USD', title: 'OmiseGO', sum: 4.624, priceIn: 3.255, priceMax: 25.3071},
                {key: 'OMG_USD', title: 'OmiseGO', sum: 3, priceIn: 3.332, priceMax: 25.3071},
                {key: 'OMG_USD', title: 'OmiseGO', sum: 16.667, priceIn: 3.68, priceMax: 25.3071},
                {key: 'OMG_USD', title: 'OmiseGO', sum: 8.227, priceIn: 3.5, priceMax: 25.3071},
                {key: 'OMG_USD', title: 'OmiseGO', sum: 5.551, priceIn: 3.53, priceMax: 25.3071},
                {key: 'OMG_USD', title: 'OmiseGO', sum: 6.101, priceIn: 3.53, priceMax: 25.3071},
                {key: 'OMG_USD', title: 'OmiseGO', sum: 14.642, priceIn: 3.55, priceMax: 25.3071},
                {key: 'OMG_USD', title: 'OmiseGO', sum: 14.403, priceIn: 3.55, priceMax: 25.3071},
                {key: 'OMG_USD', title: 'OmiseGO', sum: 4.134, priceIn: 3.12, priceMax: 25.3071},
                {key: 'MNX_USD', title: 'MinexCoin', sum: 10.297, priceIn: 2.4, priceMax: 51.633},
                {key: 'MNX_USD', title: 'MinexCoin', sum: 9.054, priceIn: 2.11, priceMax: 51.633},
                {key: 'ADA_USD', title: 'Cardano', sum: 31, priceIn: 0.12, priceMax: 1.2655},
                {key: 'ADA_USD', title: 'Cardano', sum: 118.5, priceIn: 0.0849, priceMax: 1.2655},
                {key: 'ADA_USD', title: 'Cardano', sum: 400, priceIn: 0.077, priceMax: 1.2655},
                {key: 'INK_USD', title: 'Ink', sum: 653.69, priceIn: 0.0228, priceMax: 0.915974},
                {key: 'INK_USD', title: 'Ink', sum: 325.812, priceIn: 0.02015, priceMax: 0.915974},
                {key: 'NEO_USD', title: 'NEO', sum: 1.9896, priceIn: 24.07989, priceMax: 170.04},
                {key: 'TRX_USD', title: 'Tron', sum: 1400, priceIn: 0.0228, priceMax: 0.27371},
                {key: 'XLM_USD', title: 'Stellar', sum: 57.02, priceIn: 0.22, priceMax: 0.87315},
                {key: 'STQ_USD', title: 'Storiqa', sum: 10000, priceIn: 0.0024, priceMax: 0.013205},
                {key: 'GAS_USD', title: 'Gas', sum: 6, priceIn: 5.37, priceMax: 79.21},

                {key: 'BTC_USD', title: 'Bitcoin', sum: 0.0037293, priceIn: 11250, priceMax: 19331},
                {key: 'DASH_USD', title: 'Dash', sum: 0.01, priceIn: 740, priceMax: 1470},
                {key: 'DASH_USD', title: 'Dash', sum: 0.00996, priceIn: 626.104, priceMax: 1470},
                {key: 'ETH_USD', title: 'Ethereum', sum: 0.031936, priceIn: 970, priceMax: 1391},
                {key: 'XRP_USD', title: 'Ripple', sum: 14.98352, priceIn: 1.1367, priceMax: 3.0515},
                {key: 'XRP_USD', title: 'Ripple', sum: 40, priceIn: 1.125, priceMax: 3.0515},
                {key: 'ETC_USD', title: 'Ethereum Classic', sum: 1.0, priceIn: 33.47, priceMax: 44.546},
                {key: 'ETC_USD', title: 'Ethereum Classic', sum: 0.59136, priceIn: 29.044, priceMax: 44.546},

                {key: 'USD', title: 'Exmo', sum: 0, priceIn: 1, priceMax: 1, priceNow: 1}
            ],
            totalSumIn: 0,
            totalSumNow: 0,
            totalSumMax: 0
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
    render(){
        $.get('https://api.exmo.com/v1/ticker/', {}, function(data){
            console.log(data);
            ReactDOM.findDOMNode('.table-currencies-container table tbody').html(data['BTC_USD'].high);

        });
        return (<div className="page-currencies">
            <table className="table table-bordered table-currencies"><thead><tr>
                <th className="col-name">Валюта</th>
                <th className="col-sum">Сума</th>
                <th className="col-price-in">Ціна закупа, $</th>
                <th className="col-sum-in">Сума закупа, $</th>
                <th className="col-price-now">Ціна зараз, $</th>
                <th className="col-sum-now">Сума зараз, $</th>
                <th className="col-increase-now">Ріст, $</th>
                <th className="col-increase-now-percent">Ріст, %</th>
                <th className="col-price-max">Макс, $</th>
                <th className="col-price-out">Ціна продажу, $</th>
                <th className="col-sum-out">Сума продажу, $</th>
                <th className="col-increase-out-percent">Ріст продажу, %</th>
                <th className="col-scrollbar"></th>
            </tr></thead></table>
            <div className="table-currencies-container">
                <table className="table table-bordered table-hover table-currencies"><tbody></tbody></table>
            </div>
            <table className="table table-bordered table-currencies"><tfoot></tfoot></table>
        </div>)
    }
}

export default Currencies;
