import React from "react";
import Navbar from "../../Navbar/Navbar";
import img from "../../../assets/images/Design.png";
import SignUpform2 from "./SignUpform2";
const SignupCont = () => {
  return (
    <>
      <div className="flex flex-col h-screen">
        <Navbar />
        <div className="flex mx-28 my-auto justify-between">
          <div className="flex flex-col justify-center pb-9 pl-10">
            <h2 className="text-4xl font-ubuntu text-white font-bold my-5">
              Sign Up, Cont
            </h2>
            <h6 className="text-highlight text-l">
              Let’s get you all set up so you can verify your personal account
              <br /> and begin using Project Manager
            </h6>
            {/* Here the text comes */}
            <SignUpform2 />
          </div>
          <img style={{ height: "600px" }} src={img} alt="Design" />
        </div>
      </div>
    </>
  );
};
export default SignupCont;
