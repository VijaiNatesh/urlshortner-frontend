import { RESET_PASSWORD_REQUEST, RESET_PASSWORD_SUCCESS, RESET_PASSWORD_FAIL } from "../action";

export const resetpasswordReducer = (state = {}, action) => {
    switch(action.type){
    case RESET_PASSWORD_REQUEST:
    return {
        loading: true
    }
    case RESET_PASSWORD_SUCCESS:
    return{
        newPassword: action.payload
    }
    case RESET_PASSWORD_FAIL:
    return{
        loading: false,
        error: action.payload
    }
    default:
    return state
    }
}