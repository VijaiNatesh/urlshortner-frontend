import axios from 'axios'
import { CREATE_URL_REQUEST, CREATE_URL_SUCCESS, CREATE_URL_FAIL, FETCH_URL_REQUEST, FETCH_URL_SUCCESS, FETCH_URL_FAIL } from '../action';


export const createUrl = (longUrl) => {
    return async dispatch => {
        try {
            dispatch({
                type: CREATE_URL_REQUEST
            })
            const config = {
                headers: { 'Content-Type': 'application/json' }
            }
            const { data } = await axios.post("https://urlshortner-backend-vj.herokuapp.com/api/url",
                (longUrl),
                config)
            dispatch({
                type: CREATE_URL_SUCCESS,
                payload: data
            })
        }
        catch (error) {
            dispatch({
                type: CREATE_URL_FAIL,
                payload: error.response && error.response.data.message
            })

        }
    }
}

export const fetchUrl = () => {
    return async dispatch => {
        try {
            dispatch({
                type: FETCH_URL_REQUEST
            })
            const config = {
                headers: { 'Content-Type': 'application/json' }
            }
            const { data } = await axios.get("https://urlshortner-backend-vj.herokuapp.com/api/url/urllist",
                config)
            dispatch({
                type: FETCH_URL_SUCCESS,
                payload: data
            })
        }
        catch (error) {
            dispatch({
                type: FETCH_URL_FAIL,
                payload: error.response && error.response.data.message
            })

        }
    }
}


