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
                headers: {
                    Key: exmo.key,
                    Sign: secretPrepared
                },
                dataType: 'json',
                success: function(data){
                    const orders = [];
                    for (let key in data){
                        orders.push(data[key][0]);
                    }
                    thisLink.setState({orders: orders});
                }
            });
        }
        return (<div className="page-orders">
            {this.state.orders.map((value, index)=>{
                return <div key={'k' + index}>{value.pair} - {value.price} - {value.quantity}</div>
            })}
        </div>)
    }
}

export default Orders;
