import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Navbar />
    <App data="Lorem ipsum dolor sit amet consectetur, adipisicing elit." />
    <Footer data="Created by @AnshuNarayan" />
  </BrowserRouter>
);

reportWebVitals();
