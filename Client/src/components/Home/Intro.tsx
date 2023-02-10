import React from "react";
import Navbar from "../Navbar/Navbar";
import img from "../../assets/images/Design.png";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const login = () => {
    navigate("/logIn");
  };
  const signUp = () => {
    navigate("/signUp");
  };

  return (
    <>
      <div className="flex flex-col h-screen">
        <Navbar
          button1="Log In"
          button2="Sign Up"
          onClick1={login}
          onClick2={signUp}
        />
        <div className="flex mx-28 my-auto justify-between">
          <div className="flex flex-col justify-center pb-14">
            <h4 className="text-highlight font-ubuntu my-4">
              Project Management
            </h4>
            <h2 className="text-6xl text-white font-ptsans font-bold leading-snug">
              We Provide you with <br />
              features to manage
              <br /> your <span className="font-normal">project</span> from{" "}
              <br />
              remote location
            </h2>
          </div>
          <img style={{ height: "600px" }} src={img} alt="Design" />
        </div>
      </div>
    </>
  );
};

export default Home;
