import { FC, useState, useEffect } from "react";

interface User {
  name: {
    first: string;
    last: string;
  };
  email: string;
  picture: {
    large: string;
  };
  dob: {
    age: number;
  };
}

const UseEffectApi: FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    try {
      const response = await fetch("https://randomuser.me/api/");
      if (!response.ok) {
        throw new Error("Response failed");
      }

      const data = await response.json();
      setUser(data.results[0]);
      setLoading(false);
    } catch (err) {
      setError("Failed to fetch data");
      setLoading(false);
    }
  };

  useEffect(() => {
    // const newInterval = setInterval(() => {
    fetchData();
    // }, 10000);

    //   return () => clearInterval(newInterval)
  }, []);

  if (loading) return <p>Data is loading...</p>;

  if (error) return <p>{error}</p>;

  return (
    <>
      <h1>User Profile:</h1>
      {user && (
        <>
          <img src={user.picture.large} alt="some text" />
          <h2>
            User name: {user.name.first} {user.name.last}
          </h2>
          <p>Email: {user.email}</p>
          {/* <p>Age: {user.dob.age}</p> */}
        </>
      )}
    </>
  );
};

export default UseEffectApi;
