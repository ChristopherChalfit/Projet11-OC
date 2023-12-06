import { Navigate, useNavigate } from "react-router-dom";
import { LOGIN_FAILED, LOGIN_SUCCESS, LOGOUT } from "./types.actions";
import { fetchProfile } from "./user.actions";

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
  };
};

export const logout = () => {
  localStorage.removeItem("token");
  return {
    type: LOGOUT,
  };
};

export function fetchToken(content, Successlogin,ErrorLogin, rememberMe) {
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
      switch (dataResponse.status) {
        case 400:
          ErrorLogin(dataResponse.message);
          break;
        case 200:
          const token = dataResponse.body.token;
          if (rememberMe) {
            localStorage.setItem("token", token);
          }
          Successlogin(token);
          break;
      }
    } catch (error) {
      console.log(error);
      dispatch(loginFailed(error));
    }
  };
}
