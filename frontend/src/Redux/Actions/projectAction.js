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

export const addProjectPosts = (project) => async(dispatch) => {
    try{
        dispatch({ type: 'ADD_PROJECTS_REQ' });
        const {data} =  await axios.post(API + "/addProjectPost",project,{
            headers:{
                "Authorization":localStorage.getItem("jwt")
            }
        });
        dispatch({ type: 'ADD_PROJECTS_SUCCESS'});
    }catch(e){
        dispatch({ type: 'ADD_PROJECTS_FAIL', payload: e });   
    }
}