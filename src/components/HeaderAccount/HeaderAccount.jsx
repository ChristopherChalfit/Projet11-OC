import { useSelector } from "react-redux";
import "./HeaderAccount.sass";
import { useState } from "react";
import EditForm from "../EditForm/EditForm";
export default function HeaderAccount() {
  const userProfile = useSelector((state) => state.user.userProfile);
  const [isEditing, setEditing] = useState(false);
  if (userProfile) {
    return (
      <div className="header--account">
        {!isEditing ? (
          <>
            <h1>
              Welcome back
              <br />
              {userProfile.userName} !
            </h1>
            <button className="button" onClick={()=>setEditing(true)}>Edit Name</button>
          </>
        ) : (
          <EditForm setIsEditing={setEditing}/>
        )}
      </div>
    );
  }
}
