import React from 'react';
import "@material-tailwind/react/tailwind.css";
import ThumbUpOutlinedIcon from "@material-ui/icons/ThumbUpOutlined";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";
import { ChatBubble, Delete, ThumbDownAltOutlined } from "@material-ui/icons";
import './QAPost.css';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { deleteQAPost, getQAPosts } from '../Redux/Actions/qaAction';
import { API } from '../API';
import { Link } from 'react-router-dom';


const QaPosts = ({ post,isDelete }) => {

  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.getUserReducer);

  const likePost = async (id) => {
    const post = await axios.put(API + `/likeQA/${id}`, {
      
    }, {
      headers: {
         "Authorization":localStorage.getItem("jwt")
      }
    });
    if (post.data.success) {
      dispatch(getQAPosts());
    }
  }

  const deletePost = async () => {
    dispatch(deleteQAPost(post?._id));
        dispatch(getQAPosts());
  }

  const disLike = async (id) => {
    const post = await axios.put(API + `/dislikeQA/${id}`, {
       
    }, {
      headers: {
          "Authorization":localStorage.getItem("jwt")
       }
     });
    if (post.data.success) {
      dispatch(getQAPosts());
    }
  }

  const [show, setShow] = useState(false);

  return (
    <>
      <div className="posts">
        <div  className='title'>
        <div className="title">
              <b
                style={{
                  textStyle: "none",
                }}
              >
                {post?.postedBy?.name}
              </b>
          </div>
         {
              isDelete && <div style={{
                float: "right !important",
                marginLeft:"20px",
                color:"red"
              }}> 
              <Delete onClick={()=>deletePost()} />
              </div>
          }
          </div>
        <div className="description">{post.caption}</div>
        <div
          className="reaction"
        >
          <button className="like">
            <ThumbUpOutlinedIcon
              className="react-icon"
              fontSize="large"
              style={{ color: post.likes.includes(user?._id) ? "green":"white" }}
              onClick={() => post.likes.includes(user?._id) ? disLike(post?._id) :
                likePost(post?._id)}
            />
          </button>
          <button className='like' onClick={() => setShow(true)}>
            <ChatBubble
              className="react-icon"
              fontSize="large"
              style={{ color: "white" }}
            />
          </button>
          <p style={{
            float: "right !important",
            fontSize: "30px",
            marginLeft:"20%"
          }}> 
            {post?.likes?.length}
          </p>
        </div>
        {
          show &&
          <input className='answers' placeholder='Write your views' />
        }
      </div>
    </>
  );
};

export default QaPosts;
