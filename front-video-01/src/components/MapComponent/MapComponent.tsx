import { FC } from "react";
import dataArr from "./data";
import { users } from "./data";

const MapComponent: FC = () => {
  return (
    <>
      <div>
        <h2> Map function</h2>
        <ul className="text-list">
          {dataArr.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
      <div>
        <h2>Users List</h2>
        <ul className="users-list">
          {users.map((user, index, oldArray) => {
            const isLast = index === oldArray.length - 1;

            return (
              <li className="user-card" key={user.id}>
                {isLast && <span style={{ color: "red" }}>last</span>}
                <h3>Name: {user.name}</h3>
                <h4>Age: {user.age}</h4>
                <p>email: {user.email}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default MapComponent;
