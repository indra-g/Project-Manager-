import React from "react";
import { Link } from "react-router-dom";
import prediction from "../../../assets/svgs/prediction.svg";
import classes from "./TaskBar.module.css";

const TaskBar: React.FC<{
  text: string;
}> = (props) => {
  return (
    <>
      <div className="mt-10 ml-16 flex items-center space-x-12">
        <Link to={"/prediction"}>
          <img
            className={classes.changeColor}
            src={prediction}
            alt="preditionIcon"
          />
        </Link>
        <h1 className="text-white font-bold text-3xl">{props.text}</h1>
      </div>
    </>
  );
};
export default TaskBar;
