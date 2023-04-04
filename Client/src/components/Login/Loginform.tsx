import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";
import InputLabel from "@mui/material/InputLabel";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import axios from "axios";
import {
  FormControl,
  IconButton,
  InputAdornment,
  OutlinedInput,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import Button from "../UI/Button";
import { useDispatch } from "react-redux";
import { authActions } from "../../store/auth-slice";
const Loginform = () => {
  const dispatch = useDispatch();
  const [error, setError] = useState(null);
  const [enteredEmail, setEnteredEmail] = useState();
  const [enteredPass, setEnteredPass] = useState();
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
  // const checkEmail = (email: string) => {
  //   let re =
  //     /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  //   if (re.test(email)) {
  //     return true;
  //   }
  //   return false;
  // };
  const navigate = useNavigate();
  const goHome = () => {
    navigate("/home");
  };
  const handlePassChange = (e: any) => {
    setEnteredPass(e.target.value);
  };
  const handleEmailChange = (e: any) => {
    setEnteredEmail(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const loginDetails = { Email: enteredEmail, Password: enteredPass };
    axios
      .post("api/login", loginDetails)
      .then((response) => {
        console.log(response.data);
        dispatch(authActions.login(response.data));
        goHome();
      })
      .catch((e) => {
        console.log(e.response.data.errorMessage);
        setError(e.response.data.errorMessage);
      });
    return;
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
          name="email"
          onChange={handleEmailChange}
          // required={true}
        />
        <FormControl sx={{ width: "100%" }} variant="outlined">
          <InputLabel className="mt-6" htmlFor="outlined-adornment-password">
            Password*
          </InputLabel>
          <OutlinedInput
            sx={{ input: { color: "white" } }}
            //   value={enteredPassword}
            placeholder="Enter your password"
            className="w-full mt-6"
            name="password"
            label="Password"
            onChange={handlePassChange}
            // required={true}
            type={showPassword ? "text" : "password"}
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
        <h1 className="mt-2 text-red-600">{error}</h1>
        <Link to="/forgotPass">
          <h1 className="text-right text-white underline underline-offset-3 mb-7 mt-2 font-ubuntu">
            Forget Password
          </h1>
        </Link>
        <span className="w-100 mt-24">
          <hr className="underline underline-offset-4" />
        </span>
        <div className="flex items-center mt-8 justify-between text-white font-ubuntu">
          <span>
            Don’t have an account?&nbsp;
            <Link to="/signUp">
              <span className="underline underline-offset-3 font-bold font-ubuntu">
                Sign up
              </span>
            </Link>
          </span>
          <Button type="submit" text="Log In" />
        </div>
      </form>
    </>
  );
};

export default Loginform;
