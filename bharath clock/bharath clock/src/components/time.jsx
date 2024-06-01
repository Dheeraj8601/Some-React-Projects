import { useEffect, useState } from "react";

function Time() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const formattedTime = time.toLocaleTimeString(undefined, {
    hour: "numeric",
    minute: "numeric",
    second:"numeric",
    hour12: true, 
  }).toUpperCase(); 

  return (
    <h4 className="mb-5 tssize">
      This is the current time:{" "}
      <strong className="clr">
        {time.toLocaleDateString()} - {formattedTime}
      </strong>
    </h4>
  );
}

export default Time;


/*
//Using custom hooks

import { useEffect, useState } from "react";

function useCurrentTime() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return currentTime;
}

function Time() {
  const currentTime = useCurrentTime();

  const formattedTime = currentTime.toLocaleTimeString(undefined, {
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: true,
  }).toUpperCase();

  return (
    <h4 className="mb-5 tssize">
      This is the current time:{" "}
      <strong className="clr">
        {currentTime.toLocaleDateString()} - {formattedTime}
      </strong>
    </h4>
  );
}

export default Time;
*/