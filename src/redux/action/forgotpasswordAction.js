import axios from 'axios'
import { CREATE_TOKEN_REQUEST, CREATE_TOKEN_SUCCESS, CREATE_TOKEN_FAIL } from '../action';

export const createToken = (emailData) => {
    return async dispatch => {
        try {
            dispatch({
                type: CREATE_TOKEN_REQUEST
            })
            const config = {
                headers: { 'Content-Type': 'application/json' }
            }
            const { data } = await axios.post("https://urlshortner-backend-vj.herokuapp.com/api/passwordreset",
                (emailData),
                config)
            dispatch({
                type: CREATE_TOKEN_SUCCESS,
                payload: data
            })
        }
        catch (error) {
            dispatch({
                type: CREATE_TOKEN_FAIL,
                payload: error.response && error.response.data.message
            })

        }
    }
}