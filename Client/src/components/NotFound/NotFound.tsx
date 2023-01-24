import Button from "../UI/Button";
import { useNavigate } from "react-router-dom";

import styles from "./NotFound.module.css";

const NotFound = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(-1);
  };
  return (
    <div className="flex flex-col justify-center items-center h-screen space-y-5 text-white">
      <h1 title="404" className={`${styles.text} text-7xl font-ptsans`}>
        404
      </h1>
      <h4
        title="Sorry! Page not found"
        className={`${styles.text} text-4xl font-ptsans pb-3`}
      >
        Sorry! Page not found
      </h4>
      <Button onClick={handleClick} text="Go Back" />
    </div>
  );
};

export default NotFound;
