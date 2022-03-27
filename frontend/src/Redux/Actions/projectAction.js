import axios from 'axios';
import { API } from '../../API';


export const getProjectPosts = () => async (dispatch) => {
    try {
        dispatch({ type: 'GET_PROJECTS_REQ' });
        const { data } = await axios.get(API + "/getProjectPosts");
        dispatch({ type: 'GET_PROJECTS_SUCCESS', payload: data });
    } catch (e) {
        dispatch({ type: 'GET_PROJECTS_FAIL', payload: e });
    }
}

export const addProjectPosts = (project) => async (dispatch) => {
    try {
        dispatch({ type: 'ADD_PROJECTS_REQ' });
        const { data } = await axios.post(API + "/addProjectPost", project, {
            headers: {
                "Authorization": localStorage.getItem("jwt")
            }
        });
        dispatch({ type: 'ADD_PROJECTS_SUCCESS',payload:data });
    } catch (e) {
        dispatch({ type: 'ADD_PROJECTS_FAIL', payload: e });
    }
}

// export const getMyProjects = () => async (dispatch) => {
    
//     try {

//         dispatch({ type: 'GET_MY_PROJECTS_REQ' });

//         const { data } = await axios.get(API + "/getMyProjects", {
//             headers: {
//                 "Authorization": localStorage.getItem("jwt")
//             }
//         });

//         dispatch({ type: 'GET_MY_PROJECTS_SUCCESS', payload: data });

//     } catch (e) {
//         dispatch({ type: 'GET_MY_PROJECTS_FAIL', payload: e });
//     }
// }






export const addCommentOnProject = (id, comment) => async (dispatch) => {
  try {
    dispatch({
      type: "ADD_COMMENT_PROJECT_REQ",
    });

    const { data } = await axios.put(
      `${API}/project/comment/${id}`,
      {
        comment,
      },
      {
        headers: {
          "Content-Type": "application/json",
          "Authorization" : localStorage.getItem("jwt")
        },
      }
    );
    dispatch({
      type: "ADD_COMMENT_PROJECT_SUCCESS",
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: "ADD_COMMENT_PROJECT_FAIL",
      payload: error,
    });
  }
};


export const replyOnComment = (id, commentId, reply) => async (dispatch) => {
  try {
    dispatch({
      type: "REPLY_PROJECT_COMMENT_REQUEST",
    });
    const { data } = await axios.put(`${API}/project/comment/reply/${id}`, {
      commentId ,comment:reply,
    },{
      headers: {
        "Authorization": localStorage.getItem("jwt")
      }
    });
    dispatch({
      type: "REPLY_PROJECT_COMMENT_SUCCESS",
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: "REPLY_PROJECT_COMMENT_FAIL",
      payload: error,
    });
  }
}

export const deleteProjectPost = (id) => async(dispatch) => {
    try{
        dispatch({ type: 'DELETE_QA_REQ' });
        const {data} =  await axios.delete(API + `/deleteProject/${id}`,{
            headers:{
              "Authorization":localStorage.getItem("jwt")
            }
        });
        dispatch({ type: 'DELETE_QA_SUCCESS'});
    }catch(e){
        dispatch({ type: 'DELETE_QA_FAIL', payload: e });   
    }
}