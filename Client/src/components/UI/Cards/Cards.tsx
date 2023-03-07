import React from "react";
import classes from "./Cards.module.css";
const Cards: React.FC<{
  projectName: string;
  projectDescription: string;
  deadline: string;
}> = (props) => {
  return (
    <>
      <div className="bg-white rounded-lg inline-block text-center mb-16 mr-10">
        <div className="p-6">
          <h1 className="mb-2 text-lg font-bold">{props.projectName}</h1>
          <h1 className={`${classes.width} mb-3 text-sm leading-4`}>
            {props.projectDescription}
          </h1>
          <h1 className="text-sm font-bold">Deadline: {props.deadline}</h1>
        </div>
      </div>
    </>
  );
};
export default Cards;
