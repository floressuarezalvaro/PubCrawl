import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import UserContext from "../Context/UserContext";
import Navbar from "../Components/Navbar";
import SearchBar from "../Components/SearchBar";

const Home = (props) => {
  const { userData } = useContext(UserContext);
  const history = useHistory();

  useEffect(() => {
    if (!userData.user) history.push("/login");
  }, [userData.user, history]);

  return (
    <div>
      <Navbar />
      <SearchBar />
      {/* <h1>Home Page</h1>
      <h3>Hello {userData.user?.displayName}</h3>

      <button
        onClick={() => history.push("/search")}
        className="btn btn-outline-primary"
      >
        Submit
      </button> */}
    </div>
  );
};

export default Home;
