import React from 'react';
import './QAPost.css';
import { ChatBubble, ThumbDownAltOutlined } from "@material-ui/icons";
import { Link } from 'react-router-dom';
import "@material-tailwind/react/tailwind.css";
import ThumbUpOutlinedIcon from "@material-ui/icons/ThumbUpOutlined";
import { useState } from 'react';

const Userposts = ({post}) => {

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
          {/* <div style={{
            display: "flex !important",
            flexDirection: "row !important"
          }}> */}
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
          {/* </div> */}
        </div>
        <div className="description">{post.caption}</div>
        <div
          className="reaction"
        >
          {/* <button className="like">
            <ThumbUpIcon
              className="react-icon"
              fontSize="large"
              style={{ color: "#2DFF5E" }}
            />
          </button> */}
          <button className="like">
            <ThumbUpOutlinedIcon
              className="react-icon"
              fontSize="large"
              style={{ color: "white" }}
            />
              <ThumbDownAltOutlined
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

export default Userposts;
