import { FC } from "react";

interface LoginButtonProp {
  onClick: () => void;
}

const LoginButton: FC<LoginButtonProp> = ({ onClick }) => {
  return (
    <button
      style={{ backgroundColor: "green", color: "white" }}
      onClick={onClick}
    >
      Log In
    </button>
  );
};

export default LoginButton;
