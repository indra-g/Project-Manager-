import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp1 from "./pages/Signupmain";
import SignUp2 from "./pages/Signupsecond";
import NotFound from "./pages/NotFound";
import ForgotPassword from "./pages/ForgotPassword";
import MainScreen from "./pages/MainScreen";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<MainScreen />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signUp" element={<SignUp1 />} />
      <Route path="/signUpCont" element={<SignUp2 />} />
      <Route path="/forgotPass" element={<ForgotPassword />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
