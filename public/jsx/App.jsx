import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, Link} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
const history = createBrowserHistory();

import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Home from './Home.jsx';
import Currencies from './Currencies.jsx';
import Actions from './Actions.jsx';

class App extends React.Component{
    render(){
        return (
            <div>
                <Header history={history} />
                <main className="container">
                    <div className="row">
                        <div className="col-12">
                            <Router history={history}>
                                <div>
                                    <Route exact path="/" component={Home} />
                                    <Route exact path="/currencies" component={Currencies} />
                                    <Route exact path="/actions" component={Actions} />
                                </div>
                            </Router>
                        </div>
                    </div>
                </main>
                <Footer />
            </div>
        )
    }
}

export default App;
