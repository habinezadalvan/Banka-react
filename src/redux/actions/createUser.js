import axios from "axios";
import * as userActionTypes from "./types/userActionTypes";

const {BASE_URL} = process.env;

export default formData => dispatch => {
  axios
    .post(`${BASE_URL}/api/v2/auth/signup`, formData)
    .then(res => {
      dispatch({
        type: userActionTypes.SIGN_UP,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({
        type: userActionTypes.SIGNUP_ERROR,
        payload: err.response.data
      })
    });
};
