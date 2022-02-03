import React,{useState} from 'react';
import './Projects.css';
import { Link } from 'react-router-dom';
import ThumbUpOutlinedIcon from "@material-ui/icons/ThumbUpOutlined";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";
import { ChatBubble, ThumbDownAltOutlined } from "@material-ui/icons";

const Projects = () => {
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
                            kcbhbhcbhcbhc
                            {/* {props.postedBy.name} */}
                        </b>
                    </Link>
                    {/* {props.postedBy._id !== current._id ? (
   <ReportIcon
     style={{
       float: "right",
       color: "red",
       cursor: "pointer",
     }}
     // onClick={() => addToAdmin(props.id.toString())}
   />
 ) : (
   <DeleteOutlinedIcon
     style={{
       float: "right",
       color: "red",
       cursor: "pointer",
     }}
     // onClick={() => deletePost(props.id.toString())}
   />
 )} */}
                </div>
                <div className="description">dqfqef</div>
                {/* {props.photo && <img className="pics" src={props.photo} alt="" />} */}

                {/* {props.hasbeenCommented ? (
 <Answer commentedBy={props.commentedBy} replies={props.comments} />
) : (
 ""
)} */}
                <div
                    className="reaction"
                //style={{ background: "#777" }}
                >
                    {/* {props.likes.includes(current._id) ? ( */}
                    <button className="like">
                        <ThumbUpIcon
                            //   onClick={() => takeBackLike(props.id.toString())}
                            className="react-icon"
                            fontSize="large"
                            style={{ color: "#2DFF5E" }}
                        />
                    </button>
                    {/* ) : ( */}
                    <button className="like">
                        <ThumbUpOutlinedIcon
                            //   onClick={() => likePost(props.id.toString())}
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
                    {/* )} */}
                    {/* {props.dislikes.includes(current._id) ? ( */}
                    {/* )} */}
                    <button className="answer">
                        {/* {
     !current.isAdmin ? <DeleteOutlinedIcon/> : <div>s</div>
   } */}
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
