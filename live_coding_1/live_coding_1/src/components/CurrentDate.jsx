import React, { useState } from "react";
import { useEffect } from "react";

export default function CurrentDate() {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDate(new Date())
    }, 1000);

    return () => clearInterval(interval);
  });
  return <div>{currentDate.toLocaleString()}</div>;
}
