import axios from 'axios';
import { API } from '../../API';

export const getUserById = (id) => async(dispatch) => {
    try{
        dispatch({type:'GET_USER_REQ',payload:data}); 
        const {data} =  await axios.get(API + "/getUser/:" + id)
        dispatch({type:'GET_USER_SUCCESS',payload:data});
    }catch(e){
        dispatch({type:'GET_USER_FAIL',payload:e});
    }
}

export const getMyPosts = () => async(dispatch) =>{
    try{
        dispatch({type:'GET_MY_POSTS_REQ'}); 
        const {data} =  await axios.get(API + "/api/getMyPosts",{
            headers:{
                "Authorization":localStorage.getItem("jwt")
            }
        });
        console.log(data)
        dispatch({type:'GET_MY_POSTS_SUCCESS',payload:data});
    }catch(e){
        dispatch({type:'GET_MY_POSTS_FAIL',payload:e});
    }
}

export const getMyQAs = () => async(dispatch) =>{
    try{
        dispatch({type:'GET_MY_QA_REQ'}); 
        const {data} =  await axios.get(API + "/api/getMyQA",{
            headers:{
                "Authorization":localStorage.getItem("jwt")
            }
        });
        console.log(data)
        dispatch({type:'GET_MY_QA_SUCCESS',payload:data});
    }catch(e){
        dispatch({type:'GET_MY_QA_FAIL',payload:e});
    }
}



export const getUserProjects = (id) => async (dispatch) => {
    try{
        dispatch({type:'GET_USER_PROJECTS_REQ'});
        const {data} =  await axios.get(API + "/getUserProjects/" + id);
        dispatch({type:'GET_USER_PROJECTS_SUCCESS',payload:data});
    }catch(e){
        dispatch({type:'GET_USER_PROJECTS_FAIL',payload:e});
    }
}

export const loadUser = () => async (dispatch) => {
    try {
    dispatch({
      type: "LOAD_USER_REQ",
    });
    const { data } = await axios.get(`${API}/api/user`, {
      headers: {
        "Authorization": localStorage.getItem("jwt")
      }
    });

    dispatch({
      type: "LOAD_USER_SUCCESS",
      payload: data,
    });
      
  } catch (error) {
    dispatch({
      type: "LOAD_USER_FAIL",
      payload: error,
    });
  }
};