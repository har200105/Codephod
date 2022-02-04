import React from 'react';
import { Link } from 'react-router-dom';
import "@material-tailwind/react/tailwind.css";
import ThumbUpOutlinedIcon from "@material-ui/icons/ThumbUpOutlined";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";
import { ChatBubble, ThumbDownAltOutlined } from "@material-ui/icons";
import './QAPost.css';
import { useState } from 'react';
import { useEffect } from 'react';


const QaPosts = () => {
  
  const [show, setShow] = useState(false);

  return (
    <>
      <div className="posts">
        <div className="title">

          <img
            className="profile_pic"
            src={"https://res.cloudinary.com/harshit111/image/upload/v1627476264/fqnrpqlujucrotiazxvc.png"
            }
            style={{
              height: "50px",
              width: "50",
              borderRadius: "40px",
              margin: "10px",
            }}
            alt=""
          />

          <Link
            style={{
              textStyle: "none",
              textDecoration: "none",
              color: "white",
            }}
            to={`/user/`}
          >
            <b
              style={{
                textStyle: "none",
              }}
            >
              jewbf
            </b>
          </Link>
        </div>
        <div className="description">dqfqef</div>
        <div
          className="reaction"
        >
          <button className="like">
            <ThumbUpIcon
              className="react-icon"
              fontSize="large"
              style={{ color: "#2DFF5E" }}
            />
          </button>
          <button className="like">
            <ThumbUpOutlinedIcon
              className="react-icon"
              fontSize="large"
              style={{ color: "white" }}
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

export default QaPosts;
