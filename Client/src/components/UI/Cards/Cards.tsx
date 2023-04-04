import React from "react";
import classes from "./Cards.module.css";
const Cards: React.FC<{
  projectName: string;
  projectDescription: string;
  projectDeadline: string;
}> = (props) => {
  const date = props.projectDeadline;
  const newDate = date.substring(0, date.indexOf("T"));
  return (
    <>
      <div
        className={`bg-white rounded-lg inline-block mb-16 mr-10 w-1/2 ${classes.width}`}
      >
        <div className="p-6">
          <h1 className="mb-2 text-lg font-bold">{props.projectName}</h1>
          <h1 className={"mb-3 text-sm leading-4"}>
            {props.projectDescription}
          </h1>
          <h1 className="text-sm font-bold">Deadline: {newDate}</h1>
        </div>
      </div>
    </>
  );
};
export default Cards;
