import React, { FC, useState } from "react";
import PropsComponent from "./PropsComponent";

const ParentPropsComponent: FC = () => {
  const [nameInput, setnameInput] = useState<string>("");
  const [ageInput, setageInput] = useState<number>(0);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target.name;
    if (target === "name") {
      setnameInput(e.target.value);
    } else {
      setageInput(parseInt(e.target.value) || 0);
    }
  };

  return (
    <>
      <h2>Parent Props Component</h2>
      <div>
        <label htmlFor="name">
          Name input:
          <input
            type="text"
            name="name"
            value={nameInput}
            onChange={handleInputChange}
            placeholder="Name..."
          />
        </label>
      </div>

      <div>
        <label htmlFor="age">
          Age input:
          <input
            type="text"
            name="age"
            value={ageInput}
            onChange={handleInputChange}
            placeholder="Name..."
          />
        </label> 
      </div>
      <PropsComponent name={nameInput} age={ageInput} />
    </>
  );
};

export default ParentPropsComponent;
