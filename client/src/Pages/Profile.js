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
        <div class="row">
          <div class="col s12 m4 l4">
            <div class="card">
              {/* <div class="card-image">
                <img src="https://via.placeholder.com/150" />
              </div> */}
              <div class="card-content">
                <h4>{userData.user?.displayName}</h4>
                <h6>Hometown:</h6>
                <h6>About Me:</h6>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div class="col s12">
            <CardProfile />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
