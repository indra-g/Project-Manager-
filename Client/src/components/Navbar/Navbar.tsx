import React from "react";
import logo from "../../assets/pngs/Logo_trans.png";
import Button from "../UI/Button";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import classes from "./Navbar.module.css";

const Navbar: React.FC<{
  button1?: string;
  button2?: string;
  onClick1?: () => void;
  onClick2?: () => void;
}> = (props) => {
  const isAuth = useSelector((state: any) => state.isAuthenticated);
  return (
    <>
      <nav className="flex mx-16 items-center mt-8">
        <Link to={isAuth ? "/home" : "/"}>
          <img className="h-24" src={logo} alt={logo} />
        </Link>
        <div className="ml-auto flex space-x-10">
          {props.button1 && (
            <Button text={props.button1} onClick={props.onClick1} />
          )}
          {props.button2 && (
            <Button text={props.button2} onClick={props.onClick2} />
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
