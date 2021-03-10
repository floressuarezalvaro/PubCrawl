import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Profiler, useEffect, useState } from "react";
import Landing from "./Pages/Landing";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Profile from "./Pages/Profile";
import Search from "./Pages/Search";
import Itinerary from "./Pages/Itinerary";
import SavedPubCrawls from "./Pages/SavedPubCrawls";
import Map from "./Pages/Map";
import Home from "./Pages/Home";

function App() {
  const checkLoggedIn = () => {
    let token = localStorage.getItem("auth-token");
    if (token === null) {
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
          <Route path="/landing" component={Landing} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/profile" component={Profile} />
          <Route path="/search" component={Search} />
          <Route path="/itinerary" component={Itinerary} />
          <Route path="/savedpubcrawls" component={SavedPubCrawls} />
          <Route path="/map" component={Map} />
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
