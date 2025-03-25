import { FC } from "react";

interface ChildComponentProps {
  name: string;
  age: number;
}

const PropsComponent: FC<ChildComponentProps> = ({name, age}) => {
  return (
    <>
          <h3>Component with Props</h3>
          <p>Name: {name}</p>
          <span>Age: {age}</span>
    </>
  );
};

export default PropsComponent;
