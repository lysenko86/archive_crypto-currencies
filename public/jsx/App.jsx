import React from 'react';

import Currencies from './Currencies.jsx';
import Actions from './Actions.jsx';
import Analytics from './Analytics.jsx';

class App extends React.Component{
    render(){
        return (
            <main>
                <Currencies />
                <Actions />
                <Analytics />
            </main>
        )
    }
}

export default App;
