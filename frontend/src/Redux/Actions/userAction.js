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
        const {data} =  await axios.get(API + "/getMyPosts",{
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

export const getUserProjects = (id) => async (dispatch) => {
    try{
        dispatch({type:'GET_USER_PROJECTS_REQ'});
        const {data} =  await axios.get(API + "/getUserProjects/" + id);
        dispatch({type:'GET_USER_PROJECTS_SUCCESS',payload:data});
    }catch(e){
        dispatch({type:'GET_USER_PROJECTS_FAIL',payload:e});
    }
}