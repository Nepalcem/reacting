import { FC, useState } from "react";

const Counter: FC = () => {
const [count, setCount] = useState(0);

    return <>
        <p>Value = {count}</p>
        <button type="button" className="button-add" onClick={() => setCount(count+1)}>Add value</button>
    </>;
};

export default Counter;