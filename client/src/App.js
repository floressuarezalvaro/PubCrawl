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
import UserContext from "./Context/UserContext"
import axios from "axios";

function App() {
  
  const [userData, setUserData] = useState({ 
    user: undefined, 
    token: undefined, 
  });


  const checkLoggedIn = async () => {
    let token = localStorage.getItem("auth-token");
    if (token === null) {
      localStorage.setItem("auth-token", "");
    } else {
      const userRes = await axios.get("/users", {headers: {"x-auth-token": token},
     });

    console.log("User", userRes);

setUserData({ token, user: userRes.data });

    }
  };


const logout = async () => {
  setUserData({ token: undefined, user: undefined });
  localStorage.setItem("auth-token", "");
};

  useEffect(() => {
    checkLoggedIn();
  }, []);

  return (
    <div className="App">
      <Router>
        <UserContext.Provider value={{ userData, setUserData }}>
          <Switch>
            <Route path="/landing" component={Landing} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/profile" component={Profile} />
            <Route path="/search" component={Search} />
            <Route path="/itinerary" component={Itinerary} />
            <Route path="/savedpubcrawls" component={SavedPubCrawls} />
            <Route path="/map" component={Map} />
            <Route path="/">
              <Home logout={logout}/>
            </Route>
          </Switch>
        </UserContext.Provider>
      </Router>
    </div>
  );
}

export default App;
