import "./Profiles.sass";
import { useSelector, } from "react-redux";
import Account from "../../components/Accounts/Account";
import HeaderAccount from "../../components/HeaderAccount/HeaderAccount";
export default function Profile() {
  return (
    <div className="main bg-dark">
      <HeaderAccount/>
      <h2 className="sr-only">Accounts</h2>
      <Account
        type="Checking"
        accNbr="x8349"
        accAmount="2,082.79"
        description="Available Balance"
      />
      <Account
        type="Checking"
        accNbr="x8349"
        accAmount="2,082.79"
        description="Available Balance"
      />
      <Account
        type="Checking"
        accNbr="x8349"
        accAmount="2,082.79"
        description="Available Balance"
      />
    </div>
  );
}
