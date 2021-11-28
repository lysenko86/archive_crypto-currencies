import React from "react";

import Currencies from "./Currencies.jsx";
import Actions from "./Actions.jsx";

class App extends React.Component {
  render() {
    return (
      <main>
        <Currencies />
        <Actions />
      </main>
    );
  }
}

export default App;
