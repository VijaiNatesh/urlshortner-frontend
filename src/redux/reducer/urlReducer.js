import { CREATE_URL_REQUEST, CREATE_URL_SUCCESS, CREATE_URL_FAIL, FETCH_URL_REQUEST, FETCH_URL_SUCCESS, FETCH_URL_FAIL} from "../action";

export const urlReducer = (state = {}, action) => {
    switch(action.type){
        case CREATE_URL_REQUEST:
        return{
            loading: true
        }
        case CREATE_URL_SUCCESS:
        return{
            urlInfo: action.payload
        }
        case CREATE_URL_FAIL:
        return{
            loading: false,
            error: action.payload
        }
        case FETCH_URL_REQUEST:
        return{
            loading: true
        }
        case FETCH_URL_SUCCESS:
        return{
            urlDetails: action.payload
        }
        case FETCH_URL_FAIL:
        return{
            loading: false,
            error: action.payload
        }       
        default:
        return state
    }
}