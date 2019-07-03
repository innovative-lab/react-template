import axios from 'axios';
import * as actionTypes from './actionTypes';
// import { browserHistory } from 'react-router';


export const signupStart = () =>{
   
    return {
        type:actionTypes.SIGN_UP_START,
    };
};
export const signupSuccess = (token,userId) =>{
    return {
        
        type: actionTypes.SIGN_UP_SUCCESS,
        idToken: token,
        userId: userId
    };
};

export const signupFail = (error) =>{
    return {
        type:actionTypes.SIGN_UP_FAIL,
        error:error
    };
};

export const signup = (email,password) =>{
return dispatch =>{
    dispatch(signupStart());
    
}
}