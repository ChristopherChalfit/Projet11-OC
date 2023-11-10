import {HashRouter, Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import Error from "./Error/Error";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Signin from "./Signin/Signin";
import Profile from "./Profiles/Profiles";
import PrivateRoute from "../components/Routes/PrivateRoute";

function App() {

  return (
    <HashRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/login" element={<Signin/>} />
      <Route element={<PrivateRoute/>}>
      <Route path="/profile" element={<Profile/>} />
        </Route>
      <Route path="*" element={<Error />} />
    </Routes>
    <Footer />
  </HashRouter>
  );
}

export default App
