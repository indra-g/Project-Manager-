import MButton from "@mui/material/Button";
const Button: React.FC<{
  text: string;
  onClick?: () => void;
}> = (props) => {
  return (
    <MButton
      onClick={props.onClick}
      className="h-12 w-24"
      variant="contained"
      style={{
        backgroundColor: "#222123",
        borderRadius: "50px",
        border: "1px solid white",
        textTransform: "capitalize",
      }}
    >
      {props.text}
    </MButton>
  );
};
export default Button;