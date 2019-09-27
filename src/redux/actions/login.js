import axios from "axios";
import { toast } from "react-toastify";
import * as userActionTypes from "./types/userActionTypes";

const { BASE_URL } = process.env;

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
// const loginAction = (formaData) => dispatch =>{
//     axios
//     .post(`${BASE_URL}/api/v2/auth/signin`, formaData)
//     .then(res => {
//             console.log("res .... ", res);
//             return dispatch({
//                 type: userActionTypes.LOGIN,
//                 payload: res.data
//             })
//     })
//     .catch(err=>{
//         console.log('Error', err)
//             return dispatch({
//                 type: userActionTypes.LOGIN_ERROR,
//                 payload: err
//             })
//     })
// }

// export default loginAction

const loginActionFunc = input => {
  return dispatch => {
    axios
      .post(`${BASE_URL}/api/v2/auth/signin`, input)
      .then(res => {
        return dispatch(logginSuccess(res.data));
      })
      .catch(err => {
        return dispatch(loggingError(err.response.data));
      });
  };
};

export default loginActionFunc;
