import initialState from "../store/initialState";
import * as userActionTypes from "../actions/types/userActionTypes";

export default (state = initialState.user, action) => {
  switch (action.type) {
    case userActionTypes.SIGN_UP:
      return {
        ...state,
        ...action.payload,
        error: {},
        isSignedUp: true
      };
    case userActionTypes.SIGNUP_ERROR:
      return {
        ...state,
        isSignedUp: false,
        error: action.payload,
        message: "",
        status: ''
      };
    default:
      return state;
  }
};
