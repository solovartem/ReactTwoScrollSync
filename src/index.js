import ReactDOM from "react-dom";
import React, { Component } from "react";

import VerticalExample from "./Components/VerticalExample";

class App extends Component {
  render() {
    return (
      <>
        <VerticalExample />
      </>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
