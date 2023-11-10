import { EDIT_USERNAME, GET_USERPROFILE } from "./types.actions";

export const userProfile = (firstname, lastname, username) => {
  return {
    type: GET_USERPROFILE,
    payload: { firstname, lastname, username },
  };
};

export const updateUsername = (username) => {
  return {
    type: EDIT_USERNAME,
    payload: username,
  };
};

export function fetchProfile(token) {
  return async (dispatch) => {
    if (token) {
      try {
        const url = "http://localhost:3001/api/v1/user/profile";
        const response = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        const dataResponse = await response.json();
        const firstName = dataResponse.body.firstName;
        const lastName = dataResponse.body.lastName;
        const userName = dataResponse.body.userName;
        console.log(dataResponse);
        switch (dataResponse.status) {
          case 400:
            //dispatch(loginFailed(dataResponse.message));
            break;
          case 200:
            dispatch(userProfile(firstName, lastName, userName));
            break;
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log("token inexistant");
    }
  };
}
