import React from "react";
import TextField from "@mui/material/TextField";
import Button from "../UI/Button";
import { Link } from "react-router-dom";
const ForgotPassForm = () => {
  const handleSubmit = () => {
    console.log("Send a reset Link");
  };
  return (
    <>
      <form className="mt-8 pb-14" onSubmit={handleSubmit}>
        <TextField
          sx={{ input: { color: "white" } }}
          type={"email"}
          // value={enteredEmail}
          placeholder="Hello1234@gmail.com"
          className="w-full mt-6"
          label="Email"
          name="resetEmail"
          required={true}
        />
        <h6 className="text-highlight text-l mt-6">
          By Clicking "Send Email", a link to reset your password will be
          <br />
          emailed to your mail account.
        </h6>
        <span className="w-100">
          <hr className="underline underline-offset-4 mt-6" />
        </span>
        <div className="flex items-center mt-8 justify-between text-white font-ubuntu">
          <span>
            You remember your credentials?&nbsp;
            <Link to="/logIn">
              <span className="underline underline-offset-3 font-bold font-ubuntu">
                Log In
              </span>
            </Link>
          </span>
          <Button type="submit" text="Send Email" />
        </div>
      </form>
    </>
  );
};
export default ForgotPassForm;
