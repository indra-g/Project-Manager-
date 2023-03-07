import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp1 from "./pages/Signupmain";
import SignUp2 from "./pages/Signupsecond";
import NotFound from "./pages/NotFound";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signUp" element={<SignUp1 />} />
      <Route path="/signUpCont" element={<SignUp2 />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
