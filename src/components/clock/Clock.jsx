import React, { useState, useEffect } from "react";
import "./clock.css";

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  let months = [
    "Jan",
    "Feb",
    "March",
    "April",
    "May",
    "June",
    "July",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const formattedTime = () => {
    let month = months[time.getMonth()];
    let d = time.getDate();

    return month + " " + d;
  };

  return <div id="landing-txt">{formattedTime()}</div>;
}

export default Clock;
