import "./nav.css";
import Clock from "../clock/Clock";

function Nav() {
  return (
    <div className="nav-body-div">
      <div className="nav-info-div">
        <div className="nav-text">
          <Clock />
        </div>
        <div className="nav-text">info</div>
        <button className="nav-btn">Click</button>
      </div>
    </div>
  );
}

export default Nav;
