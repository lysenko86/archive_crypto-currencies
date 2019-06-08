import React from 'react';
import {Router, Route, Link} from 'react-router-dom';

class Menu extends React.Component{
    render(){
        return (<div>
            <Router history={this.props.history}>
                <div className="menu">
                    <ul>
                        <li><Link to="/">Головна</Link></li>
                        <li><Link to="/currencies">Валюти</Link></li>
                        <li><Link to="/actions">Транзакції</Link></li>
                    </ul>
                </div>
            </Router>
        </div>)
    }
}

export default Menu;
