import React, { useState } from 'react';
import './Projects.css';
import { Link } from 'react-router-dom';
import ThumbUpOutlinedIcon from "@material-ui/icons/ThumbUpOutlined";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";
import { ChatBubble, ThumbDownAltOutlined } from "@material-ui/icons";

const Projects = ({project}) => {
    console.log(project)
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
                        to={`/user/${project.postedBy._id}`}
                    >
                        <b
                            style={{
                                textStyle: "none",
                            }}
                        >
                            {project.postedBy.name} 
                           
                        </b>
                        
                    </Link>
                    
                     {project.PostType  === "Share" ? <p className='tx'> 
                                Shared New His New Project
                            </p> :<p className='tx'> 
                               &nbsp;  is Asking a Project Collaboration
                            </p> }

                </div>
                <div className="description">{project.caption} </div>
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
                    </button>
                    <button className="like">
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

export default Projects;
