import { LOGIN_FAILED, LOGIN_SUCCESS, LOGOUT } from "../actions/types.actions";

const initialState={
    status: "NULL",
    isConnected: false,
    token: null,
    loginError: null,
}
export const authReducer = (state = initialState, action) =>{
    switch(action.type){
        case LOGIN_SUCCESS:
            return{
                ...state,
                status: "SUCCESSED",
                isConnected: true,
                token: action.payload,
                loginError: null
            }
        case LOGIN_FAILED:
            return{
                ...state,
                status: "FAILED",
                isConnected: false,
                loginError: action.payload
            }
        case LOGOUT:
            return initialState;
        default:
            return state
    }
};



  