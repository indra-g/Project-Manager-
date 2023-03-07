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
import { Link, useNavigate } from "react-router-dom";
import Button from "../../UI/Button";
const SignUpForm = () => {
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
    console.log("Uploaded Email and pass");
    signUpCont();
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
        <div>
          <FormControl sx={{ width: "100%" }} variant="outlined">
            <InputLabel className="mt-6" htmlFor="outlined-adornment-password">
              Confirm your password*
            </InputLabel>
            <OutlinedInput
              sx={{ input: { color: "white" } }}
              //   value={enteredPassword}
              placeholder="Confirm your password"
              className="mt-6"
              name="confirmPassword"
              label="confirm your password"
              required={true}
              type="password"
            />
          </FormControl>
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
          <Button type="submit" text="Continue" />
        </div>
      </form>
    </>
  );
};

export default SignUpForm;
