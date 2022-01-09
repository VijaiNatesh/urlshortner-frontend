import axios from 'axios'
import { RESET_PASSWORD_REQUEST, RESET_PASSWORD_SUCCESS, RESET_PASSWORD_FAIL } from '../action';

export const resetPassword = (password, userId, token) => {
    return async dispatch => {       
        try {
            dispatch({
                type: RESET_PASSWORD_REQUEST
            })
            const config = {
                headers: { 'Content-Type': 'application/json' }
            }
            const { data } = await axios.post(`https://urlshortner-backend-vj.herokuapp.com/api/passwordreset/${userId}/${token}`,
                {password},
                config)
            dispatch({
                type: RESET_PASSWORD_SUCCESS,
                payload: data
            })
        }
        catch (error) {
            dispatch({
                type: RESET_PASSWORD_FAIL,
                payload: error.response && error.response.data.message
            })

        }
    }
}