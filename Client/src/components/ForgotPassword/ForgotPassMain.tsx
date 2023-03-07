import React from "react";
import Navbar from "../Navbar/Navbar";
import ForgotPassForm from "./ForgotPassForm";
import img from "../../assets/images/Design.png";
import { useNavigate } from "react-router-dom";
const ForgotPassMain = () => {
  const navigate = useNavigate();
  const signUp = () => {
    navigate("/signUp");
  };
  const logIn = () => {
    navigate("/logIn");
  };
  return (
    <>
      <div className="flex flex-col h-screen">
        <Navbar
          button1="Log In"
          button2="Sign Up"
          onClick1={logIn}
          onClick2={signUp}
        />
        <div className="flex mx-28 my-auto justify-between">
          <div className="flex flex-col justify-center pb-9 pl-10">
            <h2 className="text-4xl font-ubuntu text-white font-bold my-5">
              Password Assistance
            </h2>
            <h6 className="text-highlight text-l">
              Don’t worry! It happens. Plead enter the email address associated
              <br />
              with your account
            </h6>
            {/* Here the text comes */}
            <ForgotPassForm />
          </div>
          <img style={{ height: "600px" }} src={img} alt="Design" />
        </div>
      </div>
    </>
  );
};
export default ForgotPassMain;
