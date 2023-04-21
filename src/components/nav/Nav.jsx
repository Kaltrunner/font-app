import "./nav.css";
// import "./clock.css";
// import Clock from "./components/clock/Clock";
import { useState, useEffect } from "react";

function Nav() {

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
      "Sept",
      "Oct",
      "Nov",
      "Dec",
    ];
  
    const formattedTime = () => {
      // let y = time.getFullYear();
      let month = months[time.getMonth()];
      let d = time.getDate();
  
      return month + " " + d;
    };
  
    return <div id="landing-txt">{formattedTime()}</div>;
  }

  return (
    <div className="nav-body-div">
      <div className="nav-info-div">
        {/* <Clock /> */}
        <div className="nav-text">{Clock()}</div>
        <div className="nav-text">info</div>
        <button className="nav-btn">Click</button>
      </div>
    </div>
  );
}

export default Nav;
