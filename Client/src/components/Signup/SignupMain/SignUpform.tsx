import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";
import InputLabel from "@mui/material/InputLabel";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import {
  FormControl,
  IconButton,
  InputAdornment,
  OutlinedInput,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../UI/Button";
import axios from "axios";
import { useDispatch } from "react-redux";
import { authActions } from "../../../store/auth-slice";

const SignUpForm = () => {
  const dispatch = useDispatch();
  const [enteredEmail, setEnteredEmail] = useState();
  const [enteredPass, setEnteredPass] = useState();
  const [enteredCPass, setEnteredCPass] = useState();
  const [error, setError] = useState<any>();
  const [showPassword, setShowPassword] = React.useState(false);
  const navigate = useNavigate();
  const signUpCont = () => {
    navigate("/signUpCont");
  };
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (enteredCPass !== enteredPass) {
      setError("Please Check the password");
      return;
    }
    const signUpDetails = { Email: enteredEmail, Password: enteredPass };
    axios
      .post("api/signUp", signUpDetails)
      .then((response) => {
        console.log(response.data);
        dispatch(authActions.login(response.data));
        signUpCont();
      })
      .catch((e) => {
        console.log(e.response.data.errorMessage);
        setError(e.response.data.errorMessage);
      });
    return;
  };

  const handleEmailChange = (e: any) => {
    setEnteredEmail(e.target.value);
  };
  const handlePassChange = (e: any) => {
    setEnteredPass(e.target.value);
  };
  const handleCPassChange = (e: any) => {
    setEnteredCPass(e.target.value);
  };
  return (
    <>
      <form className="mt-8 pb-14" onSubmit={handleSubmit}>
        <TextField
          sx={{ input: { color: "white" } }}
          type={"email"}
          placeholder="Hello1234@gmail.com"
          className="w-full mt-6"
          label="Email"
          name="email"
          onChange={handleEmailChange}
          required={true}
        />
        <FormControl sx={{ width: "100%" }} variant="outlined">
          <InputLabel className="mt-6" htmlFor="outlined-adornment-password">
            Password*
          </InputLabel>
          <OutlinedInput
            sx={{ input: { color: "white" } }}
            placeholder="Enter your password"
            className="w-full mt-6"
            name="password"
            label="Password"
            required={true}
            type={showPassword ? "text" : "password"}
            onChange={handlePassChange}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  sx={{ color: "white" }}
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        <div>
          <FormControl sx={{ width: "100%" }} variant="outlined">
            <InputLabel className="mt-6" htmlFor="outlined-adornment-password">
              Confirm your password*
            </InputLabel>
            <OutlinedInput
              sx={{ input: { color: "white" } }}
              placeholder="Confirm your password"
              className="mt-6"
              name="confirmPassword"
              label="confirm your password"
              required={true}
              type="password"
              onChange={handleCPassChange}
            />
          </FormControl>
        </div>
        <h1 className="mt-2 text-red-600">{error}</h1>
        <span className="w-100">
          <hr className="underline underline-offset-4 mt-6" />
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
          <Button type="submit" text="Continue" />
        </div>
      </form>
    </>
  );
};

export default SignUpForm;
