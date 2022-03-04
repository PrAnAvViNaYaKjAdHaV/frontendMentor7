import React from "react";
import "./Nav.css";
import navigationIcon from "../images/icon-hamburger.svg";
export default function Nav() {
  return (
    <main>
      <div className="nContaner">
        <nav>
          <h1>Loopstudios</h1>
          <ul>
            <li>About</li>
            <li>Careers</li>
            <li>Event</li>
            <li>products</li>
            <li>support</li>
            <li>
              <img src={navigationIcon} alt="neviagtionIcon" />
            </li>
          </ul>
        </nav>
        <div className="Content">
          <h1>IMMERSIVE EXPERIENCES THAT DLIVER</h1>
        </div>
      </div>
    </main>
  );
}
