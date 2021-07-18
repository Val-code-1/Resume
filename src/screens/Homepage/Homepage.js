import React from "react";
import "./Homepage.css";
import img from "../../assets/Bojack.jpg";
const Homepage = () => {
  return (
    <div id="background">
      <img src={img} id="img" />
    </div>
  );
};

export default Homepage;
