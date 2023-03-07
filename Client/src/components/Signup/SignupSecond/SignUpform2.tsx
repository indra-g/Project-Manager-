import React from "react";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";
import Button from "../../UI/Button";
const SignUpform2 = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Signed Up");
    return;
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
