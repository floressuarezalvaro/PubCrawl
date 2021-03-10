import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Search from "./Pages/Search";
import Map from "./Pages/Map";
import Home from "./Pages/Home";

function App() {

const checkLoggedIn = () => {
  let token = localStorage.getItem("auth-token");
  if(token === null) {
    localStorage.setItem("auth-token", "");
  }
};

  useEffect(() => {
    checkLoggedIn();
  }, []);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/search" component={Search} />
          <Route path="/map" component={Map} />
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
