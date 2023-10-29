import {HashRouter, Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import Error from "./Error/Error";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

function App() {

  return (
    <HashRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="*" element={<Error />} />
    </Routes>
    <Footer />
  </HashRouter>
  );
}

export default App
