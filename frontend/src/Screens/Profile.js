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
          src={"https://cdn3.iconfinder.com/data/icons/web-and-seo-11-1/65/549-512.png"
          }
          style={{ height: "250px", width: "250px" }}
          alt=""
        />
        <div>{user?.name}</div>
        <div>{user?.email}</div>

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

      </div>
    </>
  );
};

export default Profile;
