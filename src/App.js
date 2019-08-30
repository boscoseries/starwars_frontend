import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Homepage from "./pages/Homepage";
import Header from "./components/Header";

function App () {
  return (
    <Router>
      <div>
        <Header />
        <Route path="/" exact component={Homepage} />
      </div>
    </Router>
  );
}

export default App;
