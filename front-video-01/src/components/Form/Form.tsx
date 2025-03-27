import { FC, useState,ChangeEvent } from "react";

const Form: FC = () => {
    const [inputValue, setinputValue] = useState("");

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setinputValue(e.target.value);
}

    return (
      <>
        <form action="">
          <input
            type="text"
            name="name"
            value={inputValue}
            onChange={handleChange}
          />
          <p>Our input value: {inputValue}</p>
        </form>
      </>
    );
};

export default Form;