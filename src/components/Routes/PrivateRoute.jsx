import { Navigate, Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
export default function PrivateRoute(){
    let token = localStorage.getItem("token");
    if (!token) {
      token = useSelector((state) => state.auth.token);
    }
    return token ? <Outlet /> : <Navigate to="/login" />;
}