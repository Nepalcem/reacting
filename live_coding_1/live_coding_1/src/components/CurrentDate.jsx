import React, { useState } from "react";
import { useEffect } from "react";

export default function CurrentDate() {
  const [currentDate, setCurrentDate] = useState(0);
  const [isTimerEnabled, setIsTimerEnabled] = useState(false);

  function padConvert(time) {
    const secondsLeft = time % 60;
    const minutes =
      time >= 3600 ? Math.floor((time % 3600) / 60) : Math.floor(time / 60);
    const hours = Math.floor(time / 3600);
    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${secondsLeft.toString().padStart(2, "0")}`;
  }

  let currentTime = padConvert(currentDate);

  function startTimer() {
    setIsTimerEnabled(!isTimerEnabled);
  }

  useEffect(() => {
    let interval;
    if (isTimerEnabled) {
      interval = setInterval(() => {
        setCurrentDate(currentDate + 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  });

  return (
    <>
      <div>{currentTime ?? `00:00:00`}</div>
      <button type="button" onClick={() => startTimer()}>
        Start
      </button>
      <button type="button" onClick={() => startTimer()}>
        Stop
      </button>
    </>
  );
}
