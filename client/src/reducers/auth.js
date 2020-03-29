import {
    REGISTER_SUCCESS,
    REGISTER_FAIL, 
    USER_LOADED, 
    AUTH_ERROR, 
    LOGIN_SUCCESS, 
    LOGIN_FAIL,
    LOGOUT,
} from '../actions/types';


const initialState = [{
    //we store token in Local storage and access it with js
    token: localStorage.getItem("token"),
    isAuthenticated: null,
    //when we are waiting for rsponse
    loading: true,
    user: null
}]


export default function(state = initialState, action){
    const { type, payload} = action
    switch(type){
        case USER_LOADED:
            return {
                ...state,
                isAuthenticated: true,
                loading:false,
                user: payload
            }
        case REGISTER_SUCCESS:
        case LOGIN_SUCCESS:
            localStorage.setItem('token', payload.token);
            return {
                ...state,
                ...payload,
                isAuthenticated: true,
                loading: false
            }
        case REGISTER_FAIL:
        case AUTH_ERROR:
        case LOGIN_FAIL:
        case LOGOUT:
            //if registration fail we have to remove all from local storage
            localStorage.removeItem('token');
            return {
                ...state,
                token: null,
                isAuthenticated: false,
                loading: false
            }
        default:
            return state;
    }  
}