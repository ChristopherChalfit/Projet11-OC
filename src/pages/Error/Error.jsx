import { NavLink } from "react-router-dom";
import "./Error.sass";
export default function Error() {
  return (
    <div className="error main bg-dark">
      <h2 className="error--h2">
        Error 404
        <br />
        page not found
      </h2>
      <i className="fa-solid fa-xmark fa-beat" ></i>
      <NavLink to="/" className="error--link">Return to home page</NavLink>
    </div>
  );
}
