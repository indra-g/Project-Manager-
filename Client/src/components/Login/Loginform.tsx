import React from "react";
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
import { Link } from "react-router-dom";
import Button from "../UI/Button";
const Loginform = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
  const checkEmail = (email: string) => {
    let re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(email)) {
      return true;
    }
    return false;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Logged In");
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
          required={true}
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
            required={true}
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
        <Link to="/forgotPass">
          <h1 className="text-right text-white underline underline-offset-3 my-7 font-ubuntu">
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
