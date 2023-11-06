import { EDIT_USERNAME, GET_USERPROFILE } from "./types.actions"

export const userProfile = (firstname, lastname, username) => {
    return {
        type: GET_USERPROFILE,
        payload: {firstname, lastname, username},
    }
}

export const updateUsername = (username) => {
    return {
        type: EDIT_USERNAME,
        payload: username,
    }
}