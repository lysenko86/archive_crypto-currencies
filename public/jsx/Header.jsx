import React from 'react';
import Menu from './Menu.jsx';

class Header extends React.Component{
    render(){
        return (<div>
            <header className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="flex-container">
                            <img className="logo" src='../images/logo.png' alt="" />
                            <Menu  history={this.props.history}/>
                        </div>
                    </div>
                </div>
            </header>
        </div>)
    }
}

export default Header;
