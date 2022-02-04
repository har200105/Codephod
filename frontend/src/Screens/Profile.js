import React, { useContext } from 'react';
import './Profile.css';
import Button from "@material-tailwind/react/Button";
import {Context} from '../Context/AuthContext';
import {useNavigate} from 'react-router-dom';

const Profile = () => {

  const {user,dispatch} = useContext(Context);
  const navigate = useNavigate();

  const logout = () => {
      dispatch({type:"LOGOUT"});
      navigate("/");
      // window.location.reload();
  }

  return (
      <>
        <div
          className="profile_sidebar"
          style={{
            height: "80vh",
          }}
        >
          <img
            className="profile_pic pp"
            src={"https://res.cloudinary.com/harshit111/image/upload/v1627476410/q1rjnignh5djpnujltyy.png"
            }
            style={{ height: "250px", width: "250px" }}
            alt=""
          />
          <div>Harshit</div>
          <div>Harshit</div>
          <div> Posts : 5</div>
          <div> Projects : 5</div>
          <button className="edits">Edit Profile</button>
          <div>
          <span>0 Followers</span>
          </div>
          <div>
          <span>0 Following</span>
          </div>
          <button className="edits" onClick={logout} >Logout</button>
          {/* <button className="follows" >Follow</button>
          <button className="blocks" >Block</button> */}

        </div>
      </>
  );
};

export default Profile;
