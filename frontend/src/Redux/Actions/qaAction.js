import axios from 'axios';
import { API } from '../../API';


export const getQAPosts = () => async (dispatch) => {
    try {
        dispatch({ type: 'GET_QA_REQ' });
        const { data } = await axios.get(API + "/getQA");
        dispatch({ type: 'GET_QA_SUCCESS', payload: data });
    } catch (e) {
        dispatch({ type: 'GET_QA_FAIL', payload: e });
    }
}

export const addQAPosts = (ques) => async(dispatch) => {
    try{
        dispatch({ type: 'ADD_QA_REQ' });
        const {data} =  await axios.post(API + "/addQA",{ques},{
            headers:{
              "Authorization":localStorage.getItem("jwt")
            }
        });
        dispatch({ type: 'ADD_QA_SUCCESS'});
    }catch(e){
        dispatch({ type: 'ADD_QA_FAIL', payload: e });   
    }
}



export const deleteQAPost = (id) => async(dispatch) => {
    try{
        dispatch({ type: 'DELETE_QA_REQ' });
        const {data} =  await axios.delete(API + `/deleteQA/${id}`,{
            headers:{
              "Authorization":localStorage.getItem("jwt")
            }
        });
        dispatch({ type: 'DELETE_QA_SUCCESS'});
    }catch(e){
        dispatch({ type: 'DELETE_QA_FAIL', payload: e });   
    }
}