import { FC } from "react";

interface GreetingProp {
    isLoggedIn: boolean;
}

const Greeting: FC<GreetingProp> = ({isLoggedIn}) => {
    return <h2>{isLoggedIn ? "Hello" : "Please log in!"}</h2>;
};

export default Greeting;