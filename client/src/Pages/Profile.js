import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import CardProfile from "../Components/CardProfile";
import UserContext from "../Context/UserContext";

const Profile = (props) => {
  const { userData } = useContext(UserContext);
  const history = useHistory();

  useEffect(() => {
    if (!userData.user);
  }, [userData.user, history]);
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col s6 m4 l4">
            <div className="card">
              <div className="card-content">
                <div className="card-image">
                  <img src="https://via.placeholder.com/150" />
                </div>
                <h6>{userData.user?.displayName}</h6>
              </div>
            </div>
          </div>
        </div>
        <h4>favorites</h4>
      </div>
    </div>
  );
};

export default Profile;
