import { NavLink, useNavigate } from "react-router-dom";
import Logos from "../../assets/images/argentBankLogo.png";
import "./Header.sass";
import { isConnected } from "../../data/API";
import { logout } from "../../redux/actions/auth.actions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchProfile } from "../../redux/actions/user.actions";
export default function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userProfile = useSelector((state) => state.user.firstname);
  const token = localStorage.getItem("token");
  useEffect(() => {
    dispatch(fetchProfile(token));
    
    
  }, []);
  const handleSignOut = (e) => {
    e.preventDefault();
    dispatch(logout());
    navigate("/");
  };
 
  if (isConnected === true) {
    return (
      <header className="header">
        <NavLink to="/">
          <img src={Logos}></img>
        </NavLink>
        <nav className="header__navbar">
        <NavLink to='/profile' className='main-nav-item'>
            <i className='fa fa-user-circle'></i>
            {userProfile}
          </NavLink>
          <NavLink to="/" onClick={handleSignOut}>
            <i className="fa fa-user-circle"></i>
            Sign Out
          </NavLink>
        </nav>
      </header>
    );
  }else{
  return (
    <header className="header">
      <NavLink to="/">
        <img src={Logos}></img>
      </NavLink>
      <nav className="header__navbar">
        <NavLink to="/login">
          <i className="fa fa-user-circle"></i>
          Sign In
        </NavLink>
      </nav>
    </header>
  );
  }
}
