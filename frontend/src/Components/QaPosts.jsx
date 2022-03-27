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
import CommentCard from './CommentCard';


const QaPosts = ({ post,isDelete }) => {

  const dispatch = useDispatch();
  const { user ,isAuthenticated} = useSelector((state) => state.getUserReducer);
  const [commentValue, setCommentValue] = useState("");
  const [commentToggle, setCommentToggle] = useState(false);

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

  //   const addCommentHandler = async (e) => {
  //   e.preventDefault();
  //   dispatch(addCommentOnQA(project?._id, commentValue));
  // };

  const [show, setShow] = useState(false);

  return (
    <>
                  <div className="posts">
                <div className="title">
            <div style={{
                    width:"100%"
                  }}>
                        <b
                            style={{
                                textStyle: "none",
                            }}
                        >
                            {post.postedBy.name } 
                        </b>                        
              </div>
            
                 {
              isDelete && <div style={{
                float: "right !important",
                marginLeft:"20px",
                color:"red"
              }}> 
                <Delete onClick={() =>deletePost()}/>
                          </div>
                        }
          </div>
                <div className="description">{post.caption} </div>
                <div className="reaction">
            {isAuthenticated &&
              <button className="like">
                <ThumbUpOutlinedIcon
                  className="react-icon"
                  fontSize="large"
                  style={{ color: post.likes.includes(user?._id) ? "green" : "white" }}
                  onClick={() => post.likes.includes(user?._id) ? disLike(post?._id) :
                    likePost(post?._id)
                  }
                />
              </button>
            }
                    <button className='like' onClick={() => setCommentToggle(!commentToggle)}>
              {isAuthenticated && <ChatBubble
                className="react-icon"
                fontSize="large"
                style={{ color: "white" }}
              />
              }
                    </button>
                   <p style={{
                        float: "right !important",
                        fontSize: "30px",
                        marginLeft:"20%"
                    }}> 
                        {post?.likes?.length}
                    </p>
                </div>

       
        <div className="DialogBox">
          {/* <form className="commentForm" onSubmit={addCommentHandler}>
            <input
              type="text"
              value={commentValue}
              onChange={(e) => setCommentValue(e.target.value)}
              placeholder="Comment Here..."
              required
                style={{
                  color: "black",
                  fontSize:"20px"  
              }}
            />
              <button type="submit" style={{
              marginLeft:"20px"
            }}>
              Comment
            </button>
          </form> */}
            {post?.comments?.length > 0 ? (
            post?.comments?.map((item) => (
              <CommentCard
                userId={item.user._id}
                name={item.user.name}
                comment={item.commentedText}
                commentId={item._id}
                key={item._id}
                postId={post._id}
                replies={item.replies}
              />
            ))
          ) : (
            <p>No comments Yet</p>
            )}
          </div>
                  </div>
    </>
  );
};

export default QaPosts;
