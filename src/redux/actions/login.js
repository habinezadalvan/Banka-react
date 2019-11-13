import axios from "axios";
import { toast } from "react-toastify";
import * as userActionTypes from "./types/userActionTypes";

export const logginSuccess = res => {
  toast.success(res.message);
  return {
    type: userActionTypes.LOGIN,
    payload: res
  };
};

export const loggingError = err => {
  return {
    type: userActionTypes.LOGIN_ERROR,
    payload: err
  };
};
const loginAction = formaData => dispatch =>
  fetch("https://banka-react250.herokuapp.com/api/v2/auth/signin", {
    method: "POST",
    headers: {
      "Content-type": "application/json"
    },
    body: JSON.stringify(formaData)
  })
    .then(res => res.json())
    .then(data => {
      if (data.status === 200) {
        toast.success(data.message);
        return dispatch(logginSuccess(data));
      } else {
        toast.error(data.message);
        return dispatch(loggingError(err.response.data));
      }
    });

export default loginAction;
