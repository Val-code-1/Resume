import React from "react";
import "./Portfolio.css";
import mtg from "../../assets/mtg.png";
import glacier from "../../assets/glacier.jpeg";
const Portfolio = () => {
  return (
    <div id="portPage">
      <div id="mtgDiviner" className="project">
        <a
          href="https://mtg-card-diviner.herokuapp.com/"
          target="blank"
          className="linkImg"
        >
          <img src={mtg} className="allLinkImgs" />
        </a>
        <p className="linkText">
          Magic the Gathering Diviner
        </p>
      </div>
      <div id="glacier" className="project">
        <a href="" target="blank" className="linkImg">
          <img src={glacier} className="allLinkImgs" />
        </a>
        <p className="linkText">Glacier Events website</p>
      </div>
    </div>
  );
};

export default Portfolio;
