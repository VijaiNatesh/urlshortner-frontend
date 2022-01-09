import axios from 'axios'
import { CREATE_USER_REQUEST, CREATE_USER_SUCCESS, CREATE_USER_FAIL } from '../action';

export const createUser = (userData) => {
    return async dispatch => {
        try {
            dispatch({
                type: CREATE_USER_REQUEST
            })
            const config = {
                headers: { 'Content-Type': 'application/json' }
            }
            const { data } = await axios.post("https://urlshortner-backend-vj.herokuapp.com/api/user/register",
                (userData),
                config)
            dispatch({
                type: CREATE_USER_SUCCESS,
                payload: data
            })
        }
        catch (error) {
            dispatch({
                type: CREATE_USER_FAIL,
                payload: error.response && error.response.data.message
            })
        }
    }
}