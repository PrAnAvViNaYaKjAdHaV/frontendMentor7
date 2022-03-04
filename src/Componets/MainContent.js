import React from "react";
import Avatar from "./Avtar";
import Gallery from "./Gallery";
import Vruser from "../images/desktop/image-interactive.jpg";
import earth from "../images/desktop/image-deep-earth.jpg";
import arcade from "../images/desktop/image-night-arcade.jpg";
import player from "../images/desktop/image-soccer-team.jpg";
import car from "../images/desktop/image-grid.jpg";
import road from "../images/desktop/image-from-above.jpg";
import sky from "../images/desktop/image-pocket-borealis.jpg"
import roboat from "../images/desktop/image-curiosity.jpg";
import circle from "../images/desktop/image-fisheye.jpg";
import "../Componets/MainContent.css";
export default function MainContent() {
  return (
    <div>
      <div className="Container">
        <Avatar className="avtar" url={Vruser} name="vruser" />
        <div className="vrContent">
          <h1>
            THE LEADER IN <br /> INTERACTIVE VR
          </h1>
          <p>
            Founded 2011 , Loopstudios has been producing world-class virtual
            reality project for some of the best companies around the globe.Our
            award-winning creactinons have transformed businesses through
            digital experiecnes that blind to their brand.
          </p>
        </div>
      </div>
      <div className="content">
        <header>
          <h1>OUR CREATION</h1>
          <button>SEE ALL</button>
        </header>
        <div className="gallery">
          <Gallery url={earth} name="earth" text1="DEEP" text2="EARTH"/>
          <Gallery url={arcade} name="earth" text1="NIGHT" text2="ARCADE"/>
          <Gallery url={player} name="earth" text1="SOCCER" text2="TEAM VR"/>
          <Gallery url={car} name="earth" text1="The" text2="GRID"/>
          <Gallery url={road} name="earth" text1="FROM UP " text2=" ABOVE VR"/>
          <Gallery url={sky} name="earth" text1="POCKET" text2=" BPREALIS"/>
          <Gallery url={roboat} name="earth" text1="THE" text2=" CURIOSITY"/>
          <Gallery url={circle} name="earth" text1="MAKE IT " text2="FISHEYE"/>
        </div>
      </div>
    </div>
  );
}
