import Navbar from "../Navbar/Navbar";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { authActions } from "../../store/auth-slice";
import TaskBar from "../UI/TaskBar/TaskBar";
import img from "../../assets/images/Design.png";
import StartAProjectForm from "./StartAProjectForm";

const StartAProjectMain = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logOut = () => {
    navigate("/");
    dispatch(authActions.logout());
  };
  return (
    <>
      <div className="flex flex-col h-screen">
        <Navbar button1="Logout" onClick1={logOut} />
        <TaskBar text="Start A New Project" />;
        <div className="flex mx-28 my-auto justify-between">
          <div className="flex flex-col pb-9 pl-10">
            <h6 className="text-2xl font-ubuntu text-white font-bold my-5 pr-32">
              Please Enter Your Project Details
            </h6>
            <StartAProjectForm />
          </div>
          <img style={{ height: "550px" }} src={img} alt="Design" />
        </div>
      </div>
    </>
  );
};

export default StartAProjectMain;
