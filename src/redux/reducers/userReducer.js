import initialState from "../store/initialState";
import * as userActionTypes from "../actions/types/userActionTypes";

export default (state = initialState.user, action) => {
  switch (action.type) {
    case userActionTypes.SIGN_UP:
      return {
        ...state,
        ...action.payload,
        error: {},
        isSignedUp: true,
        logged: true,
      };
    case userActionTypes.SIGNUP_ERROR:
      return {
        ...state,
        isSignedUp: false,
        error: action.payload,
        message: "",
        status: '',
        logged: false,
      };
    case userActionTypes.LOGIN:
    return{
      ...state,
      ...action.payload,
      isSignedUp: true,
      logged: true,
      error: {},
    };
    case userActionTypes.LOGIN_ERROR:{
      return{
        ...state,
        isSignedUp: false,
        error: action.payload,
        message: "",
        status: '',
        logged: false,
      }
    }
    default:
      return state;
  }
};
