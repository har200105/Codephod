import React, { useContext, useEffect } from 'react';
import './Profile.css';
import Button from "@material-tailwind/react/Button";
import { Context } from '../Context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getMyPosts } from '../Redux/Actions/userAction';
import Projects from '../Components/Projects';
import Userposts from '../Components/Userposts';

const Profile = () => {

  const { user, dispatch:dispatchs } = useContext(Context);
  const navigate = useNavigate();

  const { posts, loading, error } = useSelector((state) => state.getMyPostsReducer);

  const dispatch = useDispatch();

  const logout = () => {
    dispatchs({ type: "LOGOUT" });
    navigate("/");
  }

  useEffect(() => {
    dispatch(getMyPosts());
  }, [dispatch]);

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
        <div>{user?.name}</div>
        <div>{user?.email}</div>
        <div> Level : 5</div>
        <button className="edits">Edit Profile</button>
        <div>
          <span>0 Followers</span>
        </div>
        <div>
          <span>0 Following</span>
        </div>
        <button className="edits" onClick={logout} >Logout</button>

        {
          posts?.length === 0 && <div style={{
            justifyContent: "center"
          }}>
            <h1 style={{
              textAlign: "center",
              fontSize: "20px"
            }}>No Posts Available</h1>
          </div>
        }

        {
          posts.map((p) => (
            <Userposts post={p}/>
          ))
        }

      </div>
    </>
  );
};

export default Profile;
