import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import img from "../../assets/images/Design.png";
import Loginform from "./Loginform";

const Log = () => {
  const navigate = useNavigate();
  const signUp = () => {
    navigate("/signUp");
  };
  return (
    <>
      <div className="flex flex-col h-screen">
        <Navbar button1="Sign Up" onClick1={signUp} />
        <div className="flex mx-28 my-auto justify-between">
          <div className="flex flex-col justify-center pb-9 pl-10">
            <h2 className="text-4xl font-ubuntu text-white font-bold my-5">
              Log In
            </h2>
            <h6 className="text-highlight text-l">
              Welcome to Workzone, please put your <br />
              login credentials below{" "}
            </h6>
            {/* Here the text comes */}
            <Loginform />
          </div>
          <img style={{ height: "600px" }} src={img} alt="Design" />
        </div>
      </div>
    </>
  );
};

export default Log;
