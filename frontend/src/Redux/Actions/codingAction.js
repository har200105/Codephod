import axios from 'axios';
import { API } from '../../API';


export const getCodingQuestions = () => async (dispatch) => {
    try {
        dispatch({ type: 'GET_CODING_REQ' });
        const { data } = await axios.get(API + "/getQuestion");
        dispatch({ type: 'GET_CODING_SUCCESS', payload: data });
    } catch (e) {
        dispatch({ type: 'GET_CODING_FAIL', payload: e });
    }
}

export const addCodingQuestions = (coding) => async (dispatch) => {
    try {
        dispatch({ type: 'ADD_CODING_REQ' });
        const { data } = await axios.post(API + "/addQuestion", coding , {
            headers: {
                "Authorization": localStorage.getItem("jwt")
            }
        });
        dispatch({ type: 'ADD_CODING_SUCCESS',payload:data.isAdded });
    } catch (e) {
        dispatch({ type: 'ADD_CODING_FAIL', payload: e });
    }
}