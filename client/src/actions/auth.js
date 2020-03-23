import axios from 'axios'
import {REGISTER_SUCCESS, REGISTER_FAIL, USER_LOADED, AUTH_ERROR} from './types';
//we need to import alert actions here to use it for errors
import {setAlert} from './alert'
import setAuthToken from '../utils/setAuthToken'

//Load User
export const loadUser = () => async dispatch => {
    //if we have JWT token 
    if(localStorage.token){
        setAuthToken(localStorage.token)
    }
    //we make request
    try {
        const res = await axios.get('http://localhost:5050/api/auth')
        dispatch({
            type: USER_LOADED,
            payload: res.data
        })
    } catch(err){
        dispatch({
            type: AUTH_ERROR
        })
    }
}



//Register user
export const register = ({name, email, password}) => async dispatch => {
    // do the same like i tried from register component
    const config = {
        headers: {
            'Content-Type' : 'application/json'
        }
    }
    const body = JSON.stringify({name, email, password})
    try{
        const res = await axios.post('http://localhost:5050/api/users', body, config);
        dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data,
        })
    } catch(err){
        const errors = err.response.data.errors;
        if(errors){
            errors.forEach(error => dispatch(setAlert(error.msg, 'danger')))
        }
        dispatch({
            type: REGISTER_FAIL
        });
    }
}