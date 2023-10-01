import React from "react";
import menuImg1 from "../Images/m1.jpg";
import menuImg2 from "../Images/m2.jpg";
import menuImg3 from "../Images/m3.jpg";
import menuImg4 from "../Images/m4.jpg";
import "./Menu.css";
function Menu() {
  return (
    <div className="menu">
      <div className="menuContent">
        <h2>Most Popular Pizza</h2>
        <h4>We have selected you the most exquisite tastes around the world</h4>
      </div>
      <div className="menuData">
        <div className="menuDataCard">
          <img src={menuImg1} alt="" className="menuImg" />
          <h4>Margaritta</h4>
          <h5>$17.00</h5>
          <div className="rating">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
          </div>
        </div>
        <div className="menuDataCard">
          <img src={menuImg2} alt="" className="menuImg" />
          <h4>Montanara</h4>
          <h5>$13.00</h5>
          <div className="rating">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star-half"></i>
          </div>
        </div>
        <div className="menuDataCard">
          <img src={menuImg3} alt="" className="menuImg" />
          <h4>Con Carne</h4>
          <h5>$15.00</h5>
          <div className="rating">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
          </div>
        </div>
        <div className="menuDataCard">
          <img src={menuImg4} alt="" className="menuImg" />
          <h4>Pepperoni</h4>
          <h5>$19.00</h5>
          <div className="rating">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star-half"></i>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Menu;
