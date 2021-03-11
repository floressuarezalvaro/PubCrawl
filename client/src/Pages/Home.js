import React, { useContext, useEffect } from "react";
import {useHistory} from "react-router-dom";

const Home = () => {
  const { userData } = useContext(UserContext);
  const history = useHistory();

  useEffect(() => {
    if (!userData.user) history.push("/search");
  }, [userData.user, history]);

  return (
    <div className="container">
      <h1>Home Page</h1>
      <p>Let's go Bar Hopping!</p>
      <button onClick = {() => history.push("/search")} className="btn btn-outline-primary">Submit</button>
    </div>
  );
};

export default Home;
