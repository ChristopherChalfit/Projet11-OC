import {  useSelector } from "react-redux";
export function isConnected(){
    const connected= useSelector((state) => state.auth.isConnected);
    return connected;
}