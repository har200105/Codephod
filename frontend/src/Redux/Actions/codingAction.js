import axios from 'axios';
import { API } from '../../API';


export const getCodingQuestions = () => async (dispatch) => {
    try {
        dispatch({ type: 'GET_CODING_REQ' });
        const { data } = await axios.get(API + "/getCoding");
        dispatch({ type: 'GET_CODING_SUCCESS', payload: data });
    } catch (e) {
        dispatch({ type: 'GET_CODING_FAIL', payload: e });
    }
}

export const addCodingQuestions = () => async(dispatch) => {
    try{
        dispatch({ type: 'ADD_CODING_REQ' });
        const {data} =  await axios.get(API + "/addCoding");
        dispatch({ type: 'ADD_CODING_SUCCESS'});
    }catch(e){
        dispatch({ type: 'ADD_CODING_FAIL', payload: e });   
    }
}