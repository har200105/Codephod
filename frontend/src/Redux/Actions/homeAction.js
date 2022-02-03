import axios from 'axios';
import {API} from '../../API';

export const getWorkshops = () => async (dispatch) => {
    try {
        dispatch({ type: 'GET_WORKSHOPS_REQ' });
        const { data } = await axios.get(API + "/getWorkshops");
        dispatch({ type: 'GET_WORKSHOPS_SUCCESS', payload: data });

    } catch (e) {
        dispatch({ type: 'GET_WORKSHOPS_FAIL', error: e });
    }
}

export const getOpportunities = () => async (dispatch) => {
    try {
        dispatch({ type: 'GET_OPPORTUNITIES_REQ' });
        const { data } = await axios.get("http://applykiya.herokuapp.com/getLink");
        dispatch({ type: 'GET_OPPORTUNITIES_SUCCESS', payload: data });

    } catch (e) {
        dispatch({ type: 'GET_OPPORTUNITIES_FAIL', error: e });
    }
}