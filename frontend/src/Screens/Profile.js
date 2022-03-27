import React, { useContext, useEffect } from 'react';
import './Profile.css';
import Button from "@material-tailwind/react/Button";
import { Context } from '../Context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getMyPosts, getMyQAs } from '../Redux/Actions/userAction';
import Userposts from '../Components/Userposts';
import Projects from '../Components/Projects';
import QaPosts from '../Components/QaPosts';

const Profile = () => {

  const { user } = useSelector((state) => state.getUserReducer);
  const navigate = useNavigate();

  const { posts, loading, error } = useSelector((state) => state.getMyPostsReducer);
  const { qa } = useSelector((state) => state.getMyQAReducer);

  const dispatch = useDispatch();

  const logout = () => {
    // dispatchs({ type: "LOGOUT" });
    navigate("/");
  }

  useEffect(() => {
    dispatch(getMyPosts());
    dispatch(getMyQAs());
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
          posts?.length !==0  && 

        <h1 style={{
          marginTop: "20px",
          fontSize:"50px"
        }}>Your Projects Posts</h1>
              }
        {
          posts?.map((p) => (
            <Projects project={p} isDelete={true} />
          ))
        }

        {/* {
          qa?.length !==  0 && 
         <h1 style={{
          marginTop: "20px",
          fontSize:"50px"
        }}>Your QA Posts</h1>
        }
           {
          qa?.map((q) => (
            <QaPosts post = {q}  isDelete={true} />
          ))
        } */}


      </div>
    </>
  );
};

export default Profile;
