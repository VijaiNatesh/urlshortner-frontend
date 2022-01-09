import { CREATE_TOKEN_REQUEST, CREATE_TOKEN_SUCCESS, CREATE_TOKEN_FAIL } from "../action";

export const forgotpasswordReducer = (state = {}, action) => {
    switch(action.type){
        case CREATE_TOKEN_REQUEST:
        return{
            loading: true
        }
        case CREATE_TOKEN_SUCCESS:
        return{
            tokenInfo: action.payload
        }
        case CREATE_TOKEN_FAIL:
        return{
            loading: false,
            error: action.payload
        }
        default:
        return state
    }
}