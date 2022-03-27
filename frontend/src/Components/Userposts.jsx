import React from 'react';
import './QAPost.css';
import { ChatBubble, ThumbDownAltOutlined } from "@material-ui/icons";
import { Link } from 'react-router-dom';
import "@material-tailwind/react/tailwind.css";
import ThumbUpOutlinedIcon from "@material-ui/icons/ThumbUpOutlined";
import { useState } from 'react';

const Userposts = ({post}) => {

  const [show, setShow] = useState(false);
  const likePost = async (id) => {
    
  }

  const disLike = async (id) => {
    
  }
    
  return (
      <>
         <div className="posts">
        <div className="title">
            <Link
              style={{
                textStyle: "none",
                textDecoration: "none",
                color: "white",
              }}
              to={`/user/${post.postedBy._id}`}
            >
              <b
                style={{
                  textStyle: "none",
                }}
              >
                {post.postedBy.name}
              </b>
            </Link>
        </div>
        <div className="description">{post.caption}</div>
        <div
          className="reaction"
        >
          <button className="like">
            <ThumbUpOutlinedIcon
              className="react-icon"
              fontSize="large"
              style={{ color: "white" }}
              onClick={()=>likePost(post._id)}
            />
              <ThumbDownAltOutlined
              className="react-icon"
              fontSize="large"
              style={{ color: "white" }}
              onClick={()=>disLike(post._id)}
            />
          </button>
          <button className='like' onClick={() => setShow(true)}>
            <ChatBubble
              className="react-icon"
              fontSize="large"
              style={{ color: "white" }}
            />
          </button>
          <button className="answer">
          </button>
        </div>
        {
          show &&
          <input className='answers' placeholder='Write your views' />
        }
      </div>
      </>
  );
};

export default Userposts;
