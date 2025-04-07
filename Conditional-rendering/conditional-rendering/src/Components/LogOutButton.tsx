import { FC } from "react";

interface LogOutButtonProp {
  onClick: () => void;
}

const LogOutButton: FC<LogOutButtonProp> = ({ onClick }) => {
  return (
    <button
      style={{ backgroundColor: "blue", color: "white" }}
      onClick={onClick}
    >
      Log Out
    </button>
  );
};

export default LogOutButton;
