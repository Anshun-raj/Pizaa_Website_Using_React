import React from "react";
import "./Home.css";
import HomePng from "../Images/home.png";
function Home(props) {
  return (
    <div className="home">
      <div className="homeLeft">
        <h2>Welcome to the world of tasty & fresh pizza</h2>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
        <button className="btn">Choose a Pizaa</button>
      </div>
      <div className="homeRight">
        <img src={HomePng} className="homeImg" alt=""/>
      </div>
    </div>
  );
}

export default Home;
