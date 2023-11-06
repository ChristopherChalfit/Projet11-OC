import { Navigate, useNavigate } from "react-router-dom";
import { LOGIN_FAILED, LOGIN_SUCCESS, LOGOUT } from "./types.actions";

export const login_Sucess = (token) => {
  return {
    type: LOGIN_SUCCESS,
    payload: token,
  };
};
export const loginFailed = (error) => {
    return {
        type: LOGIN_FAILED,
        payload: error,
    }
}

export const logout = () => {
    return {
        type: LOGOUT,
    }
} 

export function fetchToken(content, navigate) {
  return async (dispatch) => {
    try {
      const url = "http://localhost:3001/api/v1/user/login";
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: content,
      });
      const dataResponse = await response.json();
      const token = dataResponse.body.token;
      console.log(dataResponse);
      switch (dataResponse.status) {
        case 400:
          dispatch(loginFailed(dataResponse.message));
          break;
        case 200:
          dispatch(login_Sucess(token));
          navigate("/profile")
          break;
      }
    } catch (error) {
      console.log(error);
      dispatch(loginFailed(error));
    }
  };
}