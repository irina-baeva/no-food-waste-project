import {REGISTER_SUCCESS, REGISTER_FAIL, USER_LOADED, AUTH_ERROR} from '../actions/types';


const initialState = [{
    //we store token in Local storage and access it with js
    token: localStorage.getItem("token"),
    isAuthentificated: null,
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
                isAuthentificated: true,
                loading:false,
                user: payload
            }
        case REGISTER_SUCCESS:
            localStorage.setItem('token', payload.token);
            return {
                ...state,
                ...payload,
                isAuthentificated: true,
                loading: false
            }
        case REGISTER_FAIL:
        case AUTH_ERROR:
            //if registration fail we have to remove all from local storage
            localStorage.removeItem('token');
            return {
                ...state,
                token: null,
                isAuthentificated: false,
                loading: false
            }
        default:
            return state;
    }  
}