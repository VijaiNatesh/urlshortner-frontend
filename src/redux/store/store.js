import {createStore, combineReducers, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import {composeWithDevTools} from "redux-devtools-extension"
import { userReducer } from "../reducer/userReducer";
import { forgotpasswordReducer } from "../reducer/forgotpasswordReducer";
import { resetpasswordReducer } from "../reducer/resetpasswordReducer";
import { loginReducer } from "../reducer/loginReducer";
import { urlReducer } from "../reducer/urlReducer";



const middleware = [thunk]



const reducer = combineReducers({
  user: userReducer,
  token: forgotpasswordReducer, 
  resetPassword: resetpasswordReducer,
  login: loginReducer,
  url: urlReducer
})

const userAuthFromStorage = localStorage.getItem('userAuthData')
  ? JSON.parse(localStorage.getItem('userAuthData'))
  : null;

const initialState = {
  login: { userLogin: userAuthFromStorage },
};

const store = createStore(
    reducer,   
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)


export default store