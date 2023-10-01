import React from "react";
import reviewPng1 from "../Images/review1.jpg";
import reviewPng2 from "../Images/review2.jpg";
import reviewPng3 from "../Images/review3.jpg";
import "./Review.css";
function Review() {
  return (
    <div className="review">
      <div>
        <h2>Reviewers</h2>
      </div>
      <div className="reviewData">
        <div className="reviewDataCard">
          <img src={reviewPng1} alt="" className="reviewImg" />
          <h4>John Smith</h4>
          <p>Lorem ipsum dolor sit amet consectetur,adipisicing elit.</p>
          <div className="socialIcon">
            <i className="fab fa-facebook"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-linkedin"></i>
          </div>
        </div>
        <div className="reviewDataCard">
          <img src={reviewPng2} alt="" className="reviewImg" />
          <h4>Angelina Joly</h4>
          <p>Lorem ipsum dolor sit amet consectetur,adipisicing elit.</p>
          <div className="socialIcon">
            <i className="fab fa-facebook"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-linkedin"></i>
          </div>
        </div>
        <div className="reviewDataCard">
          <img src={reviewPng3} alt="" className="reviewImg" />
          <h4>Vin Diesel</h4>
          <p>Lorem ipsum dolor sit amet consectetur,adipisicing elit.</p>
          <div className="socialIcon">
            <i className="fab fa-facebook"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-linkedin"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Review;
