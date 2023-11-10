import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Signin.sass";
import { useNavigate } from "react-router-dom";
import { fetchToken } from "../../redux/actions/auth.actions";

export default function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loginError = useSelector((state) => state.auth.loginError);

  const handleSignIn = (e) => {
    e.preventDefault();
    const login = JSON.stringify({
      email: email,
      password: password,
    });
    dispatch(fetchToken(login, navigate, rememberMe));
    
  };
  let errorMessage = null;
  if (loginError) {
    errorMessage = <p style={{ color: "red" }}>{loginError}</p>;
  }
  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>

        <form onSubmit={handleSignIn}>
          <div className="input-wrapper">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="input-remember">
            <input
              type="checkbox"
              id="remember-me"
              value={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          {errorMessage}
          <button className="sign-in-button" type="submit">
            Sign In
          </button>
        </form>
      </section>
    </main>
  );
}
