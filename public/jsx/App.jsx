import '../styles.css';

import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, Link} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
const history = createBrowserHistory();

import Home from './Home.jsx';
import Currencies from './Currencies.jsx';
import Orders from './Orders.jsx';

class App extends React.Component{
    render(){
        return (
            <Router history={history}>
                <div>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/currencies" component={Currencies} />
                    <Route exact path="/orders" component={Orders} />
                </div>
            </Router>
        )
    }
}

export default App;
