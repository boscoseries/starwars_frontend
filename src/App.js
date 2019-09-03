import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Homepage from "./pages/Homepage";
import Header from "./components/Header";
import Starships from "./pages/Starships";
import People from "./pages/People";

function App () {
  return (
    <Router>
      <div>
        <Header />
        <Route path="/" exact component={Homepage} />
        <Route path="/starships" exact component={Starships} />
        <Route path="/people" exact component={People} />
      </div>
    </Router>
  );
}

export default App;
