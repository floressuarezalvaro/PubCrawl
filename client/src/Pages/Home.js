import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import UserContext from "../Context/UserContext"

const Home = (props) => {
const { userData } = useContext(UserContext);
const history = useHistory();

useEffect(() => {
if(!userData.user) history.push("/login");
}, [userData.user, history])

  return (
    <div>
      <h1>Hello from Home Page</h1>
      <button onClick={props.logout}>Logout</button>
    </div>
  );
};

export default Home;
