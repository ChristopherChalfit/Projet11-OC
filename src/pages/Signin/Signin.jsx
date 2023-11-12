import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Signin.sass";
import { useNavigate } from "react-router-dom";
import { fetchToken } from "../../redux/actions/auth.actions";
import Form from "../../components/Form/Form";

export default function Signin() {
  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
       <Form/>
      </section>
    </main>
  );
}
