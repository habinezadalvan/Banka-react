import axios from "axios";
import * as userActionTypes from "./types/userActionTypes";
import { toast } from "react-toastify";

const signUpActionCreatorSuccess = data => {
  return {
    type: userActionTypes.SIGN_UP,
    payload: data
  };
};
const signUpActionCreatorError = error => {
  return {
    type: userActionTypes.SIGNUP_ERROR,
    payload: error
  };
};
export default formData => dispatch =>
  fetch("https://banka-react250.herokuapp.com/api/v2/auth/signup", {
    method: "POST",
    headers: {
      "Content-type": "application/json"
    },
    body: JSON.stringify(formData)
  })
    .then(res => res.json(res))
    .then(data => {
      if (data.status === 201) {
        toast.success(data.message);
        return dispatch(signUpActionCreatorSuccess(data));
      } else {
        toast.error(data.message);
        return dispatch(signUpActionCreatorError(data));
      }
    });
