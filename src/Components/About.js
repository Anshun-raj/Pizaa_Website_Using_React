import React from "react";
import "./About.css";
import AboutPng from "../Images/a.png";
function About() {
  return (
    <div className="about">
      <div className="aboutLeft">
        <img src={AboutPng} className="aboutImg" alt="" />
      </div>
      <div className="aboutRight">
        <h2>The Delicious Food For a Good Mood</h2>
        <h5>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.Eaque,Ipsum?
        </h5>
        
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas beatae,
        doloribus quisquam id consequatur porro veniam numquam veritatis, dolore
        possimus dicta aliquid dolor saepe et!</p>
        <button className="btn">Choose a Pizaa</button>
      </div>
    </div>
  );
}

export default About;
