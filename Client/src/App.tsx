import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp1 from "./pages/Signupmain";
import SignUp2 from "./pages/Signupsecond";
import NotFound from "./pages/NotFound";
import ForgotPassword from "./pages/ForgotPassword";
import MainScreen from "./pages/MainScreen";
import StartAProject from "./pages/StartAProject";
import { useSelector } from "react-redux";
import PredictionMain from "./pages/PredictionMain";

const App: React.FC = () => {
  const isAuth = useSelector((state: any) => state.isAuthenticated);
  return (
    <Routes>
      {!isAuth && <Route path="/" element={<Home />} />}
      {isAuth && <Route path="/home" element={<MainScreen />} />}
      {isAuth && <Route path="/prediction" element={<PredictionMain />} />}
      {isAuth && <Route path="/startAProject" element={<StartAProject />} />}
      {!isAuth && <Route path="/login" element={<Login />} />}
      {!isAuth && <Route path="/signUp" element={<SignUp1 />} />}
      {isAuth && <Route path="/signUpCont" element={<SignUp2 />} />}
      {!isAuth && <Route path="/forgotPass" element={<ForgotPassword />} />}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
