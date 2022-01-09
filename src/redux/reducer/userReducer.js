import { CREATE_USER_REQUEST, CREATE_USER_SUCCESS, CREATE_USER_FAIL } from "../action";

export const userReducer = (state ={}, action) => {
    switch(action.type){
        case CREATE_USER_REQUEST:
        return{
            loading: true
        }
        case CREATE_USER_SUCCESS:
        return{
            userInfo: action.payload
        }
        case CREATE_USER_FAIL:
        return{          
            loading: false,
            error: action.payload
        }
        default:
        return state
    }
}