import { authAPI } from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    
    id : null,
    email : null,
    login : null,
    isAuth: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        } 
        default : {return state}
    }

}


export const setAuthUserDataActionCreator = (data) => {
    return { type: SET_USER_DATA, data }
  }

export const getAuthUserDataThunkCreator = () => (dispatch) => {
    return authAPI.me().then((response) => {
        if(response.data.resultCode === 0){
            dispatch(setAuthUserDataActionCreator(response.data.data))
        }
    });
}
  
  export default authReducer;
  