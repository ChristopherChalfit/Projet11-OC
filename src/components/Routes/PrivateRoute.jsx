import { Navigate, Outlet } from "react-router-dom";

export default function PrivateRoute(){
    let token = localStorage.getItem("token");
  
    if (!token) {
      token = sessionStorage.getItem("token");
    }
  
    return token ? <Outlet /> : <Navigate to="/login" />;
}