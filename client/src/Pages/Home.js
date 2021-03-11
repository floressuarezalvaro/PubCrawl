import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import UserContext from "../context/UserContext";

const Home = (props) => {
  const { userData } = useContext(UserContext);
  const history = useHistory();

  useEffect(() => {
    if (!userData.user) history.push("/login");
  }, [userData.user, history]);

  return (
    <div>
      <h1>Hello from Home Page</h1>
      <h3>Hello {userData.user?.displayName}</h3>
      <button
        onClick={() => history.push("/search")}
        className="btn btn-outline-primary"
      >
        Submit
      </button>
    </div>
  );
};

export default Home;
