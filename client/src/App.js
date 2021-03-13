import { useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Landing from "./Pages/Landing";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Profile from "./Pages/Profile";
import Search from "./Pages/Search";
import Itinerary from "./Pages/Itinerary";
import SavedPubCrawls from "./Pages/SavedPubCrawls";
import Map from "./Pages/Map";
import Home from "./Pages/Home";
import UserContext from "./Context/UserContext";
import NavbarLogin from "./Components/NavbarLogin";
import Navbar from "./Components/Navbar";

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
      try {
        const userRes = await axios.get("/users", {
          headers: { "x-auth-token": token },
        });

        setUserData({ token, user: userRes.data });
      } catch (err) {
        console.log("User must login");
      }
    }
  };

  const logout = async () => {
    setUserData({ token: undefined, user: undefined });
    localStorage.setItem("auth-token", "");
    console.log(logout, "success");
  };

  useEffect(() => {
    checkLoggedIn();
  }, []);

  return (
    <div className="App">
      <Router>
        {!userData.user ? (
          <>
            <NavbarLogin />
          </>
        ) : (
          <Navbar />
        )}

        {/* {!userData.user ? (
          <>
            <Link to="/login">Login</Link> <Link to="/register">Register</Link>
          </>
        ) : (
          <Link to="/" onClick={logout}>
            Logout
          </Link>
        )} */}

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
              <Home component={Home} />
            </Route>
          </Switch>
        </UserContext.Provider>
      </Router>
    </div>
  );
}

export default App;
