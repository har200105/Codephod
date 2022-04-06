
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./CommentCard.css";
import { Delete,Reply } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { getProjectPosts, replyOnComment } from "../Redux/Actions/projectAction";
import { getMyPosts } from "../Redux/Actions/userAction";

const CommentCard = ({
  userId,
  name,
  comment,
  commentId,
  postId,
  replies
}) => {

  const [reply, setReply] = useState(false);
  const [comments, setComment] = useState("");
  const { user,isAuthenticated } = useSelector((state) => state.getUserReducer);
  const dispatch = useDispatch();

  const replyComment = async (e) => {
    e.preventDefault();
    dispatch(replyOnComment(postId, commentId, comments));
    setComment("");
    dispatch(getProjectPosts());
    dispatch(getMyPosts());
  }


  return (
    <>
      <div className="commentUser">
        <p style={{
            minWidth: "6vmax",fontWeight:"bold",color: "white"
          }}> Comments</p>
        <div>
          <p style={{fontWeight:"bold",color: "white",fontSize:"25px" }}>{name}</p>
        </div>
        <div>
        <p style={{
          color: "white",
          marginLeft: "15px",
          fontSize:"20px"
          }}>{comment}
      <button style={{color:"blue"}} onClick={()=>setReply(true)}>
        <Reply/>
      </button>
          </p>

      </div>
      </div>
      
      {
        reply && <form className="replyForm" onSubmit={replyComment}>
          <input
            className="cmtcard"
            type="text"
            placeholder="Comment Here..."
            required
            value={comments}
            style={{
              color:"black"
            }}
            onChange={(e) => setComment(e.target.value)}
            />
          <button type="submit" style={{
              marginLeft:"20px"
            }}>
              Reply
            </button>
          </form>
      }

      {
        <>
          
          {
            replies.length !== 0 &&
            <p style={{
              fontSize: "25px",
              color: "gray",
              marginLeft: "30px"
            }}>Replies</p>
          }


          {
            replies?.map((c) => (
              <div className="reply">
                  <p style={{fontSize:"25px",color:"white" , marginBottom: "20px",}}>{c?.repliedBy?.name}</p>
                <p style={{
                  color: "white",
                  fontSize: "20px",
                  marginTop: "30px",
                  float:"left"
                }}> {"-> " + c?.commentedText}</p>
              </div>
            ))
          }
        </>
      }



    </>
  );
};

export default CommentCard;
