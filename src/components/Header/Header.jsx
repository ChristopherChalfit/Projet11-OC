import { NavLink, useNavigate } from "react-router-dom";
import Logos from "../../assets/images/argentBankLogo.webp";
import "./Header.sass";
import { logout } from "../../redux/actions/auth.actions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchProfile } from "../../redux/actions/user.actions";
export default function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userProfile = useSelector((state) => state.user.userProfile);
  const tokenSelector = useSelector((state) => state.auth.token);
  const [token, setToken] = useState(tokenSelector || "");

  useEffect(
    () => {
      setToken(tokenSelector || localStorage.getItem("token") || "");
    },
    [tokenSelector],
    []
  );
  useEffect(() => {
    if (token) {
      dispatch(fetchProfile(token));
    }
  }, [token],[dispatch],[]);

  const handleSignOut = (e) => {
    e.preventDefault();
    dispatch(logout());
    navigate("/");
  };
  return (
    <header className="header">
      <NavLink to="/">
        <img src={Logos} alt="Logo" className="logo" />
      </NavLink>
      <nav className="header__navbar">
        {token ? (
          <>
            <NavLink to="/profile" className="main-nav-item">
              <i className="fa fa-user-circle"></i>
              {userProfile.firstName}
            </NavLink>
            <NavLink to="/" onClick={handleSignOut}>
              <i className="fa fa-sign-out"></i>
              Sign Out
            </NavLink>
          </>
        ) : (
          <NavLink to="/login">
            <i className="fa fa-user-circle"></i>
            Sign In
          </NavLink>
        )}
      </nav>
    </header>
  );
}
