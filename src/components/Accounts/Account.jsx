import "./Account.sass";

export default function Account({ type, accNbr, accAmount, description }) {
  return (
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">
            Argent Bank {type} ({accNbr}){" "}
          </h3>
          <p className="account-amount">${accAmount}</p>
          <p className="account-amount-description">{description}</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="button transaction-button">View transactions</button>
        </div>
      </section>
  );
}
