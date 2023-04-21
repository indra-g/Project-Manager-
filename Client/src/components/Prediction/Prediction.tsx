import Navbar from "../Navbar/Navbar";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { authActions } from "../../store/auth-slice";
import PredictionForm from "./PredictionForm";

const Prediction = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logOut = () => {
    navigate("/");
    dispatch(authActions.logout());
  };
  return (
    <>
      <Navbar button1="Logout" onClick1={logOut} />
      <h2 className="text-4xl m-32 font-ubuntu text-white font-bold my-5">
        Enter Values to Predict the Defects
      </h2>
      <PredictionForm />
    </>
  );
};

export default Prediction;
