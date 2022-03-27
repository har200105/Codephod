import React, { useState } from 'react';
import './Projects.css';
import { Link } from 'react-router-dom';
import ThumbUpOutlinedIcon from "@material-ui/icons/ThumbUpOutlined";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";
import { ChatBubble, Delete, ThumbDownAltOutlined } from "@material-ui/icons";
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { addCommentOnProject, deleteProjectPost, getProjectPosts } from '../Redux/Actions/projectAction';
import { API } from '../API';
import CommentCard from './CommentCard';
const Projects = ({ project, isDelete }) => {


    
  const { user,isAuthenticated } = useSelector((state) => state.getUserReducer);
  const [commentValue, setCommentValue] = useState("");
  const dispatch = useDispatch();
  const [commentToggle, setCommentToggle] = useState(false);
  
  
  
  const addCommentHandler = async (e) => {
    e.preventDefault();
    dispatch(addCommentOnProject(project?._id, commentValue));
  };

      const likePost = async (id) => {
    const post = await axios.put(API + `/likeProject/${id}`, {
      
    }, {
      headers: {
         "Authorization":localStorage.getItem("jwt")
      }
    });
    if (post.data.success) {
      dispatch(getProjectPosts());
    }
  }

  const disLike = async (id) => {
    const post = await axios.put(API + `/dislikeProject/${id}`, {
    }, {
      headers: {
          "Authorization":localStorage.getItem("jwt")
       }
     });
    if (post.data.success) {
      dispatch(getProjectPosts());
    }
  }


  const deletePost = async () => {
    dispatch(deleteProjectPost(project?._id));
     dispatch(getProjectPosts());
  }

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
                            {project.postedBy.name } 
                        </b>                        
                     {project?.PostType  === "Share" ? <p className='tx'> 
                                 &nbsp;  Shared New His New Project
                            </p> :<p className='tx'> 
                  &nbsp;  is Asking a Project Collaboration
                  
              </p>
              }
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
          {
              project?.image &&
              <div style={{
              
              }}>
              <img src={project?.image} alt="" style={{
                width: "25%",
                height: "25%",
                  marginTop: "20px",
                    marginLeft:"15%"
              }}/>
                </div>
            }
                <div className="description">{project.caption} </div>
                <div className="reaction">
            {isAuthenticated &&
              <button className="like">
                <ThumbUpOutlinedIcon
                  className="react-icon"
                  fontSize="large"
                  style={{ color: project.likes.includes(user?._id) ? "green" : "white" }}
                  onClick={() => project.likes.includes(user?._id) ? disLike(project?._id) :
                    likePost(project?._id)
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
                        {project?.likes?.length}
                    </p>
                </div>

       
        <div className="DialogBox">
          <form className="commentForm" onSubmit={addCommentHandler}>
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
          </form>
            {project?.comments?.length > 0 ? (
            project?.comments?.map((item) => (
              <CommentCard
                userId={item.user._id}
                name={item.user.name}
                comment={item.commentedText}
                commentId={item._id}
                key={item._id}
                postId={project._id}
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

export default Projects;
