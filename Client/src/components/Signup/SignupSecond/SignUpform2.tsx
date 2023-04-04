import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../UI/Button";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { authActions } from "../../../store/auth-slice";
const SignUpform2 = () => {
  const dispatch = useDispatch();
  const userId = useSelector((state: any) => state.user_UID);
  const email = useSelector((state: any) => state.email);
  const [enteredFName, setFName] = useState();
  const [enteredLName, setLName] = useState();
  const [phoneNo, setphoneNo] = useState();
  const navigate = useNavigate();
  const goHome = () => {
    navigate("/home");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const signUpDetails = {
      userId,
      email,
      firstName: enteredFName,
      lastName: enteredLName,
      phoneNo,
    };
    axios
      .post("api/signUp/details", signUpDetails)
      .then((res) => {
        dispatch(authActions.signUp(signUpDetails));
        goHome();
      })
      .catch((e) => {
        console.log(e);
      });
    return;
  };
  const handleFname = (e: any) => {
    setFName(e.target.value);
  };
  const handleLname = (e: any) => {
    setLName(e.target.value);
  };
  const handlePhoneNo = (e: any) => {
    setphoneNo(e.target.value);
  };

  return (
    <>
      <form className="mt-8 pb-14" onSubmit={handleSubmit}>
        <TextField
          sx={{ input: { color: "white" } }}
          type="text"
          placeholder="Enter your First Name"
          className="w-full mt-6"
          label="First Name"
          name="fName"
          onChange={handleFname}
          required={true}
        />
        <div className="mt-6">
          <TextField
            sx={{ input: { color: "white" } }}
            type="text"
            placeholder="Enter your Last Name"
            className="w-full mt-6"
            label="Last Name"
            name="lName"
            onChange={handleLname}
            required={true}
          />
        </div>
        <div className="mt-6">
          <TextField
            sx={{ input: { color: "white" } }}
            type="number"
            placeholder="Enter your Phone Number"
            className="w-full mt-6"
            label="Phone Number"
            name="PNumber"
            onChange={handlePhoneNo}
            required={true}
          />
        </div>
        <span className="w-100">
          <hr className="underline underline-offset-4 mt-12" />
        </span>
        <div className="flex items-center mt-8 justify-between text-white font-ubuntu">
          <span>
            Don’t have an account?&nbsp;
            <Link to="/login">
              <span className="underline underline-offset-3 font-bold font-ubuntu">
                Log In
              </span>
            </Link>
          </span>
          <Button type="submit" text="Sign Up" />
        </div>
      </form>
    </>
  );
};
export default SignUpform2;
