import React from "react";

import CurrenciesLong from "./CurrenciesLong.jsx";
import CurrenciesShort from "./CurrenciesShort.jsx";
import Actions from "./Actions.jsx";

class App extends React.Component {
  render() {
    return (
      <main>
        <CurrenciesShort />
        <CurrenciesLong />
        <Actions />
      </main>
    );
  }
}

export default App;
