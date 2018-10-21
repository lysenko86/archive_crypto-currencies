import React from 'react';
import ReactDOM from 'react-dom';

import TableHeader from './table-header';
import TableFooter from './table-footer';

class App extends Component {
    render(){
        return(
            <TableHeader/>
            <TableFooter/>
        );
    }
}

export default App;
