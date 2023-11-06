import {HashRouter, Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import Error from "./Error/Error";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Signin from "./Signin/Signin";
import Profile from "./Profiles/Profiles";

function App() {

  return (
    <HashRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/signin" element={<Signin/>} />
      <Route path="/profile" element={<Profile/>} />
      <Route path="*" element={<Error />} />
    </Routes>
    <Footer />
  </HashRouter>
  );
}

export default App
