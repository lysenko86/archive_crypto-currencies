import React from 'react';
import $ from 'jquery';
import CryptoJS from 'crypto-js';
import exmo from './exmo.jsx';

class Orders extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            orders: []
        }
    }
    render(){
        if (!this.state.orders.length){
            const thisLink = this;
            const nonce = new Date().getTime();
            const secretPrepared = CryptoJS.HmacSHA512($.param({nonce: nonce}), exmo.secret);
            $.ajax({
                url: 'https://api.exmo.com/v1/user_open_orders',
                type: 'post',
                data: {nonce: nonce},
                headers: {Key: exmo.key, Sign: secretPrepared},
                dataType: 'json',
                success: function(data){
                    const orders = [];
                    for (let key in data){
                        for (let i=0; i<data[key].length; i++){
                            orders.push(data[key][i]);
                        }
                    }
                    thisLink.setState({orders: orders});
                }
            });
        }
        return (<div className="page-orders">
            <table className="table table-bordered table-hover table-orders">
                <thead><tr>
                    <th className="col-name">Валюта</th>
                    <th className="col-count">Кількість</th>
                    <th className="col-price">Ціна, $</th>
                    <th className="col-sum">Сума, $</th>
                    <th className="col-type">Тип</th>
                </tr></thead>
                <tbody>
                    {this.state.orders.map((value, index)=>{
                        return <tr key={'order_' + index}>
                            <td className="col-name">{value.pair}</td>
                            <td className="col-count">{value.quantity}</td>
                            <td className="col-price">{value.price}</td>
                            <td className="col-sum">{value.price * value.quantity}</td>
                            <td className="col-type"><img src={'../images/' + (value.type === 'sell' ? 'minus' : 'plus') + '.jpg'} alt="" /></td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>)
    }
}

export default Orders;
