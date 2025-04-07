import { useState } from "react";
import "./App.css";
import Greeting from "./Components/Greeting";
import LogOutButton from "./Components/LogOutButton";
import LoginButton from "./Components/LoginButton";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  return (
    <>
      <Greeting isLoggedIn={isLoggedIn} />
      {isLoggedIn ? (<LogOutButton onClick={() => { setIsLoggedIn(false) }} />) : (<LoginButton onClick={() => setIsLoggedIn(true)} />)}
    </>
  );
}

export default App;
