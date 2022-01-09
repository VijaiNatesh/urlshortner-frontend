import axios from 'axios'
import { USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGIN_FAIL, USER_LOGOUT } from '../action';


export const loginUser = (userData) => {
    return async dispatch => {
        try {
            dispatch({
                type: USER_LOGIN_REQUEST
            })
            const config = {
                headers: { 'Content-Type': 'application/json' }
            }
            const { data } = await axios.post("https://urlshortner-backend-vj.herokuapp.com/api/user/login",
                (userData),
                config)
            dispatch({
                type: USER_LOGIN_SUCCESS,
                payload: data
            })
            localStorage.setItem('userAuthData', JSON.stringify(data));
        }
        catch (error) {
            dispatch({
                type: USER_LOGIN_FAIL,
                payload: error.response && error.response.data.message
            })
        }
    }
}

export const logoutUser = () => {
    return async dispatch => {
      localStorage.removeItem('userAuthData');
      try {
        dispatch({
          type: USER_LOGOUT,
        });
      } catch (error) {}
    };
  };